"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { TruckIcon, UserGroupIcon, ShieldCheckIcon } from "@heroicons/react/24/solid"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Tempo Traveller on road */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Tempo traveller on highway"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-orange-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <TruckIcon className="h-5 w-5 text-orange-400 mr-2" />
            <span className="text-white text-sm font-medium">Premium Tempo Traveller Services</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Comfortable
          <span className="block text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text">
            Group Travel
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Premium tempo traveller rentals from Bangalore to anywhere in India. Travel in comfort with your group,
          experienced drivers, and flexible itineraries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button className="btn btn-primary text-lg px-8 py-4 shadow-2xl">Book Your Tempo Traveller</button>
          <button className="btn btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
            View Our Fleet
          </button>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <UserGroupIcon className="h-8 w-8 text-orange-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">9-17 Seater Options</h3>
            <p className="text-gray-300 text-sm">Perfect for small to large groups</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <ShieldCheckIcon className="h-8 w-8 text-orange-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Experienced Drivers</h3>
            <p className="text-gray-300 text-sm">Professional and knowledgeable drivers</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <TruckIcon className="h-8 w-8 text-orange-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Well-Maintained Fleet</h3>
            <p className="text-gray-300 text-sm">Clean, comfortable, and reliable vehicles</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}
