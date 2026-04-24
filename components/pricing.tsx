"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function Pricing() {
  const { t, locale, dir } = useI18n()
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "pricing.starter.name",
      desc: "pricing.starter.desc",
      price: { monthly: 0, yearly: 0 },
      features: [
        "pricing.starter.f1",
        "pricing.starter.f2",
        "pricing.starter.f3",
        "pricing.starter.f4",
      ],
      cta: "pricing.startTrial",
      popular: false,
    },
    {
      name: "pricing.pro.name",
      desc: "pricing.pro.desc",
      price: { monthly: 29, yearly: 23 },
      features: [
        "pricing.pro.f1",
        "pricing.pro.f2",
        "pricing.pro.f3",
        "pricing.pro.f4",
        "pricing.pro.f5",
      ],
      cta: "pricing.startTrial",
      popular: true,
    },
    {
      name: "pricing.enterprise.name",
      desc: "pricing.enterprise.desc",
      price: { monthly: 99, yearly: 79 },
      features: [
        "pricing.enterprise.f1",
        "pricing.enterprise.f2",
        "pricing.enterprise.f3",
        "pricing.enterprise.f4",
        "pricing.enterprise.f5",
      ],
      cta: "pricing.contactSales",
      popular: false,
    },
  ]

  const formatPrice = (price: number) => {
    if (price === 0) {
      return locale === "ar" ? "مجاني" : "Free"
    }
    return locale === "ar" ? `$${price}` : `$${price}`
  }

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
            {t("pricing.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("pricing.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t("pricing.description")}
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 bg-muted rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                !isYearly ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
              )}
            >
              {t("pricing.monthly")}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                isYearly ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
              )}
            >
              {t("pricing.yearly")}
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                {t("pricing.save")}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative rounded-2xl bg-card border-2 p-8",
                plan.popular 
                  ? "border-orange-500 shadow-xl shadow-orange-500/10" 
                  : "border-border"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <span className="bg-gradient-to-r from-orange-500 to-amber-600 text-white text-sm font-medium px-4 py-1.5 rounded-full">
                    {t("pricing.popular")}
                  </span>
                </div>
              )}

              {/* Plan Info */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t(plan.name)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(plan.desc)}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">
                    {formatPrice(isYearly ? plan.price.yearly : plan.price.monthly)}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-muted-foreground text-sm">
                      {t("pricing.perMonth")}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-orange-600" />
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {t(feature)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={cn(
                  "w-full py-6 rounded-xl",
                  plan.popular
                    ? "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white border-0"
                    : ""
                )}
                variant={plan.popular ? "default" : "outline"}
              >
                {t(plan.cta)}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
