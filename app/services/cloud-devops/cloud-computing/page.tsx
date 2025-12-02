import { ServicePageLayout } from "@/components/service-page-layout"
import { Cloud, Server, Database, Shield, TrendingUp, RefreshCw } from "lucide-react"

export default function CloudComputingPage() {
  return (
    <ServicePageLayout
      title="Cloud Computing"
      subtitle="Infinite Scalability"
      description="Leverage the power of cloud computing with our multi-cloud solutions. We help you design, migrate, and manage cloud infrastructure on AWS, Microsoft Azure, and Google Cloud Platform for optimal performance and cost efficiency."
      features={[
        {
          icon: Cloud,
          title: "Multi-Cloud Strategy",
          description: "Design and implement multi-cloud architectures leveraging AWS, Azure, and GCP strengths.",
        },
        {
          icon: RefreshCw,
          title: "Cloud Migration",
          description: "Seamless migration of workloads from on-premises to cloud with minimal downtime and risk.",
        },
        {
          icon: Server,
          title: "Cloud Infrastructure",
          description: "Design and deploy virtual machines, containers, and serverless infrastructure at scale.",
        },
        {
          icon: Database,
          title: "Cloud Databases",
          description: "Managed database services including SQL, NoSQL, and data warehousing solutions.",
        },
        {
          icon: Shield,
          title: "Cloud Security",
          description: "Implement cloud security best practices, IAM, encryption, and compliance controls.",
        },
        {
          icon: TrendingUp,
          title: "Cost Optimization",
          description: "Continuous cost monitoring and optimization to maximize ROI on cloud investments.",
        },
      ]}
      benefits={[
        "Reduce infrastructure costs by 40%",
        "Scale instantly based on demand",
        "99.99% availability SLA",
        "Pay only for what you use",
      ]}
    />
  )
}
