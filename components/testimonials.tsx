"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ahmad Razak",
    role: "BMW Owner",
    rating: 5,
    text: "Absolutely incredible service! My BMW looks better than when I first bought it. The ceramic coating is phenomenal and the attention to detail is unmatched.",
  },
  {
    name: "Sarah Lim",
    role: "Mercedes Owner",
    rating: 5,
    text: "KL16GARAGE transformed my Mercedes completely. The PPF installation was flawless and the team was extremely professional. Highly recommended!",
  },
  {
    name: "Raj Kumar",
    role: "Ducati Owner",
    rating: 5,
    text: "Best detailing studio in KL for bikes! They treated my Ducati with such care. The chrome polishing and ceramic coating results exceeded my expectations.",
  },
  {
    name: "Michelle Tan",
    role: "Audi Owner",
    rating: 5,
    text: "Professional, thorough, and the results speak for themselves. My Audi has never looked this good. The team at KL16GARAGE are true experts.",
  },
  {
    name: "Jason Lee",
    role: "Kawasaki Owner",
    rating: 5,
    text: "Finally found a place that knows how to detail motorcycles properly! My Kawasaki Ninja looks brand new after their premium wash and coating service.",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D50000] text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#050505] mt-3 mb-6">
            What Our <span className="text-[#D50000]">Clients</span> Say
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto">
            {"Don't just take our word for it. Hear from our satisfied customers who experienced the KL16GARAGE difference."}
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-[#050505] p-8 lg:p-12 rounded-lg relative"
          >
            {/* Quote icon */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-[#D50000]/20" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D50000] text-[#D50000]" />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-white/90 text-xl lg:text-2xl leading-relaxed mb-8 italic">
              {`"${testimonials[currentIndex].text}"`}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#D50000] flex items-center justify-center text-white font-bold text-xl">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <div className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-[#D50000] text-sm">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-[#050505] flex items-center justify-center hover:bg-[#050505] hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-[#050505] flex items-center justify-center hover:bg-[#050505] hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#D50000] w-6" : "bg-[#050505]/30 w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
