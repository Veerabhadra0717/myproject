"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ClockIcon, TruckIcon } from "@heroicons/react/24/solid"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function PopularRoutes() {
  const routes = [
    {
      id: 1,
      title: "Bangalore to Goa",
      description: "Beach paradise with Portuguese heritage",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3-5 days",
      distance: "560 km",
      driveTime: "10-12 hours",
      highlights: ["Beaches", "Nightlife", "Water Sports", "Heritage Sites"],
      bestFor: "Groups of 9-17 people",
      tripInfo: "Same charges for one way & round trip • Tolls extra",
    },
    {
      id: 2,
      title: "Bangalore to Kerala",
      description: "God's own country with backwaters and hills",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "5-7 days",
      distance: "350 km",
      driveTime: "7-8 hours",
      highlights: ["Backwaters", "Hill Stations", "Spice Gardens", "Ayurveda"],
      bestFor: "Family groups",
      tripInfo: "Same charges for one way & round trip • Tolls extra",
    },
    {
      id: 3,
      title: "Bangalore to Hampi",
      description: "UNESCO World Heritage ruins and history",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2-3 days",
      distance: "340 km",
      driveTime: "6-7 hours",
      highlights: ["Ancient Ruins", "Rock Climbing", "History", "Architecture"],
      bestFor: "History enthusiasts",
      tripInfo: "Same charges for one way & round trip • Tolls extra",
    },
    {
      id: 4,
      title: "Bangalore to Coorg",
      description: "Scotland of India with coffee plantations",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2-4 days",
      distance: "250 km",
      driveTime: "4-5 hours",
      highlights: ["Coffee Estates", "Waterfalls", "Trekking", "Wildlife"],
      bestFor: "Weekend getaways",
      tripInfo: "Same charges for one way & round trip • Tolls extra",
    },
    {
      id: 5,
      title: "Bangalore to Ooty",
      description: "Queen of hill stations with toy train",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3-4 days",
      distance: "270 km",
      driveTime: "5-6 hours",
      highlights: ["Toy Train", "Tea Gardens", "Lake", "Rose Garden"],
      bestFor: "Hill station lovers",
      tripInfo: "Same charges for one way & round trip • Tolls extra",
    },
    {
      id: 6,
      title: "Bangalore to Pondicherry",
      description: "French colonial charm by the sea",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2-3 days",
      distance: "310 km",
      driveTime: "5-6 hours",
      highlights: ["French Quarter", "Beaches", "Auroville", "Cafes"],
      bestFor: "Cultural explorers",
      tripInfo: "Same charges for one way & round trip • Tolls extra",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Tempo Traveller Routes from Bangalore</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most loved destinations for group travel from Bangalore. Perfect for families, friends, and
            corporate outings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={route.image || "/placeholder.svg"}
                  alt={route.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {route.distance} • {route.driveTime}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                      {route.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{route.description}</p>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{route.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TruckIcon className="h-4 w-4" />
                    <span>TT Available</span>
                  </div>
                </div>

                {/* Best For */}
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {route.bestFor}
                  </span>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {route.highlights.slice(0, 3).map((highlight, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                    {route.highlights.length > 3 && (
                      <span className="text-xs text-gray-500">+{route.highlights.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* Trip Info */}
                <div className="mb-4 p-2 bg-yellow-50 rounded-lg">
                  <div className="text-xs text-yellow-700 font-medium">{route.tripInfo}</div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <Link href={`/book-route?route=${route.id}`} className="btn btn-primary w-full text-sm py-2">
                    Book Tempo Traveller
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/routes" className="btn btn-outline text-lg px-8 py-4">
            View All Routes & Book Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
