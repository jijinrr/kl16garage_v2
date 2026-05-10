"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Droplets, 
  Wind, 
  Sofa, 
  Settings, 
  Sparkles, 
  Shield, 
  Layers,
  Lightbulb,
  Zap,
  Bike
} from "lucide-react"

const services = [
  {
    icon: Droplets,
    title: "Triple Foam Wash",
    description: "Luxury multi-layer foam wash for deep exterior cleaning with pH-balanced formulas for cars and bikes.",
    category: "Washing",
  },
  {
    icon: Wind,
    title: "Steam Wash",
    description: "Advanced steam cleaning technology for safe and effective sanitization of your vehicle.",
    category: "Washing",
  },
  {
    icon: Sofa,
    title: "Interior Detailing",
    description: "Deep interior restoration with premium finish, leather conditioning, and fabric protection.",
    category: "Detailing",
  },
  {
    icon: Settings,
    title: "Chassis Cleaning",
    description: "Professional underbody deep cleaning and rust protection treatment for longevity.",
    category: "Cleaning",
  },
  {
    icon: Sparkles,
    title: "Polishing & Detailing",
    description: "Paint correction and gloss enhancement for showroom-quality mirror finish shine.",
    category: "Detailing",
  },
  {
    icon: Shield,
    title: "PPF Installation",
    description: "Premium paint protection film installation providing ultimate defense against scratches.",
    category: "Protection",
  },
  {
    icon: Layers,
    title: "Ceramic Coating",
    description: "Long-lasting hydrophobic ceramic protection with 9H hardness for maximum durability.",
    category: "Protection",
  },
  {
    icon: Lightbulb,
    title: "Headlight Restoration",
    description: "Restore clarity and brightness to oxidized headlights for improved safety and aesthetics.",
    category: "Restoration",
  },
  {
    icon: Bike,
    title: "Motorcycle Detailing",
    description: "Specialized detailing services for motorcycles including chrome polishing and chain care.",
    category: "Bike Care",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D50000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D50000]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D50000]/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D50000] text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-3 mb-6">
            Premium <span className="text-gradient-silver">Detailing</span> Services
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Experience world-class car and motorcycle care with our comprehensive range of 
            premium detailing services designed for the discerning vehicle owner.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-lg bg-[#1A1A1A]/50 border border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-[#D50000]/50 hover:shadow-[0_0_30px_rgba(213,0,0,0.15)]">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D50000]/0 to-[#D50000]/0 group-hover:from-[#D50000]/5 group-hover:to-transparent transition-all duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-[#D50000]/10 flex items-center justify-center group-hover:bg-[#D50000]/20 transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-[#D50000]" />
                    </div>
                    <span className="text-xs text-white/40 uppercase tracking-wider px-3 py-1 bg-white/5 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D50000] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D50000]/0 to-[#D50000]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D50000] hover:bg-[#ff2222] text-white font-semibold rounded-sm uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(213,0,0,0.5)]"
          >
            Book a Service
            <Zap className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
