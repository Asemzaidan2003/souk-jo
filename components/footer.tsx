"use client"

import { useI18n } from "@/lib/i18n"
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  const { t, locale, dir } = useI18n()

  const footerLinks = {
    product: [
      { key: "nav.features", href: "#features" },
      { key: "nav.pricing", href: "#pricing" },
      { key: "nav.templates", href: "#templates" },
    ],
    company: [
      { key: "footer.about", href: "#" },
      { key: "footer.careers", href: "#" },
      { key: "footer.blog", href: "#" },
      { key: "footer.contact", href: "#" },
    ],
    legal: [
      { key: "footer.privacy", href: "#" },
      { key: "footer.terms", href: "#" },
      { key: "footer.cookies", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">س</span>
              </div>
              <span className="font-bold text-xl text-foreground">
                {locale === "ar" ? "سوق" : "Souk"}
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              {t("footer.description")}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-orange-100 flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-orange-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t("footer.product")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.key}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t("footer.company")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.key}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t("footer.legal")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.key}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {locale === "ar" ? "سوق" : "Souk"}. {t("footer.rights")}.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
