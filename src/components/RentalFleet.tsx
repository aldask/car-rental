import { useState } from "react";
import { cars, Car } from '../Data/cars';

// Set car model and img and all other things for specific car

function RentalFleet() {
  const [selectedFleetCar, setSelectedFleetCar] = useState(cars[0]);
  const [selectedCarPrice, setSelectedCarPrice] = useState(selectedFleetCar.price);
  const [selectedFleetCarImg, setSelectedFleetCarImg] = useState(selectedFleetCar.img);
  const [selectedCarManufaturer, setSelectedCarManufaturer] = useState(selectedFleetCar.manufacturer);
  const [selectedCarModel, setSelectedCarModel] = useState(selectedFleetCar.model);
  const [selectedCarYear, setSelectedCarYear] = useState(selectedFleetCar.year);
  const [selectedCarDoors, setSelectedCarDoors] = useState(selectedFleetCar.doors);
  const [selectedCarAC, setSelectedCarAC] = useState(selectedFleetCar.ac);
  const [selectedCarTransmission, setSelectedCarTransmission] = useState(selectedFleetCar.transmission);
  const [selectedCarFuel, setSelectedCarFuel] = useState(selectedFleetCar.fuel);

  const handleCarFleet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const selectedCar = cars.find((car) => car.label === e.currentTarget.value);
    if (selectedCar) {
      setSelectedFleetCar(selectedCar);
      setSelectedCarPrice(selectedCar.price);
      setSelectedFleetCarImg(selectedCar.img);
      setSelectedCarManufaturer(selectedCar.manufacturer);
      setSelectedCarModel(selectedCar.model);
      setSelectedCarYear(selectedCar.year);
      setSelectedCarDoors(selectedCar.doors);
      setSelectedCarAC(selectedCar.ac);
      setSelectedCarTransmission(selectedCar.transmission);
      setSelectedCarFuel(selectedCar.fuel);
    }
  };

  return (
    <>
      <section className="fleet">
        <div className="container">
          <div className="fleetContainer">
            <div className="fleetTxt">
              <h1>Our Rental Fleet</h1>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip.
              </p>
            </div>
            <div className="carSelections">
              <div className="carsSelect">
                {cars.map((car) => (
                  <button
                    key={car.label}
                    value={car.label}
                    className={selectedFleetCar.label === car.label ? "pressedCar" : ""}
                    onClick={handleCarFleet}
                  >
                    {car.label}
                  </button>
                ))}
              </div>
              <div className="carPic">
                <img src={selectedFleetCarImg} alt="chosen-car-picture"></img>
              </div>
              <div className="carDetails">
                <p className="price">Price:&nbsp;<span className="strong">{selectedCarPrice}€</span>/day</p>
                <div className="row">
                  <div className="label">Manufacturer</div>
                  <div className="value">{selectedCarManufaturer}</div>
                </div>
                <div className="row">
                  <div className="label">Model</div>
                  <div className="value">{selectedCarModel}</div>
                </div>
                <div className="row">
                  <div className="label">Year</div>
                  <div className="value">{selectedCarYear}</div>
                </div>
                <div className="row">
                  <div className="label">Doors</div>
                  <div className="value">{selectedCarDoors}</div>
                </div>
                <div className="row">
                  <div className="label">AC</div>
                  <div className="value">{selectedCarAC}</div>
                </div>
                <div className="row">
                  <div className="label">Transmission</div>
                  <div className="value">{selectedCarTransmission}</div>
                </div>
                <div className="row">
                  <div className="label">Fuel</div>
                  <div className="value">{selectedCarFuel}</div>
                </div>
                <button className="reserveButton">
                  <a href="#book">Reserve</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RentalFleet;