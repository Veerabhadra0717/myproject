"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { StarIcon } from "@heroicons/react/24/solid"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      text: "The Golden Triangle tour was absolutely magical! The Taj Mahal at sunrise was breathtaking, and our guide's knowledge of history made every monument come alive. Highly recommend WanderLust India!",
      trip: "Golden Triangle Tour",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Bangalore, Karnataka",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      text: "Kerala backwaters exceeded all expectations! The houseboat experience was serene, and the tea plantation visit in Munnar was incredible. Perfect blend of relaxation and adventure.",
      trip: "Kerala Backwater Experience",
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Ahmedabad, Gujarat",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      text: "Rajasthan royal heritage tour was like living in a fairy tale! The palace stays, camel safari in Jaisalmer, and folk performances made it an unforgettable cultural immersion.",
      trip: "Rajasthan Royal Heritage",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Delhi, NCR",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      text: "The Himalayan adventure to Ladakh was the trip of a lifetime! Crossing Khardung La and camping by Pangong Lake - every moment was pure magic. Excellent organization by the team.",
      trip: "Himalayan Adventure",
    },
    {
      id: 5,
      name: "Meera Reddy",
      location: "Hyderabad, Telangana",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      text: "South India temple trail was spiritually enriching! The architecture of Meenakshi Temple and sunrise at Kanyakumari were highlights. Great cultural insights throughout the journey.",
      trip: "South India Temple Trail",
    },
    {
      id: 6,
      name: "Arjun Nair",
      location: "Kochi, Kerala",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      text: "Goa beach paradise was exactly what we needed! Perfect mix of relaxation and adventure. Water sports, Portuguese heritage sites, and amazing seafood - couldn't ask for more!",
      trip: "Goa Beach Paradise",
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Indian Travelers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from fellow Indians who have explored the incredible diversity of our beautiful country
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Trip Info */}
              <div className="mb-4">
                <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.trip}
                </span>
              </div>

              {/* User Info */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-2xl p-8 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">50,000+</div>
              <div className="text-gray-700">Happy Indian Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">4.8/5</div>
              <div className="text-gray-700">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">1000+</div>
              <div className="text-gray-700">Indian Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">24/7</div>
              <div className="text-gray-700">Customer Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
