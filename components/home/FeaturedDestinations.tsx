"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { StarIcon, MapPinIcon } from "@heroicons/react/24/solid"

export default function FeaturedDestinations() {
  const destinations = [
    {
      id: 1,
      name: "Kashmir",
      state: "Jammu & Kashmir",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      packages: 15,
      priceFrom: 25000,
      description: "Paradise on Earth with stunning valleys and lakes",
    },
    {
      id: 2,
      name: "Goa",
      state: "Goa",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      packages: 25,
      priceFrom: 15000,
      description: "Golden beaches and Portuguese heritage",
    },
    {
      id: 3,
      name: "Kerala Backwaters",
      state: "Kerala",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      packages: 18,
      priceFrom: 20000,
      description: "Serene backwaters and lush greenery",
    },
    {
      id: 4,
      name: "Rajasthan",
      state: "Rajasthan",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      packages: 30,
      priceFrom: 18000,
      description: "Royal palaces and desert landscapes",
    },
    {
      id: 5,
      name: "Himachal Pradesh",
      state: "Himachal Pradesh",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      packages: 22,
      priceFrom: 16000,
      description: "Snow-capped mountains and hill stations",
    },
    {
      id: 6,
      name: "Ladakh",
      state: "Ladakh",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      packages: 12,
      priceFrom: 35000,
      description: "High altitude desert and Buddhist culture",
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Destinations in India</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore India's most captivating destinations, from the Himalayas to the tropical beaches
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href={`/destinations/${destination.id}`}>
                <div className="card group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <StarIcon className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {destination.name}
                      </h3>
                      <div className="flex items-center text-gray-500">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">{destination.state}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{destination.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary-600">
                          ₹{destination.priceFrom.toLocaleString()}
                        </span>
                        <span className="text-gray-500 text-sm ml-1">from</span>
                      </div>
                      <div className="text-sm text-gray-500">{destination.packages} packages</div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/destinations" className="btn btn-outline">
            Explore All Indian Destinations
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
