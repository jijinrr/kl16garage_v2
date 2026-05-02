"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Shield, Award, Users, Car } from "lucide-react"
import Image from "next/image"

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const stats = [
  { icon: Car, value: 5000, suffix: "+", label: "Vehicles Detailed" },
  { icon: Award, value: 100, suffix: "%", label: "Customer Satisfaction" },
  { icon: Users, value: 15, suffix: "+", label: "Expert Professionals" },
  { icon: Shield, value: 10, suffix: "+", label: "Years Experience" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const scrollToServices = () => {
    const element = document.querySelector("#services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f5f5f5] to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/about-garage.jpg"
                alt="KL16GARAGE Premium Detailing Studio"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating accent */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-[#D50000] text-white p-6 rounded-lg shadow-2xl"
            >
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Years</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#D50000] text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#050505] mt-3 mb-6 leading-tight">
              Driven By <span className="text-[#D50000]">Perfection</span>
            </h2>
            <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
              KL16GARAGE & INFINITY DETAILING STUDIO is a premium automotive detailing center 
              dedicated to providing world-class car and motorcycle care services. Our team of certified 
              professionals uses only the finest products and cutting-edge techniques to 
              ensure your vehicle receives the ultimate treatment.
            </p>
            <p className="text-lg text-[#6b6b6b] leading-relaxed mb-8">
              From ceramic coatings to paint protection films, we offer comprehensive 
              solutions that protect and enhance your vehicle&apos;s appearance. Experience 
              the difference of true premium detailing for both cars and bikes.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {["Certified Products", "Professional Equipment", "Expert Team", "Premium Service"].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-[#D50000] rounded-full" />
                  <span className="text-[#050505] font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D50000] hover:bg-[#ff2222] text-white font-semibold rounded-sm uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(213,0,0,0.5)]"
            >
              Explore Our Services
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-[#1A1A1A] p-8 rounded-lg text-center group hover:bg-[#D50000] transition-all duration-500"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-[#D50000] group-hover:text-white transition-colors" />
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/60 uppercase tracking-wider group-hover:text-white/80 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
