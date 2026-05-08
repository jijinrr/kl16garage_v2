"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, MessageCircle } from "lucide-react"

type Particle = { left: number; top: number; duration: number; delay: number }

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 4 + Math.random() * 3,
        delay: Math.random() * 2,
      }))
    )
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Red gradient glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D50000]/20 rounded-full blur-[150px]"
        />
        
        {/* Floating particles */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D50000]/50 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D50000 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D50000]/30 bg-[#D50000]/10 text-[#D50000] text-sm font-medium uppercase tracking-wider mb-8"
          >
            <span className="w-2 h-2 bg-[#D50000] rounded-full animate-pulse" />
            Premium Service Available
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Give Your Vehicle The{" "}
            <span className="text-[#D50000]">Luxury Treatment</span>{" "}
            It Deserves
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto"
          >
            Book your appointment today and experience the premium difference for your car or motorcycle. 
            First-time customers receive 15% off their first service.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-[#D50000] hover:bg-[#ff2222] text-white font-semibold px-8 py-6 text-lg rounded-sm uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(213,0,0,0.5)] min-w-[220px]"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a 
                href="https://wa.me/60123456789" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-6 text-lg rounded-sm uppercase tracking-wider transition-all duration-300 min-w-[220px]"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
          >
            <a 
              href="tel:+60123456789" 
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5 text-[#D50000]" />
              <span>+9 71585903788</span>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-8 text-white/40 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D50000] rounded-full" />
              <span>Certified Products</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D50000] rounded-full" />
              <span>Expert Team</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D50000] rounded-full" />
              <span>100% Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
