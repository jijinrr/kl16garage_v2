"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight,
  MessageCircle
} from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
]

const services = [
  "Ceramic Coating",
  "PPF Installation",
  "Interior Detailing",
  "Paint Correction",
  "Steam Wash",
  "Bike Detailing",
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: MessageCircle, href: "https://wa.me/60123456789", label: "WhatsApp" },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="bg-[#050505] relative overflow-hidden">
      {/* Red top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#D50000] to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <button onClick={() => scrollToSection("#home")} className="inline-block mb-6">
              <Image
                src="/images/logo.jpeg"
                alt="KL16GARAGE Logo"
                width={120}
                height={120}
                className="object-contain rounded-lg"
              />
            </button>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premium car and bike detailing services. 
              Driven by perfection, delivering excellence in every detail.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#D50000] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-[#D50000] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="text-white/60 hover:text-[#D50000] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D50000] mt-1 shrink-0" />
                <span className="text-white/60 text-sm">
                  KL16 Industrial Park,<br />
                  Kuala Lumpur, Malaysia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D50000] shrink-0" />
                <a href="tel:+60123456789" className="text-white/60 text-sm hover:text-[#D50000] transition-colors">
                  +60 12-345 6789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D50000] shrink-0" />
                <a href="mailto:info@kl16garage.com" className="text-white/60 text-sm hover:text-[#D50000] transition-colors">
                  info@kl16garage.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#D50000] shrink-0" />
                <a 
                  href="https://wa.me/60123456789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-[#D50000] transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} KL16GARAGE & INFINITY DETAILING STUDIO. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-white/40 text-sm">
              <button onClick={() => scrollToSection("#home")} className="hover:text-[#D50000] transition-colors">Privacy Policy</button>
              <button onClick={() => scrollToSection("#home")} className="hover:text-[#D50000] transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
