import mainCar from '../images/mainCar.png'
function HeroSection() {
  return (
  <>
    <section className="heroSection">
      <div className="heroSide1">
        <h1>Welcome to <span className='bold'>Car<span className='bold blue'>O</span></span></h1>
        <p>The go-to car rental service for all your transportation needs. 
          Affordable prices, excellent customer service, and a wide selection of 
          reliable vehicles to choose from. Book your rental today and experience convenience!</p>
        <button className='tripPlan'>Book Ride! ✓</button>
      </div>
      <div className="heroSide2">
        <img src={mainCar} alt="mainCar" />
      </div>
    </section>
  </>
  );
}

export default HeroSection;