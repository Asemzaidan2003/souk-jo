"use client"

import { motion } from "framer-motion"
import { Globe, LayoutDashboard, CreditCard, BarChart3, Smartphone, Headphones } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const iconMap = {
  domain: Globe,
  dashboard: LayoutDashboard,
  payments: CreditCard,
  analytics: BarChart3,
  mobile: Smartphone,
  support: Headphones,
}

export function Features() {
  const { t, dir } = useI18n()

  const features = [
    { icon: "domain", titleKey: "features.customDomain.title", descKey: "features.customDomain.desc" },
    { icon: "dashboard", titleKey: "features.dashboard.title", descKey: "features.dashboard.desc" },
    { icon: "payments", titleKey: "features.payments.title", descKey: "features.payments.desc" },
    { icon: "analytics", titleKey: "features.analytics.title", descKey: "features.analytics.desc" },
    { icon: "mobile", titleKey: "features.mobile.title", descKey: "features.mobile.desc" },
    { icon: "support", titleKey: "features.support.title", descKey: "features.support.desc" },
  ]

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
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
            {t("features.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("features.title")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t("features.description")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-orange-200 transition-colors duration-300 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
