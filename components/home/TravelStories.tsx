"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { StarIcon, TruckIcon } from "@heroicons/react/24/solid"
import { CalendarDaysIcon } from "@heroicons/react/24/outline"

export default function TravelStories() {
  const stories = [
    {
      id: 1,
      traveler: "Sharma Family",
      location: "Koramangala, Bangalore",
      destination: "Goa Family Trip",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      duration: "4 days",
      vehicle: "12 Seater Tempo Traveller",
      tripType: "Round Trip",
      story:
        "Booked a 12-seater tempo traveller for our family of 10. The vehicle was spotless, AC worked perfectly, and our driver Kumar was excellent. Great value with same charges for round trip. Only paid extra for tolls which was very reasonable!",
      highlights: ["Clean vehicle", "Experienced driver", "Transparent pricing", "Great service"],
    },
    {
      id: 2,
      traveler: "Tech Team Outing",
      location: "Electronic City, Bangalore",
      destination: "Coorg Corporate Trip",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      duration: "3 days",
      vehicle: "17 Seater Tempo Traveller",
      tripType: "One Way",
      story:
        "Perfect for our team outing! The 17-seater was spacious, had charging points for everyone's devices, and the music system kept us entertained. Driver was punctual and professional. Made our corporate trip hassle-free.",
      highlights: ["Spacious seating", "Charging points", "Music system", "Professional service"],
    },
    {
      id: 3,
      traveler: "College Friends Group",
      location: "Jayanagar, Bangalore",
      destination: "Kerala Backwaters",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      duration: "5 days",
      vehicle: "15 Seater Tempo Traveller",
      tripType: "Round Trip",
      story:
        "Amazing experience with WanderLust! We were 14 friends and the 15-seater was perfect. The vehicle was well-maintained, driver was friendly and knew the routes well. Kerala trip became even more special because of the comfortable journey.",
      highlights: ["Perfect group size", "Well-maintained vehicle", "Friendly driver", "Smooth journey"],
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Happy Travelers from Bangalore</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers say about their tempo traveller experiences. Real stories from real group travels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image src={story.image || "/placeholder.svg"} alt={story.destination} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <StarIcon className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-medium">{story.rating}.0</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Traveler Info */}
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={story.avatar || "/placeholder.svg"}
                      alt={story.traveler}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.traveler}</h4>
                    <p className="text-sm text-gray-600">{story.location}</p>
                  </div>
                </div>

                {/* Trip Details */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{story.destination}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <CalendarDaysIcon className="h-4 w-4" />
                      <span>{story.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TruckIcon className="h-4 w-4" />
                      <span>{story.vehicle}</span>
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">{story.tripType}</div>
                  </div>
                </div>

                {/* Story */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{story.story}"</p>

                {/* Highlights */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Experience Highlights:</h5>
                  <div className="flex flex-wrap gap-1">
                    {story.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full btn btn-outline text-sm py-2">Book Similar Trip</button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2,000+</div>
              <div className="text-gray-600">Happy Groups Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Destinations Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
