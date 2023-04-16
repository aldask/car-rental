import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Booking from "../components/Booking";
import RentalFleet from "../components/RentalFleet";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Booking />
      <RentalFleet />
    </>
  );
}

export default HomePage;