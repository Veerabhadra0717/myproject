"use client"
import { motion } from "framer-motion"
import { InformationCircleIcon, CurrencyRupeeIcon, TruckIcon } from "@heroicons/react/24/outline"

export default function PricingInfo() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <InformationCircleIcon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing Policy</h2>
          <p className="text-lg text-gray-600">
            Simple, honest pricing with no hidden charges. Know exactly what you're paying for.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <TruckIcon className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Trip Charges</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="font-medium text-gray-800">One Way Trip</span>
                <span className="text-blue-600 font-semibold">Same Rate</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="font-medium text-gray-800">Round Trip</span>
                <span className="text-blue-600 font-semibold">Same Rate</span>
              </div>
              <div className="text-sm text-gray-600 mt-3">
                Whether you choose one way or round trip, our charges remain the same. This gives you flexibility in
                your travel plans.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <CurrencyRupeeIcon className="h-8 w-8 text-orange-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Additional Charges</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <span className="font-medium text-gray-800">Toll Charges</span>
                <span className="text-orange-600 font-semibold">Actual Cost</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-medium text-gray-800">Driver Allowance</span>
                <span className="text-green-600 font-semibold">Included</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-medium text-gray-800">Fuel Charges</span>
                <span className="text-green-600 font-semibold">Included</span>
              </div>
              <div className="text-sm text-gray-600 mt-3">
                Only toll charges are additional at actual cost. Everything else is included in our transparent pricing.
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center"
        >
          <h3 className="text-xl font-bold mb-3">What's Included in Our Package</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>✓ Vehicle Rental</div>
            <div>✓ Experienced Driver</div>
            <div>✓ Fuel Charges</div>
            <div>✓ Driver Allowance</div>
            <div>✓ Vehicle Insurance</div>
            <div>✓ 24/7 Support</div>
            <div>✓ GPS Tracking</div>
            <div>✓ Emergency Assistance</div>
          </div>
          <div className="mt-4 text-blue-100">
            <strong>Note:</strong> Toll charges will be collected separately as per actual highway toll rates
          </div>
        </motion.div>
      </div>
    </section>
  )
}
