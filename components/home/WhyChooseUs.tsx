"use client"
import { motion } from "framer-motion"
import {
  TruckIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline"

export default function WhyChooseUs() {
  const features = [
    {
      icon: TruckIcon,
      title: "Premium Fleet",
      description: "Well-maintained tempo travellers with AC, comfortable seating, and modern amenities.",
      color: "bg-blue-500",
    },
    {
      icon: UserGroupIcon,
      title: "Group Travel Experts",
      description: "Specialized in group travel with vehicles for 9-17 passengers. Perfect for any group size.",
      color: "bg-green-500",
    },
    {
      icon: ShieldCheckIcon,
      title: "Experienced Drivers",
      description: "Professional, licensed drivers with excellent knowledge of routes and local areas.",
      color: "bg-orange-500",
    },
    {
      icon: ClockIcon,
      title: "Flexible Timing",
      description: "Travel on your schedule. Day trips, multi-day tours, or extended journeys - we adapt to you.",
      color: "bg-purple-500",
    },
    {
      icon: MapPinIcon,
      title: "Any Destination",
      description: "From Bangalore to anywhere in India. Custom routes and popular destinations available.",
      color: "bg-red-500",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "24/7 Support",
      description: "Round-the-clock assistance during your journey. Emergency support and real-time tracking.",
      color: "bg-indigo-500",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Tempo Traveller Service?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in comfortable group travel from Bangalore with premium vehicles, experienced drivers, and
            personalized service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Fleet Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Tempo Traveller Fleet</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Choose from our range of well-maintained vehicles perfect for your group size and travel needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">9 Seater</div>
              <div className="text-blue-100 text-sm">Perfect for small groups</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">12 Seater</div>
              <div className="text-blue-100 text-sm">Ideal for families</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">15 Seater</div>
              <div className="text-blue-100 text-sm">Great for friends</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">17 Seater</div>
              <div className="text-blue-100 text-sm">Large group travel</div>
            </div>
          </div>

          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <h4 className="text-lg font-semibold text-white mb-3">Transparent Pricing</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-100">
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>Same charges for One Way & Round Trip</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>Toll charges additional (actual cost)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>Driver allowance included</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>No hidden charges</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="btn bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 mr-4">View Our Fleet</button>
            <button className="btn border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Get Quote Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
