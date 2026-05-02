"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#050505]/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5"
            : "bg-[#050505]/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection("#home")} 
              className="flex items-center gap-3 focus:outline-none"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden bg-white/5"
              >
                <Image
                  src="/images/logo.jpeg"
                  alt="KL16GARAGE Logo"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </motion.div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-lg tracking-tight">KL16</span>
                <span className="text-[#D50000] font-bold text-lg">GARAGE</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/90 hover:text-[#D50000] transition-colors duration-300 font-medium text-sm uppercase tracking-wider relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D50000] transition-all duration-300 group-hover:w-full" />
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a 
                href="tel:+60123456789" 
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D50000]" />
                <span>+60 12-345 6789</span>
              </a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-[#D50000] hover:bg-[#ff2222] text-white font-semibold px-6 py-2 rounded-sm uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(213,0,0,0.5)]"
                >
                  Book Now
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#050505]/98 backdrop-blur-xl">
              <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white text-2xl font-semibold uppercase tracking-wider hover:text-[#D50000] transition-colors"
                    >
                      {link.name}
                    </button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center gap-4 mt-4"
                >
                  <a 
                    href="tel:+60123456789" 
                    className="flex items-center gap-2 text-white/70 text-lg"
                  >
                    <Phone className="w-5 h-5 text-[#D50000]" />
                    <span>+60 12-345 6789</span>
                  </a>
                  <Button 
                    onClick={() => scrollToSection("#contact")}
                    className="bg-[#D50000] hover:bg-[#ff2222] text-white font-semibold px-8 py-3 rounded-sm uppercase tracking-wider"
                  >
                    Book Appointment
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
