import { Pill } from "@/components/pill"
import Link from "next/link"
import { Award, Shield, Cloud, Server, Lock, CheckCircle } from "lucide-react"

const certifications = [
  {
    name: "Microsoft Certified Professional (MCP)",
    icon: Award,
    category: "Microsoft",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Microsoft Certified Systems Administrator (MCSA)",
    icon: Server,
    category: "Microsoft",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "AWS Certified Solutions Architect",
    icon: Cloud,
    category: "Amazon Web Services",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Azure Information Security Administrator",
    icon: Shield,
    category: "Microsoft Azure",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    name: "Azure Administrator Associate",
    icon: Server,
    category: "Microsoft Azure",
    color: "from-cyan-600 to-cyan-700",
  },
  {
    name: "Security Operations Analyst",
    icon: Lock,
    category: "Microsoft",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Azure Solutions Architect Expert",
    icon: CheckCircle,
    category: "Microsoft Azure",
    color: "from-emerald-500 to-emerald-600",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container">
        <Pill className="mb-6">About Us</Pill>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sentient mb-8">
          Who We <i className="font-light">Are</i>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div>
            <h2 className="text-2xl font-sentient mb-4">Our Story</h2>
            <p className="font-mono text-sm text-foreground/60 leading-relaxed">
              IT-INNOVATORSS  is a cutting-edge technology company dedicated to transforming businesses through innovative
              digital solutions. Founded with a vision to bridge the gap between complex technology and practical
              business applications, we have grown to become a trusted partner for companies seeking digital excellence.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-sentient mb-4">Our Mission</h2>
            <p className="font-mono text-sm text-foreground/60 leading-relaxed">
              We empower businesses with technology solutions that drive growth, efficiency, and competitive advantage.
              Our team of experts combines technical expertise with industry knowledge to deliver solutions that make a
              real difference.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "30+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "15+", label: "Team Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-sentient text-primary">{stat.number}</div>
              <div className="font-mono text-xs text-foreground/60 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-sentient mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Innovation", desc: "We constantly push boundaries to deliver cutting-edge solutions." },
              { title: "Quality", desc: "Excellence is not negotiable - we deliver only the best." },
              { title: "Partnership", desc: "We work alongside our clients as true partners in success." },
            ].map((value) => (
              <div key={value.title} className="border border-border rounded-lg p-6">
                <h3 className="font-mono text-lg mb-2">{value.title}</h3>
                <p className="font-mono text-sm text-foreground/60">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <Pill className="mb-6">Credentials</Pill>
            <h2 className="text-3xl sm:text-4xl font-sentient mb-4">
              Professional <i className="font-light">Certifications</i>
            </h2>
            <p className="font-mono text-sm text-foreground/60 max-w-2xl mx-auto">
              Our expertise is backed by industry-recognized certifications from leading technology providers,
              demonstrating our commitment to excellence and continuous learning.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="group relative overflow-hidden border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                <div className="flex flex-col h-full">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4`}
                  >
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/40 mb-2">
                    {cert.category}
                  </span>

                  <h3 className="font-mono text-sm text-foreground/80 group-hover:text-foreground transition-colors leading-tight flex-1">
                    {cert.name}
                  </h3>

                  {/* Certificate upload placeholder */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-foreground/40 group-hover:text-primary/60 transition-colors">
                      <Award className="w-4 h-4" />
                      <span className="font-mono text-[10px] uppercase tracking-wider">Verified Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certificate proof section */}
          <div className="mt-12 border border-dashed border-border rounded-xl p-8 text-center bg-foreground/[0.02]">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-mono text-lg mb-2">Certificate Verification</h3>
            <p className="font-mono text-sm text-foreground/50 max-w-md mx-auto mb-6">
              All our certifications are verified and up-to-date. Click on any certificate card above to view the
              official documentation.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="font-mono text-xs text-primary">All Credentials Verified</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block border border-primary text-primary px-8 py-3 font-mono text-sm hover:bg-primary hover:text-background transition-colors"
          >
            [Get In Touch]
          </Link>
        </div>
      </div>
    </div>
  )
}
