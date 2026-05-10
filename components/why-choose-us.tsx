"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  BadgeCheck, 
  Wrench, 
  Users, 
  DollarSign, 
  Zap, 
  Heart 
} from "lucide-react"

const features = [
  {
    icon: BadgeCheck,
    title: "Certified Products",
    description: "We use only premium, certified automotive care products from trusted brands.",
  },
  {
    icon: Wrench,
    title: "Professional Equipment",
    description: "State-of-the-art tools and equipment for precision detailing work.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly trained professionals with years of car and bike detailing experience.",
  },
  {
    icon: DollarSign,
    title: "Affordable Premium",
    description: "Luxury detailing services at competitive, transparent pricing.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient service without compromising on quality or attention to detail.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "100% satisfaction guaranteed with dedicated after-service support.",
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D50000]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D50000]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D50000] text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              The <span className="text-[#D50000]">Premium</span> Choice For Your Vehicle
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              At KL16GARAGE, we combine passion, expertise, and premium products to deliver 
              exceptional results for both cars and motorcycles. Your vehicle deserves nothing less than the best.
            </p>

            {/* Feature highlight */}
            <div className="flex items-center gap-6 p-6 bg-[#1A1A1A] rounded-lg border-l-4 border-[#D50000]">
              <div className="text-5xl font-bold text-[#D50000]">100%</div>
              <div>
                <div className="text-white font-semibold text-lg">Customer Satisfaction</div>
                <div className="text-white/50 text-sm">Guaranteed quality on every service</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 bg-[#1A1A1A]/50 border border-white/5 rounded-lg hover:border-[#D50000]/30 transition-all duration-300 hover:bg-[#1A1A1A]">
                  <div className="w-12 h-12 rounded-lg bg-[#D50000]/10 flex items-center justify-center mb-4 group-hover:bg-[#D50000]/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-[#D50000]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
