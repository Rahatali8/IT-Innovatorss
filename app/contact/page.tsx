"use client"

import type React from "react"

import { Pill } from "@/components/pill"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container">
        <Pill className="mb-6">Contact</Pill>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sentient mb-4">
          Get In <i className="font-light">Touch</i>
        </h1>
        <p className="font-mono text-base text-foreground/60 max-w-xl">
          Ready to start your project? Have questions? We&apos;d love to hear from you.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-mono text-sm text-foreground/60 block mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="font-mono text-sm text-foreground/60 block mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-mono text-sm text-foreground/60 block mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="font-mono text-sm text-foreground/60 block mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full border border-primary text-primary px-6 py-3 font-mono text-sm hover:bg-primary hover:text-background transition-colors"
              >
                [Send Message]
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-sentient mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-foreground/60">Email</div>
                    <div className="font-mono text-sm">info@itinnovatorss.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-foreground/60">Phone</div>
                    <div className="font-mono text-sm">03710666792</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-foreground/60">Location</div>
                    <div className="font-mono text-sm">R1/369 Street 7 Block E Saima Arabian Villas</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="font-sentient text-lg mb-3">Office Hours</h3>
              <div className="space-y-2 font-mono text-sm text-foreground/60">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
