"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const servicesCategories = [
  {
    name: "Security Solutions",
    href: "/services/security-solutions",
    subServices: [
      { name: "Cyber Security", href: "/services/security-solutions/cyber-security" },
      { name: "Network Security", href: "/services/security-solutions/network-security" },
      { name: "Surveillance Systems", href: "/services/security-solutions/surveillance" },
    ],
  },
  {
    name: "Infrastructure",
    href: "/services/infrastructure",
    subServices: [
      { name: "Infrastructure Design & Implementation", href: "/services/infrastructure/design-implementation" },
      { name: "Network Infrastructure", href: "/services/infrastructure/network" },
      { name: "Data Center Infrastructure", href: "/services/infrastructure/data-center" },
    ],
  },
  {
    name: "Cloud & DevOps",
    href: "/services/cloud-devops",
    subServices: [
      { name: "Cloud Computing", href: "/services/cloud-devops/cloud-computing" },
      { name: "DevOps Infrastructure", href: "/services/cloud-devops/devops" },
      { name: "Virtualization & Kubernetes", href: "/services/cloud-devops/virtualization" },
    ],
  },
  {
    name: "Enterprise Solutions",
    href: "/services/enterprise",
    subServices: [
      { name: "Automation", href: "/services/enterprise/automation" },
      { name: "PABX Solutions", href: "/services/enterprise/pabx" },
    ],
  },
]

export const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed z-50 pt-8 md:pt-14 top-0 left-0 w-full transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50 pt-4 md:pt-6" : ""
      }`}
    >
      <header className="flex items-center justify-between container">
        <Link href="/">
          <Logo className="w-[140px] md:w-[160px]" />
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          <Link
            className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
            href="/about"
          >
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => {
              setServicesOpen(false)
              setActiveCategory(null)
            }}
          >
            <button className="uppercase inline-flex items-center gap-1 font-mono text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors duration-150">
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-background/95 backdrop-blur-md border border-border rounded-lg py-2 min-w-[220px]">
                  {servicesCategories.map((category) => (
                    <div
                      key={category.name}
                      className="relative"
                      onMouseEnter={() => setActiveCategory(category.name)}
                      onMouseLeave={() => setActiveCategory(null)}
                    >
                      <Link
                        href={category.href}
                        className="flex items-center justify-between px-4 py-2.5 font-mono text-sm text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors"
                      >
                        {category.name}
                        <ChevronRight className="w-4 h-4" />
                      </Link>

                      {/* Sub-services dropdown */}
                      {activeCategory === category.name && (
                        <div className="absolute left-full top-0 pl-1">
                          <div className="bg-background/95 backdrop-blur-md border border-border rounded-lg py-2 min-w-[240px]">
                            {category.subServices.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="block px-4 py-2 font-mono text-sm text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
            href="/work-gallery"
          >
            Work Gallery
          </Link>
          <Link
            className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}
