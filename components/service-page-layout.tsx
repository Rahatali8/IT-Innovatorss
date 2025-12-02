import type React from "react"
import { Pill } from "@/components/pill"
import Link from "next/link"
import { ArrowLeft, Check, Shield, Zap, Users, Clock, type LucideIcon } from "lucide-react"

interface FeatureObject {
  icon: LucideIcon
  title: string
  description: string
}

interface ServicePageLayoutProps {
  title: string
  subtitle?: string
  description: string
  features: string[] | FeatureObject[]
  benefits?: string[]
  icon?: React.ReactNode
}

export function ServicePageLayout({ title, subtitle, description, features, benefits, icon }: ServicePageLayoutProps) {
  const isObjectFeatures = features.length > 0 && typeof features[0] === "object"

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container max-w-5xl">
        <Pill className="mb-6">Services</Pill>
        {subtitle && <p className="font-mono text-sm text-primary mb-2">{subtitle}</p>}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sentient mb-6">{title}</h1>

        <p className="font-mono text-base text-foreground/60 leading-relaxed max-w-3xl">{description}</p>

        {/* Key Benefits */}
        {benefits && benefits.length > 0 && (
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Shield className="w-5 h-5" />, label: benefits[0] || "Enterprise Grade" },
              { icon: <Zap className="w-5 h-5" />, label: benefits[1] || "24/7 Support" },
              { icon: <Users className="w-5 h-5" />, label: benefits[2] || "Expert Team" },
              { icon: <Clock className="w-5 h-5" />, label: benefits[3] || "Fast Deployment" },
            ].map((benefit, i) => (
              <div key={i} className="p-4 border border-border rounded-lg text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {benefit.icon}
                </div>
                <span className="font-mono text-xs text-foreground/80">{benefit.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16">
          <h2 className="text-xl font-sentient mb-8">Our Comprehensive Solutions</h2>
          {isObjectFeatures ? (
            <div className="grid sm:grid-cols-2 gap-6">
              {(features as FeatureObject[]).map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={index}
                    className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-sentient text-lg mb-2">{feature.title}</h3>
                    <p className="font-mono text-sm text-foreground/60 leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {(features as string[]).map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="font-mono text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-16 p-8 border border-border rounded-lg bg-foreground/5">
          <h3 className="text-lg font-sentient mb-3">Ready to Secure Your Infrastructure?</h3>
          <p className="font-mono text-sm text-foreground/60 mb-6">
            Contact our experts today to discuss how our {title.toLowerCase()} solutions can transform your business
            operations.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-primary text-primary px-6 py-2 font-mono text-sm hover:bg-primary hover:text-background transition-colors"
          >
            [Get Free Consultation]
          </Link>
        </div>
      </div>
    </div>
  )
}
