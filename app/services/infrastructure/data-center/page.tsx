import { ServicePageLayout } from "@/components/service-page-layout"
import { Database, Server, HardDrive, Thermometer, Zap, RefreshCw } from "lucide-react"

export default function DataCenterPage() {
  return (
    <ServicePageLayout
      title="Data Center Infrastructure"
      subtitle="Mission Critical"
      description="Complete data center solutions from design to operations. We build and manage enterprise-grade data centers that deliver maximum uptime, efficiency, and scalability for your critical workloads."
      features={[
        {
          icon: Database,
          title: "Data Center Design",
          description: "Tier III/IV data center design with redundant power, cooling, and connectivity systems.",
        },
        {
          icon: Server,
          title: "Server Infrastructure",
          description: "Rack-mounted and blade server deployment with clustering, virtualization, and management.",
        },
        {
          icon: HardDrive,
          title: "Storage Solutions",
          description: "SAN, NAS, and object storage deployment with data deduplication and compression.",
        },
        {
          icon: Thermometer,
          title: "Cooling & Power",
          description: "Precision cooling systems, UPS, generators, and power distribution for 100% uptime.",
        },
        {
          icon: Zap,
          title: "Disaster Recovery",
          description: "DR site design, replication, and failover solutions for business continuity.",
        },
        {
          icon: RefreshCw,
          title: "Data Center Migration",
          description: "Zero-downtime migration services from legacy facilities to modern data centers.",
        },
      ]}
      benefits={[
        "99.999% uptime SLA",
        "PUE optimization below 1.4",
        "Scalable capacity on demand",
        "Full compliance with standards",
      ]}
    />
  )
}
