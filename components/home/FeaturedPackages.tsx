"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { StarIcon, ClockIcon, UserGroupIcon } from "@heroicons/react/24/outline"

export default function FeaturedPackages() {
  const packages = [
    {
      id: 1,
      title: "Golden Triangle Tour",
      destinations: "Delhi - Agra - Jaipur",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 25000,
      originalPrice: 30000,
      duration: 6,
      rating: 4.9,
      reviews: 234,
      maxGuests: 4,
      description: "Experience India's most iconic destinations including the magnificent Taj Mahal.",
      highlights: ["Taj Mahal visit", "Red Fort Delhi", "Amber Fort Jaipur", "Local cuisine tours"],
    },
    {
      id: 2,
      title: "Kerala Backwater Experience",
      destinations: "Kochi - Alleppey - Munnar",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 22000,
      originalPrice: 28000,
      duration: 5,
      rating: 4.8,
      reviews: 189,
      maxGuests: 2,
      description: "Cruise through serene backwaters and explore lush tea plantations in God's Own Country.",
      highlights: ["Houseboat stay", "Tea plantation visit", "Spice gardens", "Ayurvedic treatments"],
    },
    {
      id: 3,
      title: "Himalayan Adventure",
      destinations: "Manali - Leh - Ladakh",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 45000,
      originalPrice: 55000,
      duration: 10,
      rating: 4.9,
      reviews: 156,
      maxGuests: 6,
      description: "High altitude adventure through the world's highest motorable roads and pristine landscapes.",
      highlights: ["Khardung La Pass", "Pangong Lake", "Nubra Valley", "Buddhist monasteries"],
    },
    {
      id: 4,
      title: "Rajasthan Royal Heritage",
      destinations: "Jaipur - Udaipur - Jodhpur - Jaisalmer",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 35000,
      originalPrice: 42000,
      duration: 8,
      rating: 4.7,
      reviews: 298,
      maxGuests: 4,
      description: "Immerse in royal heritage with magnificent palaces, forts, and desert experiences.",
      highlights: ["Palace stays", "Camel safari", "Folk performances", "Desert camping"],
    },
    {
      id: 5,
      title: "Goa Beach Paradise",
      destinations: "North Goa - South Goa",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 18000,
      originalPrice: 23000,
      duration: 4,
      rating: 4.6,
      reviews: 445,
      maxGuests: 2,
      description: "Relax on pristine beaches and explore Portuguese colonial heritage.",
      highlights: ["Beach activities", "Water sports", "Portuguese churches", "Local seafood"],
    },
    {
      id: 6,
      title: "South India Temple Trail",
      destinations: "Chennai - Madurai - Kanyakumari - Trivandrum",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 28000,
      originalPrice: 35000,
      duration: 7,
      rating: 4.8,
      reviews: 167,
      maxGuests: 4,
      description: "Explore ancient temples and rich cultural heritage of South India.",
      highlights: ["Meenakshi Temple", "Sunrise at Kanyakumari", "Classical dance shows", "Temple architecture"],
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured India Travel Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully crafted journeys to showcase the best of India's diversity and heritage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {pkg.originalPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                    Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                    <span className="text-sm text-gray-500">({pkg.reviews})</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{pkg.destinations}</p>

                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{pkg.description}</p>

                {/* Package Details */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{pkg.duration} days</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <UserGroupIcon className="h-4 w-4" />
                    <span>Max {pkg.maxGuests}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <span key={idx} className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <span className="text-xs text-gray-500">+{pkg.highlights.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary-600">₹{pkg.price.toLocaleString()}</span>
                      {pkg.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{pkg.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <span className="text-gray-500 text-sm">per person</span>
                  </div>

                  <Link href={`/packages/${pkg.id}`} className="btn btn-primary text-sm px-4 py-2">
                    Book Now
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
          <Link href="/packages" className="btn btn-outline">
            View All India Packages
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
