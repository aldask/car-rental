import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Booking from "../components/Booking";
import RentalFleet from "../components/RentalFleet";
import Banner from "../components/Banner"
import WhyUs from "../components/WhyUs";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Booking />
      <RentalFleet />
    </>
  );
}

export default HomePage;