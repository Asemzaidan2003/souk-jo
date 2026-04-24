"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const testimonials = [
  {
    name: { ar: "أحمد الخالدي", en: "Ahmad Al-Khalidi" },
    role: { ar: "صاحب متجر إلكتروني", en: "E-commerce Store Owner" },
    content: {
      ar: "سوق غيّر طريقة عملي بالكامل. أطلقت متجري في يوم واحد وبدأت أستقبل طلبات من اليوم الأول!",
      en: "Souk completely changed how I work. I launched my store in one day and started receiving orders from day one!"
    },
    rating: 5,
    avatar: "أ"
  },
  {
    name: { ar: "سارة المحمود", en: "Sara Al-Mahmoud" },
    role: { ar: "مصممة أزياء", en: "Fashion Designer" },
    content: {
      ar: "لوحة التحكم سهلة جداً والدعم الفني ممتاز. أنصح كل من يريد بدء تجارته الإلكترونية بتجربة سوق.",
      en: "The dashboard is very easy and technical support is excellent. I recommend everyone who wants to start their e-commerce to try Souk."
    },
    rating: 5,
    avatar: "س"
  },
  {
    name: { ar: "محمد العمري", en: "Mohammed Al-Omari" },
    role: { ar: "تاجر جملة", en: "Wholesale Merchant" },
    content: {
      ar: "مبيعاتي تضاعفت ٣ مرات بعد الانتقال لسوق. التحليلات المتقدمة ساعدتني أفهم عملائي بشكل أفضل.",
      en: "My sales tripled after switching to Souk. Advanced analytics helped me understand my customers better."
    },
    rating: 5,
    avatar: "م"
  },
]

export function Testimonials() {
  const { t, locale, dir } = useI18n()

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-background to-amber-50/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
            {t("testimonials.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            {t("testimonials.title")}
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 h-full hover:shadow-lg transition-shadow duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.content[locale]}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold text-lg">
                    {locale === "ar" ? testimonial.avatar : testimonial.name.en.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name[locale]}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role[locale]}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "10K+", label: { ar: "تاجر نشط", en: "Active Merchants" } },
            { value: "50K+", label: { ar: "متجر", en: "Stores" } },
            { value: "$5M+", label: { ar: "حجم المبيعات", en: "Sales Volume" } },
            { value: "4.9", label: { ar: "تقييم التطبيق", en: "App Rating" } },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label[locale]}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
