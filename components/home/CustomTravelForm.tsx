"use client"
import { useState } from "react"
import type React from "react"
import { motion } from "framer-motion"
import { MapPinIcon, CalendarDaysIcon, UserGroupIcon, ClockIcon, TruckIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function CustomTravelForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    startingPoint: "Bangalore",
    destination: "",
    customDestination: "",
    startDate: "",
    endDate: "",
    duration: "",
    travelers: 9,
    vehicleType: "9-seater",
    tripType: "round-trip",
    travelType: "leisure",
    pickupLocation: "",
    specialRequests: "",
  })

  const popularDestinations = [
    "Goa",
    "Kerala",
    "Rajasthan",
    "Himachal Pradesh",
    "Kashmir",
    "Uttarakhand",
    "Tamil Nadu",
    "Karnataka",
    "Andhra Pradesh",
    "Maharashtra",
    "Gujarat",
    "Other (Custom)",
  ]

  const vehicleOptions = [
    { value: "9-seater", label: "9 Seater Tempo Traveller", capacity: "Up to 9 passengers" },
    { value: "12-seater", label: "12 Seater Tempo Traveller", capacity: "Up to 12 passengers" },
    { value: "15-seater", label: "15 Seater Tempo Traveller", capacity: "Up to 15 passengers" },
    { value: "17-seater", label: "17 Seater Tempo Traveller", capacity: "Up to 17 passengers" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.destination && !formData.customDestination) {
      toast.error("Please select or enter a destination")
      return
    }

    if (!formData.startDate) {
      toast.error("Please select a start date")
      return
    }

    // Create tempo traveller booking request
    const bookingData = {
      ...formData,
      destination: formData.destination === "Other (Custom)" ? formData.customDestination : formData.destination,
      id: Date.now().toString(),
    }

    // Store in localStorage for now (in real app, send to API)
    localStorage.setItem("tempoTravellerBooking", JSON.stringify(bookingData))

    toast.success("Booking request created! We'll contact you with details.")
    router.push(`/booking-confirmation?id=${bookingData.id}`)
  }

  return (
    <section className="relative -mt-32 z-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
            <TruckIcon className="h-12 w-12 text-white mx-auto mb-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Book Your Tempo Traveller</h2>
            <p className="text-blue-100">
              Tell us your travel plans and we'll arrange the perfect vehicle for your group
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Starting Point */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPinIcon className="h-4 w-4 inline mr-1" />
                  Starting Point
                </label>
                <input
                  type="text"
                  value={formData.startingPoint}
                  onChange={(e) => setFormData({ ...formData, startingPoint: e.target.value })}
                  className="input"
                  placeholder="Enter starting city"
                />
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPinIcon className="h-4 w-4 inline mr-1" />
                  Destination
                </label>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="input"
                >
                  <option value="">Select destination</option>
                  {popularDestinations.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>

              {/* Custom Destination */}
              {formData.destination === "Other (Custom)" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Custom Destination</label>
                  <input
                    type="text"
                    value={formData.customDestination}
                    onChange={(e) => setFormData({ ...formData, customDestination: e.target.value })}
                    className="input"
                    placeholder="Enter your custom destination"
                  />
                </div>
              )}

              {/* Start Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <CalendarDaysIcon className="h-4 w-4 inline mr-1" />
                  Start Date
                </label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="input"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <CalendarDaysIcon className="h-4 w-4 inline mr-1" />
                  End Date (Optional)
                </label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  className="input"
                  min={formData.startDate || new Date().toISOString().split("T")[0]}
                />
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <ClockIcon className="h-4 w-4 inline mr-1" />
                  Duration
                </label>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="input"
                >
                  <option value="">Select duration</option>
                  <option value="1 day">1 day</option>
                  <option value="2 days">2 days</option>
                  <option value="3-5 days">3-5 days</option>
                  <option value="1 week">1 week</option>
                  <option value="2 weeks">2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="custom">Custom duration</option>
                </select>
              </div>

              {/* Number of Travelers */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <UserGroupIcon className="h-4 w-4 inline mr-1" />
                  Number of Travelers
                </label>
                <select
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: Number.parseInt(e.target.value) })}
                  className="input"
                >
                  {Array.from({ length: 17 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Person" : "People"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Vehicle Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <TruckIcon className="h-4 w-4 inline mr-1" />
                  Vehicle Type
                </label>
                <select
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                  className="input"
                >
                  {vehicleOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Trip Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Trip Type</label>
                <select
                  value={formData.tripType || "round-trip"}
                  onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                  className="input"
                >
                  <option value="round-trip">Round Trip</option>
                  <option value="one-way">One Way</option>
                </select>
              </div>

              {/* Travel Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Travel Type</label>
                <select
                  value={formData.travelType}
                  onChange={(e) => setFormData({ ...formData, travelType: e.target.value })}
                  className="input"
                >
                  <option value="leisure">Leisure</option>
                  <option value="adventure">Adventure</option>
                  <option value="cultural">Cultural</option>
                  <option value="spiritual">Spiritual</option>
                  <option value="business">Business</option>
                  <option value="family">Family</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate</option>
                </select>
              </div>
            </div>

            {/* Pickup Location */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Location in Bangalore</label>
              <input
                type="text"
                value={formData.pickupLocation}
                onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                className="input"
                placeholder="Enter specific pickup address (e.g., Koramangala, Airport, etc.)"
              />
            </div>

            {/* Vehicle Features Info */}
            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Our Tempo Traveller Features:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 mb-4">
                <div>✓ AC/Non-AC Options</div>
                <div>✓ Comfortable Seating</div>
                <div>✓ Music System</div>
                <div>✓ Charging Points</div>
                <div>✓ Luggage Space</div>
                <div>✓ First Aid Kit</div>
                <div>✓ GPS Tracking</div>
                <div>✓ 24/7 Support</div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <h4 className="font-semibold text-yellow-800 mb-1">Pricing Information:</h4>
                <div className="text-sm text-yellow-700 space-y-1">
                  <div>• Same charges for both One Way and Round Trip</div>
                  <div>• Toll charges are additional and will be collected separately</div>
                  <div>• Driver allowance included in the package</div>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests or Requirements</label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                className="input h-24 resize-none"
                placeholder="Any specific requirements like child seats, wheelchair accessibility, stops, etc."
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="btn btn-primary text-lg px-12 py-4 shadow-2xl transform hover:scale-105 transition-transform"
              >
                Request Tempo Traveller Booking
              </button>
              <p className="text-gray-600 text-sm mt-3">
                We'll contact you within 30 minutes with availability and details
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
