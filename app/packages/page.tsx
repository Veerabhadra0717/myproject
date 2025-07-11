"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ClockIcon, UserGroupIcon, FunnelIcon } from "@heroicons/react/24/outline"
import { StarIcon as StarSolidIcon } from "@heroicons/react/24/solid"

export default function PackagesPage() {
  const [packages, setPackages] = useState([])
  const [filteredPackages, setFilteredPackages] = useState([])
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: "all",
    duration: "all",
    rating: "all",
  })
  const [sortBy, setSortBy] = useState("popular")
  const [showFilters, setShowFilters] = useState(false)

  // Mock packages data
  const mockPackages = [
    {
      id: 1,
      title: "Romantic Paris Getaway",
      destination: "Paris, France",
      image: "/placeholder.svg?height=400&width=600",
      price: 1899,
      originalPrice: 2299,
      duration: 5,
      rating: 4.9,
      reviews: 234,
      maxGuests: 2,
      category: "romantic",
      description: "Experience the magic of Paris with your loved one in this carefully crafted romantic escape.",
      highlights: ["Eiffel Tower tour", "Seine cruise", "Louvre Museum", "Michelin dining"],
      featured: true,
    },
    {
      id: 2,
      title: "Tropical Bali Adventure",
      destination: "Bali, Indonesia",
      image: "/placeholder.svg?height=400&width=600",
      price: 1299,
      originalPrice: 1599,
      duration: 7,
      rating: 4.8,
      reviews: 189,
      maxGuests: 4,
      category: "adventure",
      description: "Discover the beauty of Bali with temples, beaches, and cultural experiences.",
      highlights: ["Temple tours", "Beach activities", "Cultural shows", "Spa treatments"],
    },
    {
      id: 3,
      title: "Swiss Alps Expedition",
      destination: "Switzerland",
      image: "/placeholder.svg?height=400&width=600",
      price: 2499,
      originalPrice: 2899,
      duration: 8,
      rating: 4.9,
      reviews: 156,
      maxGuests: 6,
      category: "adventure",
      description: "Adventure through the stunning Swiss Alps with hiking, skiing, and mountain views.",
      highlights: ["Mountain hiking", "Scenic railways", "Alpine villages", "Adventure sports"],
    },
    {
      id: 4,
      title: "Tokyo Culture Experience",
      destination: "Tokyo, Japan",
      image: "/placeholder.svg?height=400&width=600",
      price: 1799,
      originalPrice: 2199,
      duration: 6,
      rating: 4.7,
      reviews: 298,
      maxGuests: 3,
      category: "cultural",
      description: "Immerse yourself in Japanese culture with traditional and modern Tokyo experiences.",
      highlights: ["Temple visits", "Sushi making", "City tours", "Traditional shows"],
    },
    {
      id: 5,
      title: "African Safari Adventure",
      destination: "Kenya & Tanzania",
      image: "/placeholder.svg?height=400&width=600",
      price: 3299,
      originalPrice: 3799,
      duration: 10,
      rating: 4.9,
      reviews: 127,
      maxGuests: 8,
      category: "wildlife",
      description: "Witness the Big Five and experience the thrill of an authentic African safari.",
      highlights: ["Game drives", "Masai culture", "Serengeti", "Luxury lodges"],
    },
    {
      id: 6,
      title: "Mediterranean Cruise",
      destination: "Mediterranean Sea",
      image: "/placeholder.svg?height=400&width=600",
      price: 2199,
      originalPrice: 2699,
      duration: 12,
      rating: 4.6,
      reviews: 445,
      maxGuests: 2,
      category: "cruise",
      description: "Sail through the Mediterranean visiting multiple countries and historic ports.",
      highlights: ["Multiple destinations", "Luxury cruise", "Shore excursions", "Fine dining"],
    },
  ]

  useEffect(() => {
    setPackages(mockPackages)
    setFilteredPackages(mockPackages)
  }, [])

  useEffect(() => {
    let filtered = [...packages]

    // Apply filters
    if (filters.category !== "all") {
      filtered = filtered.filter((pkg) => pkg.category === filters.category)
    }

    if (filters.priceRange !== "all") {
      switch (filters.priceRange) {
        case "budget":
          filtered = filtered.filter((pkg) => pkg.price < 1500)
          break
        case "mid":
          filtered = filtered.filter((pkg) => pkg.price >= 1500 && pkg.price < 2500)
          break
        case "luxury":
          filtered = filtered.filter((pkg) => pkg.price >= 2500)
          break
      }
    }

    if (filters.duration !== "all") {
      switch (filters.duration) {
        case "short":
          filtered = filtered.filter((pkg) => pkg.duration <= 5)
          break
        case "medium":
          filtered = filtered.filter((pkg) => pkg.duration > 5 && pkg.duration <= 10)
          break
        case "long":
          filtered = filtered.filter((pkg) => pkg.duration > 10)
          break
      }
    }

    if (filters.rating !== "all") {
      const minRating = Number.parseFloat(filters.rating)
      filtered = filtered.filter((pkg) => pkg.rating >= minRating)
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "duration":
        filtered.sort((a, b) => a.duration - b.duration)
        break
      default:
        // Popular (featured first, then by reviews)
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return b.reviews - a.reviews
        })
    }

    setFilteredPackages(filtered)
  }, [packages, filters, sortBy])

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "romantic", label: "Romantic" },
    { value: "adventure", label: "Adventure" },
    { value: "cultural", label: "Cultural" },
    { value: "wildlife", label: "Wildlife" },
    { value: "cruise", label: "Cruise" },
    { value: "family", label: "Family" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Travel Packages</h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Discover our carefully curated travel experiences designed to create unforgettable memories
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden btn btn-outline flex items-center space-x-2"
            >
              <FunnelIcon className="h-5 w-5" />
              <span>Filters</span>
            </button>
            <div className="text-gray-600">{filteredPackages.length} packages found</div>
          </div>

          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="duration">Duration</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Under $1,500</option>
                  <option value="mid">$1,500 - $2,500</option>
                  <option value="luxury">Over $2,500</option>
                </select>
              </div>

              {/* Duration Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <select
                  value={filters.duration}
                  onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">Any Duration</option>
                  <option value="short">1-5 days</option>
                  <option value="medium">6-10 days</option>
                  <option value="long">11+ days</option>
                </select>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                <select
                  value={filters.rating}
                  onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">Any Rating</option>
                  <option value="4.5">4.5+ Stars</option>
                  <option value="4.0">4.0+ Stars</option>
                  <option value="3.5">3.5+ Stars</option>
                </select>
              </div>

              <button
                onClick={() => setFilters({ category: "all", priceRange: "all", duration: "all", rating: "all" })}
                className="w-full text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Packages Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {pkg.originalPrice && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                        Save ${pkg.originalPrice - pkg.price}
                      </div>
                    )}
                    {pkg.featured && (
                      <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {pkg.title}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <StarSolidIcon className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-medium">{pkg.rating}</span>
                        <span className="text-sm text-gray-500">({pkg.reviews})</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-3">{pkg.destination}</p>

                    <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-2">{pkg.description}</p>

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
                        {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                          <span key={idx} className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs">
                            {highlight}
                          </span>
                        ))}
                        {pkg.highlights.length > 2 && (
                          <span className="text-xs text-gray-500">+{pkg.highlights.length - 2} more</span>
                        )}
                      </div>
                    </div>

                    {/* Pricing and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-primary-600">${pkg.price}</span>
                          {pkg.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">${pkg.originalPrice}</span>
                          )}
                        </div>
                        <span className="text-gray-500 text-sm">per person</span>
                      </div>

                      <Link href={`/packages/${pkg.id}`} className="btn btn-primary text-sm px-4 py-2">
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredPackages.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-4">No packages found</div>
                <p className="text-gray-400 mb-6">Try adjusting your filters to see more results</p>
                <button
                  onClick={() => setFilters({ category: "all", priceRange: "all", duration: "all", rating: "all" })}
                  className="btn btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
