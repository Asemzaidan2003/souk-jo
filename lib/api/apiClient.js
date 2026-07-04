
import axios from "axios";

// ==========================================
// 1. Token Manager — تخزين آمن بالذاكرة
// ==========================================
const tokenManager = (() => {
  let accessToken = null;

  return {
    getAccessToken: () => accessToken,
    setAccessToken: (token) => {
      accessToken = token;
    },
    clearAccessToken: () => {
      accessToken = null;
    },
  };
})();

// ==========================================
// 2. Auth Event Emitter — للتواصل مع الـ UI/Router
//    بدل الاعتماد على window.location.href مباشرة
// ==========================================
const authEvents = (() => {
  const listeners = new Set();

  return {
    onSessionExpired: (callback) => {
      listeners.add(callback);
      // ترجع دالة unsubscribe لتفادي تسريب الذاكرة
      return () => listeners.delete(callback);
    },
    emitSessionExpired: () => {
      listeners.forEach((cb) => cb());
    },
  };
})();

// ==========================================
// 3. إعداد نسخة أكسيوس
// ==========================================
const BASE_URL = process.env.NEXT_PUBLIC_DEV_API;
const REFRESH_TIMEOUT_MS = 8000;

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
  samesite: "none",
  headers: {
    "Content-Type": "application/json",
  },
});

// مسارات لا يجب تطبيق منطق التجديد عليها إطلاقاً
const AUTH_EXCLUDED_PATHS = ["/auth/login", "/auth/refresh", "/auth/logout"];

const isAuthExcludedPath = (url = "") =>
  AUTH_EXCLUDED_PATHS.some((path) => url.includes(path));

// إدارة طابور الطلبات أثناء التجديد
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, newAccessToken = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve(newAccessToken);
    }
  });
  failedQueue = [];
};

// ==========================================
// 4. إنترسيبتور الطلب (Request Interceptor)
// ==========================================
apiClient.interceptors.request.use(
  (config) => {
    const token = tokenManager.getAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// ==========================================
// 5. دالة تجديد التوكن (معزولة، بـ timeout خاص)
// ==========================================
const refreshAccessToken = async () => {
try{
  const response = await axios.post(
    `${BASE_URL}/auth/refresh`,
    {},
    {
      withCredentials: true,
      timeout: REFRESH_TIMEOUT_MS,
    },
  );

  const newAccessToken = response?.data?.accessToken;
  if (!newAccessToken || typeof newAccessToken !== "string") {
    throw new Error("Invalid refresh response: accessToken missing");
  }

  return newAccessToken;
  }
  catch(error){
   console.error("Error refreshing access token:", error);
   throw error;
}
};

// ==========================================
// 6. إنترسيبتور الرد (Response Interceptor)
// ==========================================
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // لو ما في config (خطأ شبكة قبل الإرسال) أو الرد مو 401، مرره فوراً
    if (!originalRequest || !error.response || error.response.status !== 401) {
      return Promise.reject(error);
    }

    // لا تطبّق منطق التجديد على مسارات الـ auth نفسها (تفادي حلقات خفية)
    if (isAuthExcludedPath(originalRequest.url)) {
      return Promise.reject(error);
    }

    // الطلب أُعيد سابقاً وفشل مرة ثانية → التجديد فعلياً فاشل، لا تكرر
    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    // في تجديد شغال حالياً؟ ضع هذا الطلب بالطابور وانتظر النتيجة
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then((newAccessToken) => {
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return apiClient(originalRequest);
        })
        .catch((err) => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const newAccessToken = await refreshAccessToken();

      tokenManager.setAccessToken(newAccessToken);
      originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

      processQueue(null, newAccessToken);

      return apiClient(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError, null);
      tokenManager.clearAccessToken();

      // بدل التوجيه المباشر، نطلق حدث ليتصرف الـ UI/Router بالشكل المناسب
      // (مثلاً: React Router navigate('/login'), Redux logout action, إلخ)
      authEvents.emitSessionExpired();

      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  },
);

// ==========================================
// 7. تصدير كل شيء مطلوب للاستخدام بالتطبيق
// ==========================================
export default apiClient;
export { tokenManager, authEvents };
