"use client";

import { useEffect } from "react";

export default function AuthInitializer({ user }: { user: any }) {
  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user_id", user.data._id);
      sessionStorage.setItem("user_name", user.data.user_name);
      sessionStorage.setItem("user_email", user.data.user_email);
      sessionStorage.setItem("user_role", user.data.user_role);
      console.log("User data stored in sessionStorage:", user);
    } else {
      sessionStorage.removeItem("user_id");
      sessionStorage.removeItem("user_name");
      sessionStorage.removeItem("user_email");
      sessionStorage.removeItem("user_role");
    }
  }, [user]);

  return null;
}

export function getUserDataFromStorage() {
  if (typeof window === "undefined") {
    return { userId: null, userName: null, userEmail: null, userRole: null };
  }
  const userId = sessionStorage.getItem("user_id");
  const userName = sessionStorage.getItem("user_name");
  const userEmail = sessionStorage.getItem("user_email");
  const userRole = sessionStorage.getItem("user_role");
  return { userId, userName, userEmail, userRole };
};
