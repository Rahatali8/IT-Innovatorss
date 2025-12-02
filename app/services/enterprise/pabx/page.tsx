import { ServicePageLayout } from "@/components/service-page-layout"
import { Phone, Headphones, Users, Video, MessageSquare, BarChart } from "lucide-react"

export default function PABXPage() {
  return (
    <ServicePageLayout
      title="PABX Solutions"
      subtitle="Unified Communications"
      description="Enterprise telephony and unified communications solutions that connect your workforce. From IP-PBX systems to cloud-based UCaaS, we deliver reliable, feature-rich communication platforms."
      features={[
        {
          icon: Phone,
          title: "IP-PBX Systems",
          description:
            "On-premises IP-PBX deployment with Avaya, Cisco, or Asterisk for full control and customization.",
        },
        {
          icon: Headphones,
          title: "Call Center Solutions",
          description: "Contact center platforms with IVR, ACD, call recording, and workforce management.",
        },
        {
          icon: Users,
          title: "Cloud UCaaS",
          description: "Cloud-based unified communications with Microsoft Teams, Zoom, or RingCentral integration.",
        },
        {
          icon: Video,
          title: "Video Conferencing",
          description: "Enterprise video conferencing rooms with professional AV equipment and integration.",
        },
        {
          icon: MessageSquare,
          title: "Messaging & Collaboration",
          description: "Instant messaging, presence, and team collaboration tools integrated with telephony.",
        },
        {
          icon: BarChart,
          title: "Analytics & Reporting",
          description: "Call analytics, quality monitoring, and detailed reporting for communication insights.",
        },
      ]}
      benefits={[
        "Reduce telecom costs by 50%",
        "Crystal clear HD voice quality",
        "Support remote and hybrid work",
        "Integrate with CRM and ERP",
      ]}
    />
  )
}
