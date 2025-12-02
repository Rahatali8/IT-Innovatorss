import Link from "next/link"
import { Shield, Server, Cloud, Building2, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Security Solutions",
    description:
      "Comprehensive cybersecurity, network security, and surveillance systems to protect your digital assets.",
    href: "/services/security-solutions",
    features: ["Cyber Security", "Network Security", "Surveillance Systems"],
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "End-to-end infrastructure design, implementation, and network solutions for seamless operations.",
    href: "/services/infrastructure",
    features: ["Design & Implementation", "Network Infrastructure", "Data Centers"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Modern cloud computing, automation, and DevOps practices to accelerate your digital transformation.",
    href: "/services/cloud-devops",
    features: ["Cloud Computing", "Automation", "DevOps Infrastructure"],
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Virtualization, containerization, and PABX solutions for enterprise-grade business operations.",
    href: "/services/enterprise-solutions",
    features: ["Virtualization & Kubernetes", "PABX Solutions", "Enterprise Integration"],
  },
]

export function ServicesSection() {
  return (
    <section className="relative bg-neutral-950 py-24 lg:py-32">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header - amber to yellow-600 */}
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-yellow-600" />
              Our Services
            </span>
            <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl lg:text-6xl">
              What We <em className="text-white/80">Offer</em>
            </h2>
          </div>
          <p className="max-w-md text-base text-white/60 lg:text-right">
            Comprehensive IT solutions designed to secure, optimize, and transform your business infrastructure.
          </p>
        </div>

        {/* Services Grid - all amber to yellow-600 */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-yellow-600/30 hover:bg-white/10"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex rounded-xl bg-yellow-600/10 p-4">
                <service.icon className="h-8 w-8 text-yellow-400" />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-2xl font-medium text-white">{service.title}</h3>
              <p className="mb-6 text-white/60">{service.description}</p>

              {/* Features */}
              <div className="mb-6 flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-sm text-yellow-400">
                <span>Explore Services</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-600/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
