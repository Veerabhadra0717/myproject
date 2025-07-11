"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { PlayCircleIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export default function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<any>(null)

  const videos = [
    {
      id: 1,
      title: "Kerala Backwaters",
      thumbnail:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/6N4gEJ_ED98",
      duration: "3:45",
      description: "Experience the serene beauty of Kerala's backwaters",
    },
    {
      id: 2,
      title: "Rajasthan Heritage",
      thumbnail:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/Uj7WKx22zPE",
      duration: "4:20",
      description: "Discover the royal heritage of Rajasthan",
    },
    {
      id: 3,
      title: "Himalayan Adventure",
      thumbnail:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/YqDmp1VBwHs",
      duration: "5:15",
      description: "Adventure in the mighty Himalayas",
    },
  ]

  const openVideo = (video: any) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience India Through Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch real travelers share their incredible journeys across India and get inspired for your next adventure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => openVideo(video)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-4 group-hover:bg-white transition-colors duration-300">
                    <PlayCircleIcon className="h-12 w-12 text-primary-600" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {isModalOpen && selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>

              <div className="aspect-video">
                <iframe
                  src={selectedVideo.videoUrl}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
