"use client"

import { motion } from "framer-motion"
import { UserPlus, Palette, Rocket } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function HowItWorks() {
  const { t, dir } = useI18n()

  const steps = [
    { 
      icon: UserPlus, 
      number: "01",
      titleKey: "howItWorks.step1.title", 
      descKey: "howItWorks.step1.desc",
      color: "orange"
    },
    { 
      icon: Palette, 
      number: "02",
      titleKey: "howItWorks.step2.title", 
      descKey: "howItWorks.step2.desc",
      color: "amber"
    },
    { 
      icon: Rocket, 
      number: "03",
      titleKey: "howItWorks.step3.title", 
      descKey: "howItWorks.step3.desc",
      color: "yellow"
    },
  ]

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
            {t("howItWorks.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            {t("howItWorks.title")}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 start-[16.5%] end-[16.5%] h-0.5 bg-gradient-to-r from-orange-200 via-amber-200 to-yellow-200" />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step Number & Icon */}
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${step.color}-100 to-${step.color}-50 flex items-center justify-center shadow-lg shadow-${step.color}-500/10`}>
                      <step.icon className={`w-9 h-9 text-${step.color}-600`} />
                    </div>
                    <div className={`absolute -top-2 ${dir === "rtl" ? "-left-2" : "-right-2"} w-8 h-8 rounded-full bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                      {step.number.split('0')[1]}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {t(step.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
