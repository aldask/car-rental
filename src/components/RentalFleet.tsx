function RentalFleet() {
  return (
    <>
    <section className="fleetContainer">
  <div className="containerTexts">
    <h1>Our Rental Fleet</h1>
    <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip.</p>
  </div>
  <div className="carSelections">
    <div className="carsSelect">
      <button>Audi RS6</button>
      <button>Bugatti Chiron</button>
      <button>BMW M5</button>
      <button>VW Tiguan</button>
    </div>
    <div className="carPic">
      <img src="carPic" alt="chosen-car-picture"></img>
    </div>
    <div className="carDetails">
      <p className="price">Price: 45€/day</p>
      <div className="row">
        <div className="label">Manufacturer</div>
        <div className="divide">|</div>
        <div className="value">BMW</div>
      </div>
      <div className="row">
        <div className="label">Model</div>
        <div className="divide">|</div>
        <div className="value">3 Series</div>
      </div>
      <div className="row">
        <div className="label">Year</div>
        <div className="divide">|</div>
        <div className="value">2012</div>
      </div>
      <div className="row">
        <div className="label">Doors</div>
        <div className="divide">|</div>
        <div className="value">4/5</div>
      </div>
      <div className="row">
        <div className="label">AC</div>
        <div className="divide">|</div>
        <div className="value">Yes</div>
      </div>
      <div className="row">
        <div className="label">Transmission</div>
        <div className="divide">|</div>
        <div className="value">Automatic</div>
      </div>
      <div className="row">
        <div className="label">Fuel</div>
        <div className="divide">|</div>
        <div className="value">Gasoline</div>
      </div>
      <button className="reserveButton">Reserve</button>
    </div>
  </div>
</section>
    </>
  );
}

export default RentalFleet;