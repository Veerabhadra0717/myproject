"use client"
import { useState } from "react"
import type React from "react"
import { motion } from "framer-motion"
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"
import toast from "react-hot-toast"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast.error("Please enter your email address")
      return
    }

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Successfully subscribed! Welcome to the WanderLust Bangalore community!")
      setEmail("")
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MapPinIcon className="h-5 w-5 text-orange-300 mr-2" />
            <span className="text-white text-sm font-medium">Exclusive for Bangalore Travelers</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated with Travel Deals & Tips</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get exclusive travel deals from Bangalore, insider tips, and be the first to know about new destinations and
            custom route options.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <span>✈️</span>
              <span>Exclusive flight deals from Bangalore</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>🎯</span>
              <span>Personalized destination recommendations</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>💰</span>
              <span>Budget-friendly travel tips</span>
            </div>
          </div>

          <p className="text-purple-200 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time. Join 10,000+ Bangalore travelers!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
