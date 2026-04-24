"use client"

import { useEffect } from "react"
import { I18nProvider } from "@/lib/i18n"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

function SoukContent() {
  useEffect(() => {
    // Set initial direction
    document.documentElement.dir = "rtl"
    document.documentElement.lang = "ar"
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

export default function Home() {
  return (
    <I18nProvider>
      <SoukContent />
    </I18nProvider>
  )
}
