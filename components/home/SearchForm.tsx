"use client"
import { useState } from "react"
import type React from "react"
import { motion } from "framer-motion"
import { MagnifyingGlassIcon, MapPinIcon, CalendarDaysIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"
import DestinationMap from "@/components/common/DestinationMap"

export default function SearchForm() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("packages")
  const [showMap, setShowMap] = useState(false)
  const [searchData, setSearchData] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    budget: "any",
    coordinates: null as { lat: number; lng: number } | null,
  })

  const tabs = [
    { id: "packages", label: "Travel Packages", icon: "🎒" },
    { id: "hotels", label: "Hotels", icon: "🏨" },
    { id: "flights", label: "Flights", icon: "✈️" },
    { id: "experiences", label: "Experiences", icon: "🎯" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams({
      type: activeTab,
      destination: searchData.destination,
      checkIn: searchData.checkIn,
      checkOut: searchData.checkOut,
      guests: searchData.guests.toString(),
      budget: searchData.budget,
    })
    if (searchData.coordinates) {
      params.append("lat", searchData.coordinates.lat.toString())
      params.append("lng", searchData.coordinates.lng.toString())
    }
    router.push(`/search?${params.toString()}`)
  }

  const handleDestinationSelect = (destination: string, coordinates: { lat: number; lng: number }) => {
    setSearchData({
      ...searchData,
      destination,
      coordinates,
    })
    setShowMap(false)
  }

  return (
    <section className="relative -mt-32 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "text-primary-600 border-b-2 border-primary-600 bg-primary-50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Destination */}
              <div className="lg:col-span-2 relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPinIcon className="h-4 w-4 inline mr-1" />
                  Destination in India
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search destinations in India..."
                    value={searchData.destination}
                    onChange={(e) => setSearchData({ ...searchData, destination: e.target.value })}
                    className="input pr-20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowMap(!showMap)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    📍 Map
                  </button>
                </div>
                {showMap && (
                  <div className="absolute top-full left-0 right-0 z-50 mt-2">
                    <DestinationMap onDestinationSelect={handleDestinationSelect} />
                  </div>
                )}
              </div>

              {/* Check-in Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <CalendarDaysIcon className="h-4 w-4 inline mr-1" />
                  Check-in
                </label>
                <input
                  type="date"
                  value={searchData.checkIn}
                  onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                  className="input"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              {/* Check-out Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <CalendarDaysIcon className="h-4 w-4 inline mr-1" />
                  Check-out
                </label>
                <input
                  type="date"
                  value={searchData.checkOut}
                  onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                  className="input"
                  min={searchData.checkIn || new Date().toISOString().split("T")[0]}
                />
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <UserGroupIcon className="h-4 w-4 inline mr-1" />
                  Guests
                </label>
                <select
                  value={searchData.guests}
                  onChange={(e) => setSearchData({ ...searchData, guests: Number.parseInt(e.target.value) })}
                  className="input"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} Guest{num > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Budget Range */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range (INR)</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: "any", label: "Any Budget" },
                  { value: "budget", label: "Budget (₹5,000-₹15,000)" },
                  { value: "mid", label: "Mid-range (₹15,000-₹40,000)" },
                  { value: "luxury", label: "Luxury (₹40,000+)" },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setSearchData({ ...searchData, budget: option.value })}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      searchData.budget === option.value
                        ? "bg-primary-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full btn btn-primary flex items-center justify-center space-x-2 py-4 text-lg"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
                <span>Search {tabs.find((tab) => tab.id === activeTab)?.label}</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
