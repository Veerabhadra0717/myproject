import Link from "next/link"
import { TruckIcon } from "@heroicons/react/24/solid"
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, MailIcon, PhoneIcon } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const popularRoutes = ["Goa", "Kerala", "Coorg", "Ooty", "Hampi", "Pondicherry", "Chikmagalur", "Wayanad"]

  const services = [
    { name: "9 Seater Tempo Traveller", href: "/9-seater" },
    { name: "12 Seater Tempo Traveller", href: "/12-seater" },
    { name: "15 Seater Tempo Traveller", href: "/15-seater" },
    { name: "17 Seater Tempo Traveller", href: "/17-seater" },
    { name: "Corporate Bookings", href: "/corporate" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <TruckIcon className="h-8 w-8 text-blue-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
              <div>
                <span className="text-2xl font-bold">WanderLust</span>
                <div className="text-sm text-gray-400">Tempo Traveller Bangalore</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Premium tempo traveller rentals from Bangalore. Comfortable group travel to any destination in India with
              experienced drivers and well-maintained vehicles.
            </p>
            <div className="flex space-x-4">
              <FacebookIcon className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <TwitterIcon className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <InstagramIcon className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <YoutubeIcon className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-300 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Routes</h3>
            <ul className="space-y-2">
              {popularRoutes.map((route) => (
                <li key={route}>
                  <Link
                    href={`/route/bangalore-to-${route.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Bangalore to {route}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-blue-400" />
                <div>
                  <div className="text-gray-300">+91 98765 43210</div>
                  <div className="text-gray-300">+91 87654 32109</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MailIcon className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">bookings@wanderlusttt.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <TruckIcon className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Koramangala, Bangalore
                  <br />
                  Karnataka 560034
                  <br />
                  <span className="text-sm text-gray-400">Available 24/7 for bookings</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} WanderLust Tempo Traveller Bangalore. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-white text-sm transition-colors">
                24/7 Support
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              Serving Bangalore and surrounding areas • All vehicles sanitized • GPS tracking • 24/7 roadside assistance
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
