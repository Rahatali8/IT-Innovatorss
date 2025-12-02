import { ServicePageLayout } from "@/components/service-page-layout"
import { Eye, Camera, Monitor, Bell, Database, Smartphone } from "lucide-react"

export default function SurveillancePage() {
  return (
    <ServicePageLayout
      title="Surveillance Systems"
      subtitle="Complete Visibility"
      description="Advanced surveillance and monitoring solutions to protect your premises, assets, and personnel. Our intelligent video analytics and access control systems provide comprehensive security coverage."
      features={[
        {
          icon: Camera,
          title: "IP CCTV Systems",
          description: "High-definition IP cameras with night vision, PTZ capabilities, and weatherproof enclosures.",
        },
        {
          icon: Eye,
          title: "Video Analytics",
          description: "AI-powered video analytics for facial recognition, object detection, and behavior analysis.",
        },
        {
          icon: Monitor,
          title: "Central Monitoring",
          description:
            "24/7 monitoring center with real-time alerts, incident recording, and remote viewing capabilities.",
        },
        {
          icon: Bell,
          title: "Access Control",
          description: "Biometric access control, card readers, and visitor management systems for secure entry.",
        },
        {
          icon: Database,
          title: "NVR & Storage",
          description: "Network video recorders with redundant storage, cloud backup, and intelligent search features.",
        },
        {
          icon: Smartphone,
          title: "Mobile Monitoring",
          description: "Access live feeds and recordings from anywhere using our secure mobile applications.",
        },
      ]}
      benefits={[
        "Deter crime and unauthorized access",
        "Evidence collection for incidents",
        "Remote monitoring capabilities",
        "Integration with existing security systems",
      ]}
    />
  )
}
