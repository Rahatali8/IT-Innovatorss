import { Pill } from "@/components/pill"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/ecommerce-website-mockup.png",
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile Apps",
    image: "/fitness-app-interface.png",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    image: "/modern-saas-dashboard.png",
  },
  {
    title: "Cloud Migration",
    category: "Cloud Solutions",
    image: "/cloud-infrastructure-diagram.png",
  },
  {
    title: "AI Chatbot",
    category: "AI & ML",
    image: "/ai-chatbot-interface.png",
  },
  {
    title: "Brand Campaign",
    category: "Digital Marketing",
    image: "/digital-marketing-campaign.png",
  },
]

export default function WorkGalleryPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container">
        <Pill className="mb-6">Our Work</Pill>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sentient mb-4">
          Work <i className="font-light">Gallery</i>
        </h1>
        <p className="font-mono text-base text-foreground/60 max-w-xl">
          Explore our portfolio of successful projects across various industries and technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video bg-foreground/5 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="font-mono text-xs text-primary mb-2">{project.category}</div>
                <h3 className="font-sentient text-lg">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block border border-primary text-primary px-8 py-3 font-mono text-sm hover:bg-primary hover:text-background transition-colors"
          >
            [Start Your Project]
          </Link>
        </div>
      </div>
    </div>
  )
}
