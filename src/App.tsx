import FeatureSection from "./components/features-section/FeatureSection"
import FeedbackSection from "./components/feedbacks-section/FeedbackSection"
import Footer from "./components/footer/Footer"
import HeroSection from "./components/hero-section/HeroSection"
import NavBar from "./components/nav-bar/NavBar"
import ServiceSection from "./components/service-section/ServiceSection"

const App = () => {
  return (
    <div className="text-neutral-white text-sm font-secondary">
      <NavBar/>
      <HeroSection/>
      <FeatureSection/>
      <ServiceSection/>
      <FeedbackSection/>
      <Footer/>
    </div>
  )
}

export default App
