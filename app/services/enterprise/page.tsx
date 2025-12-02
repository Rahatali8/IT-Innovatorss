import { Pill } from "@/components/pill"
import Link from "next/link"
import { Cog, Phone, ArrowRight } from "lucide-react"

const services = [
  {
    name: "Automation",
    href: "/services/enterprise/automation",
    icon: Cog,
    description: "Business process automation, RPA, and workflow optimization for operational efficiency.",
  },
  {
    name: "PABX Solutions",
    href: "/services/enterprise/pabx",
    icon: Phone,
    description: "Enterprise telephony, VoIP, unified communications, and call center solutions.",
  },
]

export default function EnterprisePage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container">
        <Pill className="mb-6">Enterprise Solutions</Pill>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sentient mb-6">
          Streamline <i className="font-light">Operations</i>
        </h1>
        <p className="font-mono text-sm text-foreground/60 max-w-2xl mb-16">
          Enterprise solutions that automate processes, enhance communications, and drive operational excellence across
          your organization.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
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
