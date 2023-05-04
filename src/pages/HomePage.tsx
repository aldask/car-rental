import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Booking from "../components/Booking";
import RentalFleet from "../components/RentalFleet";
import Banner from "../components/Banner";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import DownloadApp from "../components/DownloadApp";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Booking />
      <RentalFleet />
      <Banner />
      <Faq />
    </>
  );
}

export default HomePage;