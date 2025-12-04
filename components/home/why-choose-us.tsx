import { CheckCircle2, Zap, HeadphonesIcon, Lock, Clock, Award } from "lucide-react"

const reasons = [
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade security protocols protecting your critical business data and infrastructure.",
  },
  {
    icon: Zap,
    title: "Fast Implementation",
    description: "Rapid deployment with minimal downtime ensuring business continuity throughout.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock technical support from our certified IT professionals.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Industry-leading reliability with guaranteed service level agreements.",
  },
  {
    icon: Award,
    title: "Certified Experts",
    description: "Microsoft, AWS, and Azure certified professionals at your service.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Track Record",
    description: "50+ successful projects delivered across multiple industries.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative bg-black py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header - amber to yellow-600 */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            Why Choose Us
          </span>
          <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl lg:text-6xl">
            The IT-INNOVATORSS <em className="text-white/80">Advantage</em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            We combine technical excellence with business acumen to deliver solutions that drive real results for your
            organization.
          </p>
        </div>

        {/* Features Grid - amber to yellow-600 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-yellow-600/30"
            >
              <div className="mb-4 inline-flex rounded-lg bg-yellow-400/10 p-3">
                <reason.icon className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-white">{reason.title}</h3>
              <p className="text-sm text-white/60">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
