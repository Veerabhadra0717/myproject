"use client"
import { motion } from "framer-motion"
import { MagnifyingGlassIcon, CalendarDaysIcon, CreditCardIcon, MapPinIcon } from "@heroicons/react/24/outline"

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Search & Discover",
      description:
        "Browse through our curated collection of destinations and travel packages tailored to your preferences.",
      icon: MagnifyingGlassIcon,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Plan & Customize",
      description: "Select your dates, customize your itinerary, and add special experiences to make your trip unique.",
      icon: CalendarDaysIcon,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Book & Pay",
      description: "Secure your booking with our safe payment system and receive instant confirmation.",
      icon: CreditCardIcon,
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Travel & Enjoy",
      description: "Pack your bags and embark on your adventure with 24/7 support throughout your journey.",
      icon: MapPinIcon,
      color: "bg-orange-500",
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Planning your dream vacation has never been easier. Follow these simple steps to get started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              )}

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.id}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Adventure?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of happy travelers who have discovered their perfect getaway with WanderLust.
            </p>
            <button className="btn btn-primary text-lg px-8 py-4">Start Planning Now</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
