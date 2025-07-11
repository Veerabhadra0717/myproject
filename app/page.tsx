import Hero from "@/components/home/Hero"
import CustomTravelForm from "@/components/home/CustomTravelForm"
import PopularRoutes from "@/components/home/PopularRoutes"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import TravelStories from "@/components/home/TravelStories"
import Newsletter from "@/components/home/Newsletter"
import PricingInfo from "@/components/home/PricingInfo"

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <CustomTravelForm />
      <PopularRoutes />
      <WhyChooseUs />
      <PricingInfo />
      <TravelStories />
      <Newsletter />
    </div>
  )
}
