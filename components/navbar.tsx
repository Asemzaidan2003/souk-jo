"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n, Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { locale, setLocale, t, dir } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const navItems = [
    { key: "nav.features", href: "#features" },
    { key: "nav.pricing", href: "#pricing" },
    { key: "nav.support", href: "#support" },
    { key: "nav.AboutUs" , href: "#aboutUs" },
  ]

  const toggleLanguage = () => {
    setLocale(locale === "ar" ? "en" : "ar")
    setLangOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="/Logo.png" alt="Souq Logo" className="w-18 h-18" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{locale === "ar" ? "العربية" : "English"}</span>
                <ChevronDown className="w-3 h-3" />
              </Button>
              
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={cn(
                      "absolute top-full mt-2 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[120px]",
                      dir === "rtl" ? "right-0" : "left-0"
                    )}
                  >
                    <button
                      onClick={() => { setLocale("ar"); setLangOpen(false) }}
                      className={cn(
                        "w-full px-4 py-2 text-sm text-start hover:bg-muted transition-colors",
                        locale === "ar" && "text-orange-600 font-medium"
                      )}
                    >
                      العربية
                    </button>
                    <button
                      onClick={() => { setLocale("en"); setLangOpen(false) }}
                      className={cn(
                        "w-full px-4 py-2 text-sm text-start hover:bg-muted transition-colors",
                        locale === "en" && "text-orange-600 font-medium"
                      )}
                    >
                      English
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button variant="ghost" size="sm">
              {t("nav.login")}
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white border-0"
            >
              {t("nav.getStarted")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="pt-3 border-t border-border space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={toggleLanguage}
                >
                  <Globe className="w-4 h-4 me-2" />
                  {locale === "ar" ? "English" : "العربية"}
                </Button>
                <Button variant="outline" className="w-full">
                  {t("nav.login")}
                </Button>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white border-0">
                  {t("nav.getStarted")}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
