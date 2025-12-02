import { ServicePageLayout } from "@/components/service-page-layout"
import { Container, Layers, Server, GitBranch, Shield, Zap } from "lucide-react"

export default function VirtualizationPage() {
  return (
    <ServicePageLayout
      title="Virtualization & Kubernetes"
      subtitle="Container Orchestration"
      description="Modernize your applications with containerization and Kubernetes. We help you build, deploy, and manage containerized workloads with enterprise-grade orchestration, scaling, and security."
      features={[
        {
          icon: Container,
          title: "Docker Containerization",
          description: "Containerize applications using Docker for consistent deployment across environments.",
        },
        {
          icon: Layers,
          title: "Kubernetes Orchestration",
          description: "Deploy and manage Kubernetes clusters on-premises or on managed services (EKS, AKS, GKE).",
        },
        {
          icon: Server,
          title: "VMware Virtualization",
          description:
            "Enterprise virtualization with VMware vSphere, vSAN, and NSX for software-defined infrastructure.",
        },
        {
          icon: GitBranch,
          title: "Microservices Architecture",
          description: "Design and implement microservices architectures with service mesh (Istio, Linkerd).",
        },
        {
          icon: Shield,
          title: "Container Security",
          description: "Implement container security scanning, runtime protection, and network policies.",
        },
        {
          icon: Zap,
          title: "Auto-Scaling",
          description: "Configure horizontal and vertical pod autoscaling based on metrics and custom triggers.",
        },
      ]}
      benefits={[
        "Improve resource utilization by 60%",
        "Deploy applications in seconds",
        "Scale to millions of containers",
        "Reduce infrastructure complexity",
      ]}
    />
  )
}
