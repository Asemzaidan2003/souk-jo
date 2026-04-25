"use client"

import { motion } from "framer-motion"
import { Play, ArrowRight, Sparkles, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t, locale, dir } = useI18n()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-background to-background" />
      <div className="absolute top-0 start-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 end-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t("hero.badge")}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
          >
            <span className="text-foreground">{t("hero.title1")}</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
            <br />
            <span className="text-foreground">{t("hero.title3")}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            {t("hero.description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white border-0 px-8 py-6 text-lg rounded-xl shadow-lg shadow-orange-500/25"
            >
              {t("hero.startFree")}
              <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto px-8 py-6 text-lg rounded-xl"
            >
              <Play className="w-5 h-5 me-2" />
              {t("hero.watchDemo")}
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-orange-500" />
              <span>{t("hero.noCard")}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-2">
              <span>{t("hero.weBuild")}</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 md:mt-24 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl" />
            
            {/* Dashboard Mockup */}
            <div className="relative bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-background rounded-lg text-xs text-muted-foreground">
                    dashboard.yourstore.com
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 bg-muted/30">
                <div className="grid grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-3 bg-card rounded-xl p-4 space-y-3 hidden md:block">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`h-8 rounded-lg ${i === 1 ? "bg-orange-100" : "bg-muted"}`} />
                    ))}
                  </div>
                  
                  {/* Main Content */}
                  <div className="col-span-12 md:col-span-9 space-y-4">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { value: "٢٥,٤٣٢", label: locale === "ar" ? "المبيعات" : "Sales", color: "orange" },
                        { value: "١,٢٤٧", label: locale === "ar" ? "الطلبات" : "Orders", color: "amber" },
                        { value: "٤٥٦", label: locale === "ar" ? "المنتجات" : "Products", color: "cyan" },
                        { value: "٨,٩٣٤", label: locale === "ar" ? "الزوار" : "Visitors", color: "sky" },
                      ].map((stat, i) => (
                        <div key={i} className="bg-card rounded-xl p-4 border border-border">
                          <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Chart Area */}
                    <div className="bg-card rounded-xl p-4 border border-border">
                      <div className="flex items-end justify-between h-32 gap-2">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-orange-500 to-amber-400 rounded-t-lg transition-all hover:opacity-80"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Orders List */}
                    <div className="bg-card rounded-xl p-4 border border-border space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-100 to-amber-100" />
                          <div className="flex-1">
                            <div className="h-3 bg-muted rounded w-1/3 mb-2" />
                            <div className="h-2 bg-muted rounded w-1/4" />
                          </div>
                          <div className="h-6 w-16 rounded-full bg-orange-100" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
