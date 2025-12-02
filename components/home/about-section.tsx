import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="relative bg-black py-24 lg:py-32">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-yellow-600" />
            About Us
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="mb-16 font-serif text-4xl text-white md:text-5xl lg:text-6xl">
          Who We <em className="text-white/80">Are</em>
        </h2>

        {/* Two Column Content */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="mb-6 text-xl font-medium text-white">Our Story</h3>
            <p className="text-base leading-relaxed text-white/60">
              itinnovatorss is a cutting-edge technology company dedicated to transforming businesses through innovative
              digital solutions. Founded with a vision to bridge the gap between complex technology and practical
              business applications, we have grown to become a trusted partner for companies seeking digital excellence
              and operational efficiency.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-medium text-white">Our Mission</h3>
            <p className="text-base leading-relaxed text-white/60">
              We empower businesses with technology solutions that drive growth, efficiency, and competitive advantage.
              Our team of experts combines technical expertise with industry knowledge to deliver solutions that make a
              real difference. From cybersecurity to cloud infrastructure, we ensure your business stays ahead in the
              digital landscape.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 font-serif text-4xl text-yellow-400 md:text-5xl">50+</div>
            <div className="text-sm uppercase tracking-wider text-white/50">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="mb-2 font-serif text-4xl text-yellow-400 md:text-5xl">30+</div>
            <div className="text-sm uppercase tracking-wider text-white/50">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="mb-2 font-serif text-4xl text-yellow-400 md:text-5xl">5+</div>
            <div className="text-sm uppercase tracking-wider text-white/50">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="mb-2 font-serif text-4xl text-yellow-400 md:text-5xl">15+</div>
            <div className="text-sm uppercase tracking-wider text-white/50">Team Experts</div>
          </div>
        </div>

        {/* Learn More Link */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-wider text-white/70 transition-colors hover:text-yellow-600"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
