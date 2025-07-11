"use client"
import { useState } from "react"
import { motion } from "framer-motion"

interface DestinationMapProps {
  onDestinationSelect: (destination: string, coordinates: { lat: number; lng: number }) => void
}

export default function DestinationMap({ onDestinationSelect }: DestinationMapProps) {
  const [selectedState, setSelectedState] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const indianDestinations = {
    Rajasthan: [
      { name: "Jaipur", lat: 26.9124, lng: 75.7873, description: "Pink City with palaces and forts" },
      { name: "Udaipur", lat: 24.5854, lng: 73.7125, description: "City of Lakes" },
      { name: "Jodhpur", lat: 26.2389, lng: 73.0243, description: "Blue City" },
      { name: "Jaisalmer", lat: 26.9157, lng: 70.9083, description: "Golden City in Thar Desert" },
      { name: "Pushkar", lat: 26.4899, lng: 74.5511, description: "Holy city with sacred lake" },
    ],
    Kerala: [
      { name: "Munnar", lat: 10.0889, lng: 77.0595, description: "Hill station with tea gardens" },
      { name: "Alleppey", lat: 9.4981, lng: 76.3388, description: "Venice of the East" },
      { name: "Kochi", lat: 9.9312, lng: 76.2673, description: "Queen of Arabian Sea" },
      { name: "Thekkady", lat: 9.5916, lng: 77.1603, description: "Wildlife sanctuary" },
      { name: "Varkala", lat: 8.7379, lng: 76.7163, description: "Cliff beach destination" },
    ],
    "Himachal Pradesh": [
      { name: "Shimla", lat: 31.1048, lng: 77.1734, description: "Queen of Hills" },
      { name: "Manali", lat: 32.2432, lng: 77.1892, description: "Valley of Gods" },
      { name: "Dharamshala", lat: 32.219, lng: 76.3234, description: "Little Lhasa" },
      { name: "Kasol", lat: 32.0102, lng: 77.3147, description: "Mini Israel of India" },
      { name: "Spiti Valley", lat: 32.2396, lng: 78.0313, description: "Cold Desert" },
    ],
    Goa: [
      { name: "North Goa", lat: 15.5937, lng: 73.7877, description: "Beaches and nightlife" },
      { name: "South Goa", lat: 15.2993, lng: 74.124, description: "Peaceful beaches" },
      { name: "Panaji", lat: 15.4909, lng: 73.8278, description: "Capital city" },
      { name: "Old Goa", lat: 15.5007, lng: 73.9114, description: "Portuguese heritage" },
    ],
    Uttarakhand: [
      { name: "Rishikesh", lat: 30.0869, lng: 78.2676, description: "Yoga capital of the world" },
      { name: "Haridwar", lat: 29.9457, lng: 78.1642, description: "Gateway to Gods" },
      { name: "Nainital", lat: 29.3803, lng: 79.4636, description: "Lake district" },
      { name: "Mussoorie", lat: 30.4598, lng: 78.0664, description: "Queen of Hills" },
      { name: "Valley of Flowers", lat: 30.7268, lng: 79.6005, description: "UNESCO World Heritage" },
    ],
    "Tamil Nadu": [
      { name: "Chennai", lat: 13.0827, lng: 80.2707, description: "Detroit of India" },
      { name: "Ooty", lat: 11.4064, lng: 76.6932, description: "Queen of Hill Stations" },
      { name: "Kodaikanal", lat: 10.2381, lng: 77.4892, description: "Princess of Hill Stations" },
      { name: "Mahabalipuram", lat: 12.6269, lng: 80.1927, description: "UNESCO World Heritage" },
      { name: "Rameswaram", lat: 9.2876, lng: 79.3129, description: "Holy pilgrimage site" },
    ],
    Karnataka: [
      { name: "Bangalore", lat: 12.9716, lng: 77.5946, description: "Silicon Valley of India" },
      { name: "Mysore", lat: 12.2958, lng: 76.6394, description: "City of Palaces" },
      { name: "Coorg", lat: 12.3375, lng: 75.8069, description: "Scotland of India" },
      { name: "Hampi", lat: 15.335, lng: 76.46, description: "UNESCO World Heritage" },
      { name: "Gokarna", lat: 14.5492, lng: 74.32, description: "Beach town" },
    ],
    Maharashtra: [
      { name: "Mumbai", lat: 19.076, lng: 72.8777, description: "Financial capital" },
      { name: "Pune", lat: 18.5204, lng: 73.8567, description: "Oxford of the East" },
      { name: "Lonavala", lat: 18.7537, lng: 73.4068, description: "Hill station" },
      { name: "Aurangabad", lat: 19.8762, lng: 75.3433, description: "Gateway to Ajanta & Ellora" },
      { name: "Mahabaleshwar", lat: 17.922, lng: 73.6581, description: "Strawberry capital" },
    ],
  }

  const allDestinations = Object.entries(indianDestinations).flatMap(([state, destinations]) =>
    destinations.map((dest) => ({ ...dest, state })),
  )

  const filteredDestinations = allDestinations.filter(
    (dest) =>
      (selectedState === "" || dest.state === selectedState) &&
      (searchTerm === "" ||
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.state.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-h-96 overflow-y-auto"
    >
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div className="mb-4">
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">All States</option>
          {Object.keys(indianDestinations).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        {filteredDestinations.map((dest, index) => (
          <button
            key={`${dest.state}-${dest.name}`}
            onClick={() => onDestinationSelect(`${dest.name}, ${dest.state}`, { lat: dest.lat, lng: dest.lng })}
            className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100"
          >
            <div className="font-medium text-gray-900">{dest.name}</div>
            <div className="text-sm text-gray-600">{dest.state}</div>
            <div className="text-xs text-gray-500 mt-1">{dest.description}</div>
          </button>
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <div className="text-center py-4 text-gray-500">No destinations found. Try a different search term.</div>
      )}
    </motion.div>
  )
}
