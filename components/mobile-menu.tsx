"use client"

import { cn } from "@/lib/utils"
import * as Dialog from "@radix-ui/react-dialog"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface MobileMenuProps {
  className?: string
}

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

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesExpanded, setServicesExpanded] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const handleLinkClick = () => {
    setIsOpen(false)
    setServicesExpanded(false)
    setExpandedCategory(null)
  }

  return (
    <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn("group lg:hidden p-2 text-foreground transition-colors", className)}
          aria-label="Open menu"
        >
          <Menu className="group-[[data-state=open]]:hidden" size={24} />
          <X className="hidden group-[[data-state=open]]:block" size={24} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <div data-overlay="true" className="fixed z-30 inset-0 bg-black/50 backdrop-blur-sm" />

        <Dialog.Content
          onInteractOutside={(e) => {
            if (e.target instanceof HTMLElement && e.target.dataset.overlay !== "true") {
              e.preventDefault()
            }
          }}
          className="fixed top-0 left-0 w-full z-40 py-28 md:py-40 max-h-[80vh] overflow-y-auto"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          <nav className="flex flex-col space-y-4 container mx-auto">
            <Link
              href="/about"
              onClick={handleLinkClick}
              className="text-xl font-mono uppercase text-foreground/60 transition-colors ease-out duration-150 hover:text-foreground/100 py-2"
            >
              About
            </Link>

            <div>
              <button
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className="flex items-center justify-between w-full text-xl font-mono uppercase text-foreground/60 transition-colors ease-out duration-150 hover:text-foreground/100 py-2"
              >
                Services
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${servicesExpanded ? "rotate-180" : ""}`}
                />
              </button>

              {servicesExpanded && (
                <div className="pl-4 mt-2 space-y-2 border-l border-border">
                  {servicesCategories.map((category) => (
                    <div key={category.name}>
                      <button
                        onClick={() => setExpandedCategory(expandedCategory === category.name ? null : category.name)}
                        className="flex items-center justify-between w-full text-base font-mono text-foreground/50 transition-colors ease-out duration-150 hover:text-foreground/100 py-2"
                      >
                        {category.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedCategory === category.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {expandedCategory === category.name && (
                        <div className="pl-4 space-y-1 border-l border-border/50">
                          {category.subServices.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={handleLinkClick}
                              className="block text-sm font-mono text-foreground/40 transition-colors ease-out duration-150 hover:text-foreground/100 py-1.5"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/work-gallery"
              onClick={handleLinkClick}
              className="text-xl font-mono uppercase text-foreground/60 transition-colors ease-out duration-150 hover:text-foreground/100 py-2"
            >
              Work Gallery
            </Link>

            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="text-xl font-mono uppercase text-foreground/60 transition-colors ease-out duration-150 hover:text-foreground/100 py-2"
            >
              Contact
            </Link>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
