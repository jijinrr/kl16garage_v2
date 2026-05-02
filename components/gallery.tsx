"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, X } from "lucide-react"

const galleryItems = [
  {
    title: "Premium Car Wash",
    category: "Exterior Cleaning",
    image: "/images/gallery/car-wash.jpg",
  },
  {
    title: "Ceramic Shield",
    category: "Ceramic Coating",
    image: "/images/gallery/ceramic-coating.jpg",
  },
  {
    title: "Interior Luxury",
    category: "Interior Detailing",
    image: "/images/gallery/interior-detailing.jpg",
  },
  {
    title: "Mirror Finish",
    category: "Paint Correction",
    image: "/images/gallery/paint-correction.jpg",
  },
  {
    title: "Bike Detailing",
    category: "Motorcycle Care",
    image: "/images/gallery/bike-detailing.jpg",
  },
  {
    title: "PPF Protection",
    category: "Paint Protection Film",
    image: "/images/gallery/ppf-installation.jpg",
  },
  {
    title: "Motorcycle Wash",
    category: "Bike Cleaning",
    image: "/images/gallery/bike-wash.jpg",
  },
  {
    title: "Showroom Ready",
    category: "Full Detail",
    image: "/images/gallery/showroom-finish.jpg",
  },
]

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  return (
    <section id="gallery" ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D50000] text-sm font-semibold uppercase tracking-wider">Our Work</span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#050505] mt-3 mb-6">
            Luxury <span className="text-[#D50000]">Showcase</span>
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto">
            Explore our portfolio of premium car and bike detailing work showcasing the 
            exceptional results we deliver for every vehicle.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative aspect-square rounded-lg overflow-hidden">
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <motion.div
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <span className="text-[#D50000] text-xs uppercase tracking-wider font-medium">{item.category}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                  </motion.div>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D50000] rounded-lg transition-all duration-300" />

                {/* Center icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#D50000] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#050505] text-[#050505] hover:bg-[#050505] hover:text-white font-semibold rounded-sm uppercase tracking-wider transition-all duration-300"
          >
            View Full Gallery
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#D50000] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full aspect-video rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#050505] to-transparent">
              <span className="text-[#D50000] text-sm uppercase tracking-wider">{selectedImage.category}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{selectedImage.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
