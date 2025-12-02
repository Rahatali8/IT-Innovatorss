import { Pill } from "@/components/pill"
import Link from "next/link"
import { Shield, Lock, Eye, ArrowRight } from "lucide-react"

const services = [
  {
    name: "Cyber Security",
    href: "/services/security-solutions/cyber-security",
    icon: Shield,
    description: "Comprehensive protection against cyber threats, malware, ransomware, and data breaches.",
  },
  {
    name: "Network Security",
    href: "/services/security-solutions/network-security",
    icon: Lock,
    description: "Firewall management, intrusion detection, VPN solutions, and network access control.",
  },
  {
    name: "Surveillance Systems",
    href: "/services/security-solutions/surveillance",
    icon: Eye,
    description: "CCTV installation, video analytics, access control, and 24/7 monitoring solutions.",
  },
]

export default function SecuritySolutionsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container">
        <Pill className="mb-6">Security Solutions</Pill>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sentient mb-6">
          Protect Your <i className="font-light">Business</i>
        </h1>
        <p className="font-mono text-sm text-foreground/60 max-w-2xl mb-16">
          Comprehensive security solutions to safeguard your digital assets, infrastructure, and physical premises
          against modern threats.
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
