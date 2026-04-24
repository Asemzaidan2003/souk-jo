"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function CTA() {
  const { t, dir } = useI18n()

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Glow Effects */}
          <div className="absolute -top-24 start-1/4 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 end-1/4 w-96 h-96 bg-amber-400/30 rounded-full blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-8 md:p-16 overflow-hidden">
            {/* Pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.5 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-8"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                {t("cta.title")}
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10 text-pretty">
                {t("cta.description")}
              </p>

              <Button 
                size="lg" 
                className="bg-white hover:bg-white/90 text-orange-600 px-8 py-6 text-lg rounded-xl shadow-lg"
              >
                {t("cta.button")}
                <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
