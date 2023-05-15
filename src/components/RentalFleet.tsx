import "../styles/RentalFleet/rental-fleet-style.css";
import { useState } from "react";
import { cars } from "../Data/cars";

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
      <section className="rental-fleet">
        <div className="container">
          <div className="rental-fleet__container">
            <div className="rental-fleet__text">
              <h2>Our Rental Fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip.
              </p>
            </div>
            <div className="rental-fleet__car-selections">
              <div className="rental-fleet__car-selection-buttons">
                {cars.map((car) => (
                  <button
                    key={car.label}
                    value={car.label}
                    className={
                      selectedFleetCar.label === car.label ? "rental-fleet__pressed-car" : ""
                    }
                    onClick={handleCarFleet}>{car.label}
                    </button>
                ))}
              </div>
              <div className="rental-fleet__car-info">
                <div className="rental-fleet__car-image">
                  <img
                    src={selectedFleetCarImg}
                    alt="chosen-rental-fleet__car-imageture"
                  ></img>
                </div>
                <div className="rental-fleet__car-details">
                  <p className="rental-fleet__car-price">Price:&nbsp;
                    <span className="strong">{selectedCarPrice}€</span>/day</p>
                  <div className="rental-rental-fleet__car-details-row">
                    <div className="rental-rental-fleet__car-details-label">Manufacturer</div>
                    <div className="rental-rental-fleet__car-details-value">{selectedCarManufaturer}</div>
                  </div>
                  <div className="rental-rental-fleet__car-details-row">
                    <div className="rental-rental-fleet__car-details-label">Model</div>
                    <div className="rental-rental-fleet__car-details-value">{selectedCarModel}</div>
                  </div>
                  <div className="rental-rental-fleet__car-details-row">
                    <div className="rental-rental-fleet__car-details-label">Year</div>
                    <div className="rental-rental-fleet__car-details-value">{selectedCarYear}</div>
                  </div>
                  <div className="rental-rental-fleet__car-details-row">
                    <div className="rental-rental-fleet__car-details-label">Doors</div>
                    <div className="rental-rental-fleet__car-details-value">{selectedCarDoors}</div>
                  </div>
                  <div className="rental-rental-fleet__car-details-row">
                    <div className="rental-rental-fleet__car-details-label">AC</div>
                    <div className="rental-rental-fleet__car-details-value">{selectedCarAC}</div>
                  </div>
                  <div className="rental-rental-fleet__car-details-row">
                    <div className="rental-rental-fleet__car-details-label">Transmission</div>
                    <div className="rental-rental-fleet__car-details-value">{selectedCarTransmission}</div>
                  </div>
                  <div className="rental-rental-fleet__car-details-row">
                    <div className="rental-rental-fleet__car-details-label">Fuel</div>
                    <div className="rental-rental-fleet__car-details-value">
                      {selectedCarFuel}
                    </div>
                  </div>
                  <button className="rental-fleet__reserve-button">
                    <a href="#book">Reserve</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RentalFleet;