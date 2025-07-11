"use client"
import { motion } from "framer-motion"
import { GlobeAltIcon, BuildingOfficeIcon, CameraIcon, HeartIcon } from "@heroicons/react/24/outline"

export default function IndiaStats() {
  const stats = [
    {
      icon: GlobeAltIcon,
      number: "40+",
      label: "UNESCO World Heritage Sites",
      description: "Ancient monuments and natural wonders",
      color: "bg-orange-500",
    },
    {
      icon: BuildingOfficeIcon,
      number: "28",
      label: "States & 8 Union Territories",
      description: "Diverse cultures and landscapes",
      color: "bg-green-500",
    },
    {
      icon: CameraIcon,
      number: "1000+",
      label: "Tourist Destinations",
      description: "From beaches to mountains",
      color: "bg-blue-500",
    },
    {
      icon: HeartIcon,
      number: "5000+",
      label: "Years of History",
      description: "Rich cultural heritage",
      color: "bg-purple-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 via-white to-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Incredible India by Numbers</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the vastness and diversity that makes India a truly incredible destination
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
