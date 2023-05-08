import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Booking from "../components/Booking";
import RentalFleet from "../components/RentalFleet";
import Divider from "../components/Divider"
import Banner from "../components/Banner";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Booking />
      <RentalFleet />
      <Divider />
      <Banner />
      <Reviews />
      <Faq />
      <DownloadApp />
      <Footer />
    </>
  );
}

export default HomePage;