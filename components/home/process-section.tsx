import { Search, FileText, Wrench, LifeBuoy } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We analyze your current infrastructure, understand your business goals, and identify opportunities for improvement.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Planning",
    description: "Our experts design a customized solution with detailed roadmap, timelines, and resource allocation.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Implementation",
    description:
      "Seamless deployment with minimal disruption, following industry best practices and security standards.",
  },
  {
    number: "04",
    icon: LifeBuoy,
    title: "Support",
    description:
      "Ongoing maintenance, monitoring, and 24/7 support to ensure optimal performance and quick issue resolution.",
  },
]

export function ProcessSection() {
  return (
    <section className="relative bg-neutral-950 py-24 lg:py-32">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header - amber to yellow-600 */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            How We Work
          </span>
          <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl lg:text-6xl">
            Our <em className="text-white/80">Process</em>
          </h2>
        </div>

        {/* Process Steps - amber to yellow-600 */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-yellow-400/50 via-white/10 to-yellow-400/50 lg:block" />

          <div className="grid gap-12 lg:gap-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div className={`max-w-md ${index % 2 === 1 ? "lg:ml-auto" : ""}`}>
                    <span className="mb-2 block font-mono text-sm text-yellow-400">Step {step.number}</span>
                    <h3 className="mb-3 text-2xl font-medium text-white">{step.title}</h3>
                    <p className="text-white/60">{step.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-yellow-600/30 bg-black lg:mx-8">
                  <step.icon className="h-7 w-7 text-yellow-400" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
