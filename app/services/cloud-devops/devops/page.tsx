import { ServicePageLayout } from "@/components/service-page-layout"
import { GitBranch, Play, Code, Monitor, Settings, Repeat } from "lucide-react"

export default function DevOpsPage() {
  return (
    <ServicePageLayout
      title="DevOps Infrastructure"
      subtitle="Continuous Delivery"
      description="Transform your software delivery with DevOps best practices. We implement CI/CD pipelines, infrastructure as code, and automated testing to accelerate development cycles and improve software quality."
      features={[
        {
          icon: GitBranch,
          title: "CI/CD Pipelines",
          description:
            "Automated build, test, and deployment pipelines using Jenkins, GitLab CI, GitHub Actions, or Azure DevOps.",
        },
        {
          icon: Code,
          title: "Infrastructure as Code",
          description: "Manage infrastructure using Terraform, CloudFormation, Ansible, and other IaC tools.",
        },
        {
          icon: Play,
          title: "Automated Testing",
          description: "Implement unit tests, integration tests, and automated security scanning in pipelines.",
        },
        {
          icon: Monitor,
          title: "Monitoring & Logging",
          description: "Centralized logging with ELK Stack, monitoring with Prometheus, Grafana, and alerting systems.",
        },
        {
          icon: Settings,
          title: "Configuration Management",
          description: "Automated configuration management using Ansible, Puppet, or Chef for consistent environments.",
        },
        {
          icon: Repeat,
          title: "GitOps Practices",
          description: "Implement GitOps workflows with ArgoCD or Flux for declarative infrastructure management.",
        },
      ]}
      benefits={[
        "Deploy 10x faster than before",
        "Reduce deployment failures by 90%",
        "Improve team collaboration",
        "Faster time to market",
      ]}
    />
  )
}
