import { ServicePageLayout } from "@/components/service-page-layout"
import { Layers, FileText, Settings, Cpu, GitBranch, CheckSquare } from "lucide-react"

export default function DesignImplementationPage() {
  return (
    <ServicePageLayout
      title="Infrastructure Design & Implementation"
      subtitle="Strategic Planning"
      description="Comprehensive infrastructure design and implementation services that align technology with your business objectives. From assessment to deployment, we deliver robust, scalable, and future-ready infrastructure solutions."
      features={[
        {
          icon: FileText,
          title: "Infrastructure Assessment",
          description:
            "Thorough evaluation of existing infrastructure, identifying gaps and optimization opportunities.",
        },
        {
          icon: Layers,
          title: "Architecture Design",
          description: "Custom infrastructure architecture design following industry best practices and standards.",
        },
        {
          icon: Settings,
          title: "Implementation & Migration",
          description: "Seamless implementation and migration services with minimal disruption to business operations.",
        },
        {
          icon: Cpu,
          title: "Hardware & Software Deployment",
          description: "End-to-end deployment of servers, storage, networking equipment, and enterprise software.",
        },
        {
          icon: GitBranch,
          title: "Integration Services",
          description: "Integrate new infrastructure with existing systems, applications, and workflows.",
        },
        {
          icon: CheckSquare,
          title: "Testing & Validation",
          description:
            "Comprehensive testing to ensure infrastructure meets performance, security, and reliability requirements.",
        },
      ]}
      benefits={[
        "Reduce infrastructure costs by 30%",
        "Improve system reliability to 99.99%",
        "Scalable architecture for growth",
        "Faster deployment and time-to-value",
      ]}
    />
  )
}
