"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

type Particle = { left: number; top: number; duration: number; delay: number }

export function Hero() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    )
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Premium car detailing studio"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/60 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
      </div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(213,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(213,0,0,0.3) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#D50000] rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}

      {/* Red glow accents */}
      <motion.div
        className="absolute top-1/4 -left-40 w-80 h-80 bg-[#D50000]/20 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-40 w-80 h-80 bg-[#D50000]/20 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D50000]/30 bg-[#D50000]/10 text-[#D50000] text-sm font-medium uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Where Shine Meets Precision
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
        >
          <span className="block">Premium Car & Bike</span>
          <span className="block text-gradient-silver">Detailing Experience</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          KL16GARAGE & INFINITY DETAILING STUDIO delivers world-class car and motorcycle detailing,
          ceramic protection, and luxury vehicle care with precision craftsmanship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-[#D50000] hover:bg-[#ff2222] text-white font-semibold px-8 py-6 text-lg rounded-sm uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(213,0,0,0.5)] min-w-[200px]"
            >
              Book Appointment
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#services")}
              className="bg-white text-black border-white hover:bg-white/90 hover:border-white font-semibold px-8 py-6 text-lg rounded-sm uppercase tracking-wider transition-all duration-300 min-w-[200px]"
            >
              Explore Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "5000+", label: "Vehicles Detailed" },
            { value: "100%", label: "Satisfaction" },
            { value: "10+", label: "Years Experience" },
            { value: "Premium", label: "Quality Service" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#D50000] mb-1">{stat.value}</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("#about")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  )
}
