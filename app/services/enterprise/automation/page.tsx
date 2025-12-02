import { ServicePageLayout } from "@/components/service-page-layout"
import { Cog, Bot, Workflow, Zap, BarChart, RefreshCw } from "lucide-react"

export default function AutomationPage() {
  return (
    <ServicePageLayout
      title="Automation"
      subtitle="Intelligent Workflows"
      description="Transform your business operations with intelligent automation solutions. From robotic process automation to AI-powered workflows, we help you eliminate manual tasks, reduce errors, and accelerate business processes."
      features={[
        {
          icon: Bot,
          title: "Robotic Process Automation",
          description: "Deploy RPA bots using UiPath, Automation Anywhere, or Power Automate for repetitive tasks.",
        },
        {
          icon: Workflow,
          title: "Workflow Automation",
          description: "Design and implement automated workflows for approvals, notifications, and data processing.",
        },
        {
          icon: Cog,
          title: "Business Process Automation",
          description: "End-to-end automation of business processes from procurement to customer service.",
        },
        {
          icon: Zap,
          title: "Integration Automation",
          description: "Automate data integration between applications using APIs, webhooks, and middleware.",
        },
        {
          icon: BarChart,
          title: "Reporting Automation",
          description: "Automated report generation, data extraction, and business intelligence dashboards.",
        },
        {
          icon: RefreshCw,
          title: "IT Process Automation",
          description: "Automate IT operations including provisioning, patching, backup, and incident response.",
        },
      ]}
      benefits={[
        "Reduce manual work by 80%",
        "Eliminate human errors",
        "24/7 automated operations",
        "ROI within 6 months",
      ]}
    />
  )
}
