import { ServicePageLayout } from "@/components/service-page-layout"
import { Network, Wifi, Globe, Router, Cable, Zap } from "lucide-react"

export default function NetworkInfrastructurePage() {
  return (
    <ServicePageLayout
      title="Network Infrastructure"
      subtitle="Connected Enterprise"
      description="Design, deploy, and manage enterprise network infrastructure that delivers high performance, reliability, and security. Our solutions connect your people, applications, and data seamlessly."
      features={[
        {
          icon: Network,
          title: "LAN & WAN Solutions",
          description: "High-performance local and wide area network design with redundancy and load balancing.",
        },
        {
          icon: Globe,
          title: "SD-WAN Implementation",
          description:
            "Software-defined WAN solutions for optimized connectivity, cost savings, and simplified management.",
        },
        {
          icon: Wifi,
          title: "Wireless Infrastructure",
          description: "Enterprise WiFi 6/6E deployment with seamless roaming, high density support, and guest access.",
        },
        {
          icon: Router,
          title: "Routing & Switching",
          description: "Enterprise-grade routers and switches with advanced QoS, VLAN, and traffic management.",
        },
        {
          icon: Cable,
          title: "Structured Cabling",
          description: "Cat6/Cat6A/Fiber optic cabling infrastructure with proper cable management and documentation.",
        },
        {
          icon: Zap,
          title: "Network Optimization",
          description: "Performance tuning, bandwidth optimization, and latency reduction for critical applications.",
        },
      ]}
      benefits={[
        "99.99% network uptime guarantee",
        "Up to 10Gbps network speeds",
        "Reduce network management costs",
        "Support for hybrid work environments",
      ]}
    />
  )
}
