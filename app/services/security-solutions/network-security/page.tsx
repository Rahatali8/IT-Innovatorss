import { ServicePageLayout } from "@/components/service-page-layout"
import { Shield, Wifi, Lock, Globe, Server, Key } from "lucide-react"

export default function NetworkSecurityPage() {
  return (
    <ServicePageLayout
      title="Network Security"
      subtitle="Secure Infrastructure"
      description="Protect your network infrastructure with enterprise-grade security solutions. From firewalls to intrusion detection systems, we provide comprehensive network protection against unauthorized access and cyber threats."
      features={[
        {
          icon: Shield,
          title: "Next-Gen Firewalls",
          description:
            "Deploy advanced firewall solutions with deep packet inspection, application control, and threat prevention.",
        },
        {
          icon: Wifi,
          title: "Intrusion Detection & Prevention",
          description: "IDS/IPS systems that detect and block malicious traffic in real-time across your network.",
        },
        {
          icon: Lock,
          title: "VPN & Secure Access",
          description: "Enterprise VPN solutions for secure remote access with multi-factor authentication support.",
        },
        {
          icon: Globe,
          title: "Web Application Firewall",
          description: "Protect web applications from SQL injection, XSS, and other OWASP top 10 vulnerabilities.",
        },
        {
          icon: Server,
          title: "Network Segmentation",
          description:
            "Implement zero-trust architecture with micro-segmentation to limit lateral movement of threats.",
        },
        {
          icon: Key,
          title: "Network Access Control",
          description: "802.1X authentication and NAC solutions to ensure only authorized devices access your network.",
        },
      ]}
      benefits={[
        "Block 99.9% of network-based attacks",
        "Secure remote workforce connectivity",
        "Real-time visibility into network traffic",
        "Compliance with security frameworks",
      ]}
    />
  )
}
