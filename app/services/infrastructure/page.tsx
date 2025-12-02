import { Pill } from "@/components/pill"
import Link from "next/link"
import { Server, Network, Database, ArrowRight } from "lucide-react"

const services = [
  {
    name: "Infrastructure Design & Implementation",
    href: "/services/infrastructure/design-implementation",
    icon: Server,
    description: "End-to-end infrastructure planning, design, and deployment for modern enterprises.",
  },
  {
    name: "Network Infrastructure",
    href: "/services/infrastructure/network",
    icon: Network,
    description: "Enterprise networking solutions including LAN, WAN, SD-WAN, and wireless infrastructure.",
  },
  {
    name: "Data Center Infrastructure",
    href: "/services/infrastructure/data-center",
    icon: Database,
    description: "Complete data center solutions from design to operations and disaster recovery.",
  },
]

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container">
        <Pill className="mb-6">Infrastructure</Pill>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sentient mb-6">
          Build Solid <i className="font-light">Foundations</i>
        </h1>
        <p className="font-mono text-sm text-foreground/60 max-w-2xl mb-16">
          Enterprise-grade infrastructure solutions designed for scalability, reliability, and performance to power your
          business operations.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-sentient text-xl mb-3 group-hover:text-primary transition-colors">{service.name}</h3>
              <p className="font-mono text-sm text-foreground/60 mb-6">{service.description}</p>
              <div className="flex items-center gap-2 text-primary font-mono text-sm">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
