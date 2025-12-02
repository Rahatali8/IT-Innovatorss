export function PartnersSection() {
  const partners = ["Microsoft", "AWS", "Cisco", "VMware", "Fortinet", "Dell", "HP Enterprise", "Azure"]

  return (
    <section className="relative border-y border-white/10 bg-black py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <span className="text-sm uppercase tracking-wider text-white/40">Technology Partners</span>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <span key={index} className="text-lg font-medium text-white/30 transition-colors hover:text-white/60">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
