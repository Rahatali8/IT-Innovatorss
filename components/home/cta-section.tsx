import Link from "next/link"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative bg-black py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-600/10 via-transparent to-transparent p-8 lg:p-16">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div>
              <h2 className="mb-6 font-serif text-3xl text-white md:text-4xl lg:text-5xl">
                Ready to Transform Your <em className="text-yellow-400">IT Infrastructure?</em>
              </h2>
              <p className="mb-8 text-lg text-white/60">
                Let's discuss how we can help secure, optimize, and modernize your business technology. Get in touch
                with our experts today.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-medium text-black transition-all hover:bg-yellow-500"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/services/security-solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 font-medium text-white transition-all hover:bg-white/10"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Right Content - Contact Info */}
            <div className="flex flex-col justify-center gap-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-yellow-400/10 p-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <div className="text-sm text-white/50">Call Us</div>
                  <div className="text-lg text-white">03710666792</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-yellow-400/10 p-3">
                  <Mail className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <div className="text-sm text-white/50">Email Us</div>
                  <div className="text-lg text-white">info@itinnovatorss.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-yellow-400/10 p-3">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <div className="text-sm text-white/50">Visit Us</div>
                  <div className="text-lg text-white">R1/369 Street 7 Block E Saima Arabian Villas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
