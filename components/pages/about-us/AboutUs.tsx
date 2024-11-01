import { BgGradient1 } from "@/assets/images"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

export default function AboutUs() {
  return (
    <>
      <div className="w-full px-15" style={{ backgroundImage: `url(${BgGradient1.src})`, backgroundSize: 'cover' }}>
        <Header />
        <HeroSection />
        <CallToAction />
      </div>
      <Footer />
    </>
  )
}