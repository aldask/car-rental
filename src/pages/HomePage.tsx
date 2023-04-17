import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Booking from "../components/Booking";
import RentalFleet from "../components/RentalFleet";
import Banner from "../components/Banner";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Booking />
      <RentalFleet />
      <Banner />
    </>
  );
}

export default HomePage;