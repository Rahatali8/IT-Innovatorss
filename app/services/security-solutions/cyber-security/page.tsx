import { ServicePageLayout } from "@/components/service-page-layout"
import { Shield, Bug, Lock, AlertTriangle, FileSearch, RefreshCw, Eye, Database, Network, Server, Cloud, Smartphone } from "lucide-react"
import { Pill } from "@/components/pill"
import Link from "next/link"

export default function CyberSecurityPage() {
  return (
    <div className="min-h-screen">
      <ServicePageLayout
        title="Cyber Security"
        subtitle="Advanced Protection"
        description="Enterprise-grade cybersecurity solutions to protect your organization from sophisticated cyber threats, data breaches, and malicious attacks. Our comprehensive approach ensures your digital assets remain secure 24/7 with cutting-edge technology and expert monitoring."
        features={[
          {
            icon: Shield,
            title: "Threat Detection & Response",
            description:
              "Real-time monitoring and automated response to security incidents using AI-powered threat intelligence and machine learning algorithms.",
          },
          {
            icon: Bug,
            title: "Vulnerability Assessment",
            description:
              "Comprehensive security audits and penetration testing to identify and remediate vulnerabilities before attackers exploit them.",
          },
          {
            icon: Lock,
            title: "Endpoint Protection",
            description: "Advanced endpoint detection and response (EDR) solutions for all devices in your network with zero-day threat protection.",
          },
          {
            icon: AlertTriangle,
            title: "Incident Response",
            description:
              "24/7 security operations center (SOC) with rapid incident response and forensic analysis capabilities to minimize damage.",
          },
          {
            icon: FileSearch,
            title: "Security Compliance",
            description: "Ensure compliance with ISO 27001, GDPR, HIPAA, PCI-DSS, SOC 2, and other regulatory requirements with automated reporting.",
          },
          {
            icon: RefreshCw,
            title: "Security Awareness Training",
            description: "Employee training programs to build a security-conscious culture and reduce human error risks through interactive modules.",
          },
        ]}
        benefits={[
          "Reduce cyber attack risk by up to 95%",
          "24/7 threat monitoring and response",
          "Compliance with international standards",
          "Minimize downtime from security incidents",
        ]}
      />

      {/* Advanced Security Services Section */}
      <div className="bg-foreground/5 py-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <Pill className="mb-4">Advanced Services</Pill>
            <h2 className="text-3xl md:text-4xl font-sentient mb-4">
              Comprehensive Security <i className="font-light">Solutions</i>
            </h2>
            <p className="font-mono text-sm text-foreground/60 max-w-2xl mx-auto">
              From network security to cloud protection, we offer end-to-end cybersecurity services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: "Security Monitoring",
                description: "Continuous surveillance of your IT infrastructure with SIEM integration and real-time alerting",
                features: ["24/7 SOC monitoring", "Log analysis", "Behavioral analytics", "Threat hunting"]
              },
              {
                icon: Database,
                title: "Data Protection",
                description: "Safeguard sensitive data with encryption, DLP solutions, and secure backup strategies",
                features: ["Data encryption", "Access control", "Backup & recovery", "Data loss prevention"]
              },
              {
                icon: Network,
                title: "Network Security",
                description: "Protect your network perimeter with firewalls, IDS/IPS, and secure network architecture",
                features: ["Next-gen firewalls", "VPN solutions", "Network segmentation", "DDoS protection"]
              },
              {
                icon: Server,
                title: "Application Security",
                description: "Secure your applications throughout the development lifecycle with DevSecOps practices",
                features: ["Code review", "SAST/DAST testing", "API security", "Container security"]
              },
              {
                icon: Cloud,
                title: "Cloud Security",
                description: "Comprehensive cloud security for AWS, Azure, and GCP with CSPM and CWPP solutions",
                features: ["Cloud posture management", "Identity & access", "Workload protection", "Compliance monitoring"]
              },
              {
                icon: Smartphone,
                title: "Mobile Security",
                description: "Protect mobile devices and applications with MDM, MAM, and mobile threat defense",
                features: ["Device management", "App security", "Mobile threat defense", "BYOD policies"]
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 border border-border rounded-lg bg-background hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-sentient text-xl mb-3">{service.title}</h3>
                <p className="font-mono text-sm text-foreground/60 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 font-mono text-xs text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Framework Section */}
      <div className="py-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <Pill className="mb-4">Our Approach</Pill>
            <h2 className="text-3xl md:text-4xl font-sentient mb-4">
              Multi-Layered Security <i className="font-light">Framework</i>
            </h2>
            <p className="font-mono text-sm text-foreground/60 max-w-2xl mx-auto">
              We implement defense-in-depth strategies to ensure comprehensive protection at every level
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                phase: "01",
                title: "Assessment & Planning",
                description: "Comprehensive security audit and risk assessment to identify vulnerabilities and create a tailored security roadmap",
                deliverables: ["Security audit report", "Risk assessment", "Security roadmap", "Compliance gap analysis"]
              },
              {
                phase: "02",
                title: "Implementation",
                description: "Deploy advanced security solutions including firewalls, EDR, SIEM, and other protective measures",
                deliverables: ["Security tools deployment", "Network hardening", "Access controls", "Encryption setup"]
              },
              {
                phase: "03",
                title: "Monitoring & Response",
                description: "24/7 security monitoring with rapid incident response and continuous threat intelligence updates",
                deliverables: ["SOC monitoring", "Incident response", "Threat intelligence", "Security alerts"]
              },
              {
                phase: "04",
                title: "Optimization & Training",
                description: "Continuous improvement of security posture with regular updates, testing, and employee training programs",
                deliverables: ["Security updates", "Penetration testing", "Staff training", "Policy refinement"]
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="p-8 border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl font-sentient text-primary/20">{phase.phase}</span>
                  <div>
                    <h3 className="font-sentient text-2xl mb-2">{phase.title}</h3>
                    <p className="font-mono text-sm text-foreground/60 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-mono text-xs text-foreground/50 mb-3 uppercase tracking-wider">Key Deliverables</p>
                  <div className="grid grid-cols-2 gap-2">
                    {phase.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        <span className="font-mono text-xs text-foreground/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Recognition Section */}
      <div className="bg-foreground/5 py-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <Pill className="mb-4">Industry Recognition</Pill>
            <h2 className="text-3xl md:text-4xl font-sentient mb-4">
              Certified & <i className="font-light">Trusted</i>
            </h2>
            <p className="font-mono text-sm text-foreground/60 max-w-2xl mx-auto">
              Our team holds industry-leading certifications and follows best practices
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { cert: "ISO 27001", desc: "Information Security Management" },
              { cert: "SOC 2 Type II", desc: "Service Organization Control" },
              { cert: "CISSP", desc: "Certified Information Systems Security Professional" },
              { cert: "CEH", desc: "Certified Ethical Hacker" },
              { cert: "CISM", desc: "Certified Information Security Manager" },
              { cert: "CompTIA Security+", desc: "Security Fundamentals" },
              { cert: "OSCP", desc: "Offensive Security Certified Professional" },
              { cert: "GIAC", desc: "Global Information Assurance Certification" },
            ].map((cert, index) => (
              <div
                key={index}
                className="p-6 border border-border rounded-lg bg-background text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-sentient text-lg mb-2">{cert.cert}</h4>
                <p className="font-mono text-xs text-foreground/60">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="container max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Protected Organizations" },
              { number: "99.9%", label: "Threat Detection Rate" },
              { number: "24/7", label: "Security Monitoring" },
              { number: "<15min", label: "Average Response Time" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-sentient text-primary mb-2">{stat.number}</div>
                <p className="font-mono text-sm text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-foreground/5 py-20">
        <div className="container max-w-5xl">
          <div className="p-12 border border-border rounded-lg bg-background text-center">
            <h3 className="text-3xl font-sentient mb-4">
              Ready to Strengthen Your <i className="font-light">Cyber Defenses</i>?
            </h3>
            <p className="font-mono text-sm text-foreground/60 mb-8 max-w-2xl mx-auto">
              Don't wait for a breach to happen. Our cybersecurity experts are ready to assess your security posture
              and implement robust protection measures tailored to your organization.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-primary text-background px-8 py-3 font-mono text-sm hover:bg-primary/90 transition-colors"
              >
                [Schedule Security Assessment]
              </Link>
              <Link
                href="/work-gallery"
                className="inline-block border border-primary text-primary px-8 py-3 font-mono text-sm hover:bg-primary hover:text-background transition-colors"
              >
                [View Case Studies]
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
