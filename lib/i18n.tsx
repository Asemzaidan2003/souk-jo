"use client"

import { createContext, useContext, useState, useCallback, ReactNode } from "react"

export type Locale = "ar" | "en"

type Translations = {
  [key: string]: {
    ar: string
    en: string
  }
}

export const translations: Translations = {
  // Navigation
  "nav.features": { ar: "المميزات", en: "Features" },
  "nav.pricing": { ar: "الأسعار", en: "Pricing" },
  "nav.support": { ar: "تواصل معنا", en: "Contact Us" },
  "nav.login": { ar: "تسجيل الدخول", en: "Login" },
  "nav.getStarted": { ar: "إشترك الآن", en: "Register" },
  "nav.AboutUs": { ar: "من نحن", en: "About Us" },

  // Hero Section
  "hero.badge": {
    ar: "منصة التجارة الإلكترونية رقم ١",
    en: "#1 E-commerce Platform",
  },
  "hero.title1": { ar: "أنشئ متجرك", en: "Build Your" },
  "hero.title2": { ar: "الإلكتروني", en: "Online Store" },
  "hero.title3": {
    ar: "بكل سهولة و ابدأ البيع الأن !",
    en: "Effortlessly and start the business now !",
  },
  "hero.description": {
    ar: "من الفكرة للبيع… بمنصة وحدة. تحكّم، راقب، ووسّع تجارتك برؤية واضحة وكل الأدوات التي تحتاجها تحت سقف واحد.",
    en: "From idea to sales — in one platform. Control, monitor, and scale your business with clear insights and all the tools under one roof.",
  },
  "hero.startFree": { ar: "ابدأ مجاناً", en: "Start Free" },
  "hero.watchDemo": { ar: "شاهد العرض", en: "Watch Demo" },
  "hero.weBuild": {
    ar: "نبني مع المشاريع الصغيرة، خطوة بخطوة",
    en: "Building with small businesses, step by step",
  },
  "hero.merchants": { ar: "تاجر", en: "merchants" },
  "hero.noCard": {
    ar: "أسعار مناسبة ووسائل دفع مريحة",
    en: "Affordable pricing with flexible payment methods.",
  },

  // Features Section
  "features.badge": { ar: "كل ما تحتاجه", en: "Everything You Need" },
  "features.title": {
    ar: "أدوات قوية لنجاح متجرك",
    en: "Powerful Tools for Your Success",
  },
  "features.description": {
    ar: "نقدم لك مجموعة شاملة من الأدوات والمميزات التي تحتاجها لإدارة متجرك بكفاءة",
    en: "A comprehensive suite of tools and features to efficiently manage your store",
  },

  "features.customDomain.title": { ar: "نطاقك الخاص", en: "Custom Domain" },
  "features.customDomain.desc": {
    ar: "احصل على متجرك بنطاقك الخاص مثل yourstore.com",
    en: "Get your store with your own domain like yourstore.com",
  },

  "features.dashboard.title": {
    ar: "لوحة تحكم متقدمة",
    en: "Advanced Dashboard",
  },
  "features.dashboard.desc": {
    ar: "تحكم كامل بمنتجاتك، طلباتك، وعملائك من مكان واحد",
    en: "Full control over products, orders, and customers from one place",
  },

  "features.payments.title": { ar: "دفع آمن", en: "Secure Payments" },
  "features.payments.desc": {
    ar: "دعم لجميع وسائل الدفع المحلية والعالمية",
    en: "Support for all local and international payment methods",
  },

  "features.analytics.title": {
    ar: "تحليلات متقدمة",
    en: "Advanced Analytics",
  },
  "features.analytics.desc": {
    ar: "تقارير مفصلة عن المبيعات والزوار والأداء",
    en: "Detailed reports on sales, visitors, and performance",
  },

  "features.mobile.title": { ar: "متوافق مع الجوال", en: "Mobile Optimized" },
  "features.mobile.desc": {
    ar: "متجرك يعمل بشكل مثالي على جميع الأجهزة",
    en: "Your store works perfectly on all devices",
  },

  "features.support.title": { ar: "دعم ٢٤/٧", en: "24/7 Support" },
  "features.support.desc": {
    ar: "فريق دعم متخصص جاهز لمساعدتك على مدار الساعة",
    en: "Dedicated support team ready to help around the clock",
  },

  // How It Works
  "howItWorks.badge": { ar: "كيف يعمل", en: "How It Works" },
  "howItWorks.title": {
    ar: "أطلق متجرك في ٣ خطوات",
    en: "Launch Your Store in 3 Steps",
  },
  "howItWorks.step1.title": { ar: "سجّل حسابك", en: "Create Account" },
  "howItWorks.step1.desc": {
    ar: "أنشئ حسابك مجاناً في أقل من دقيقة",
    en: "Sign up for free in less than a minute",
  },
  "howItWorks.step2.title": { ar: "خصص متجرك", en: "Customize Store" },
  "howItWorks.step2.desc": {
    ar: "اختر قالبك وأضف منتجاتك بسهولة",
    en: "Choose your template and add products easily",
  },
  "howItWorks.step3.title": { ar: "ابدأ البيع", en: "Start Selling" },
  "howItWorks.step3.desc": {
    ar: "أطلق متجرك واستقبل أول طلباتك",
    en: "Launch your store and receive your first orders",
  },

  // Pricing
  "pricing.badge": { ar: "أسعار مناسبة", en: "Simple Pricing" },
  "pricing.title": { ar: "اختر الخطة المناسبة لك", en: "Choose Your Plan" },
  "pricing.description": {
    ar: "أسعار شفافة بدون رسوم خفية",
    en: "Transparent pricing with no hidden fees",
  },
  "pricing.monthly": { ar: "شهري", en: "Monthly" },
  "pricing.yearly": { ar: "سنوي", en: "Yearly" },
  "pricing.save": { ar: "وفر ٢٠٪", en: "Save 20%" },
  "pricing.popular": { ar: "الأكثر شيوعاً", en: "Most Popular" },
  "pricing.startTrial": { ar: "ابدأ تجربة مجانية", en: "Start Free Trial" },
  "pricing.contactSales": { ar: "تواصل معنا", en: "Contact Sales" },
  "pricing.perMonth": { ar: "/شهر", en: "/month" },

  "pricing.starter.name": { ar: "المبتدئ", en: "Starter" },
  "pricing.starter.desc": { ar: "مثالي للبدء", en: "Perfect to start" },
  "pricing.starter.f1": { ar: "حتى ٥٠ منتج", en: "Up to 50 products" },
  "pricing.starter.f2": { ar: "نطاق فرعي مجاني", en: "Free subdomain" },
  "pricing.starter.f3": { ar: "دعم بالبريد الإلكتروني", en: "Email support" },
  "pricing.starter.f4": { ar: "تقارير أساسية", en: "Basic analytics" },

  "pricing.pro.name": { ar: "الاحترافي", en: "Professional" },
  "pricing.pro.desc": { ar: "للمتاجر النامية", en: "For growing stores" },
  "pricing.pro.f1": { ar: "منتجات غير محدودة", en: "Unlimited products" },
  "pricing.pro.f2": { ar: "نطاق خاص مجاني", en: "Free custom domain" },
  "pricing.pro.f3": { ar: "دعم ذو أولوية", en: "Priority support" },
  "pricing.pro.f4": { ar: "تحليلات متقدمة", en: "Advanced analytics" },
  "pricing.pro.f5": { ar: "كوبونات وخصومات", en: "Coupons & discounts" },

  "pricing.enterprise.name": { ar: "المؤسسات", en: "Enterprise" },
  "pricing.enterprise.desc": {
    ar: "للأعمال الكبيرة",
    en: "For large businesses",
  },
  "pricing.enterprise.f1": {
    ar: "كل مميزات الاحترافي",
    en: "All Pro features",
  },
  "pricing.enterprise.f2": {
    ar: "مدير حساب مخصص",
    en: "Dedicated account manager",
  },
  "pricing.enterprise.f3": { ar: "API كامل", en: "Full API access" },
  "pricing.enterprise.f4": { ar: "تكامل مخصص", en: "Custom integrations" },
  "pricing.enterprise.f5": { ar: "SLA مضمون", en: "Guaranteed SLA" },

  // Testimonials
  "testimonials.badge": { ar: "قصص نجاح", en: "Success Stories" },
  "testimonials.title": {
    ar: "ماذا يقول عملاؤنا",
    en: "What Our Customers Say",
  },

  // CTA
  "cta.title": { ar: "جاهز لإطلاق متجرك؟", en: "Ready to Launch?" },
  "cta.description": {
    ar: "انضم لآلاف التجار الناجحين وابدأ البيع اليوم",
    en: "Join thousands of successful merchants and start selling today",
  },
  "cta.button": { ar: "ابدأ مجاناً الآن", en: "Start Free Now" },

  // Footer
  "footer.description": {
    ar: "منصتك الشاملة لإنشاء وإدارة متجرك الإلكتروني بكل سهولة",
    en: "Your complete platform to create and manage your online store with ease",
  },
  "footer.product": { ar: "المنتج", en: "Product" },
  "footer.company": { ar: "الشركة", en: "Company" },
  "footer.legal": { ar: "قانوني", en: "Legal" },
  "footer.about": { ar: "من نحن", en: "About Us" },
  "footer.careers": { ar: "الوظائف", en: "Careers" },
  "footer.blog": { ar: "المدونة", en: "Blog" },
  "footer.contact": { ar: "تواصل معنا", en: "Contact" },
  "footer.privacy": { ar: "سياسة الخصوصية", en: "Privacy Policy" },
  "footer.terms": { ar: "شروط الخدمة", en: "Terms of Service" },
  "footer.cookies": { ar: "سياسة الكوكيز", en: "Cookie Policy" },
  "footer.rights": { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
};

type I18nContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  dir: "rtl" | "ltr"
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar")

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = newLocale
  }, [])

  const t = useCallback((key: string) => {
    const translation = translations[key]
    if (!translation) return key
    return translation[locale]
  }, [locale])

  const dir = locale === "ar" ? "rtl" : "ltr"

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
