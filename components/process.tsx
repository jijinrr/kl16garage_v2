"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Droplets, Wrench, Shield, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Inspection",
    description: "Thorough assessment of your vehicle to identify all areas requiring attention.",
  },
  {
    icon: Droplets,
    number: "02",
    title: "Cleaning",
    description: "Deep cleaning using premium products and techniques to remove all contaminants.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Restoration",
    description: "Paint correction, scratch removal, and surface restoration to perfection.",
  },
  {
    icon: Shield,
    number: "04",
    title: "Protection",
    description: "Application of ceramic coating or PPF for long-lasting protection.",
  },
  {
    icon: CheckCircle2,
    number: "05",
    title: "Final Finish",
    description: "Quality inspection and final touches to ensure showroom-ready results.",
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#f5f5f5] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D50000] text-sm font-semibold uppercase tracking-wider">Our Process</span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#050505] mt-3 mb-6">
            How We <span className="text-[#D50000]">Work</span>
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto">
            Our systematic approach ensures every car and bike receives consistent, 
            premium-quality treatment from start to finish.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D50000]/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center relative z-10 group">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#D50000] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#050505] flex items-center justify-center group-hover:bg-[#D50000] transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#050505] mb-3">{step.title}</h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Connector dot - desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-2 h-2 bg-[#D50000] rounded-full -translate-y-1/2 z-20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
