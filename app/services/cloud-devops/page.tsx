import { Pill } from "@/components/pill"
import Link from "next/link"
import { Cloud, GitBranch, Container, ArrowRight } from "lucide-react"

const services = [
  {
    name: "Cloud Computing",
    href: "/services/cloud-devops/cloud-computing",
    icon: Cloud,
    description: "Multi-cloud solutions on AWS, Azure, and Google Cloud for scalable, cost-effective infrastructure.",
  },
  {
    name: "DevOps Infrastructure",
    href: "/services/cloud-devops/devops",
    icon: GitBranch,
    description: "CI/CD pipelines, infrastructure as code, and DevOps best practices for faster delivery.",
  },
  {
    name: "Virtualization & Kubernetes",
    href: "/services/cloud-devops/virtualization",
    icon: Container,
    description: "Container orchestration, microservices, and virtualization for modern application deployment.",
  },
]

export default function CloudDevOpsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container">
        <Pill className="mb-6">Cloud & DevOps</Pill>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sentient mb-6">
          Accelerate <i className="font-light">Innovation</i>
        </h1>
        <p className="font-mono text-sm text-foreground/60 max-w-2xl mb-16">
          Modern cloud and DevOps solutions that enable faster development, automated deployments, and scalable
          infrastructure for your digital transformation.
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
