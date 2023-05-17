import React, { useState } from "react";
import "../styles/Booking/booking-style.css";
import { Modal } from "./Modal";
import { cars } from "../Data/cars";
import { cities } from "../Data/cities";

function Booking() {
  // Modal states

  const [modal, setModal] = useState(false);

  // Input states
  const [carModel, setCarModel] = useState("");
  const [pickUpCity, setPickUpCity] = useState("");
  const [dropOffCity, setDropOffCity] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [carImg, setCarImg] = useState("");

  // Messages states
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setSuccessMessage] = useState(false);

  // Set car model and img
  const handleCar = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCar = cars.find((car) => car.label === e.target.value);
    if (selectedCar) {
      setCarModel(selectedCar.label);
      setCarImg(selectedCar.img);
    }
  };

  // Set pick up city
  const handlePickCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPickUpCity(e.target.value);
  };

  // Set drop city
  const handleDropCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDropOffCity(e.target.value);
  };

  // Set pick up date
  const handlePickDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickDate(e.target.value);
  };

  // Set drop off date
  const handleDropDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropDate(e.target.value);
  };

  // Display modal if inputs are filled
  const handleSetModalTrue = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (
      carModel === "" ||
      pickUpCity === "" ||
      pickUpCity === "Select car pick-up location" ||
      dropOffCity === "" ||
      dropOffCity === "Select car drop-off location" ||
      pickDate === "" ||
      dropDate === ""
    ) {
      setShowErrorMessage(true);
    } else {
      setModal(true);
      setShowErrorMessage(false);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <Modal
        setModal={setModal}
        isOpen={modal}
        carModel={carModel}
        carImg={carImg}
        pickUpCity={pickUpCity}
        dropOffCity={dropOffCity}
        pickDate={pickDate}
        dropDate={dropDate}
        setSuccessMessage={setSuccessMessage}
      />
      <section className="booking" id="book">
        <div className="container">
          <div className="booking__cars">
            <h3 className="booking__title">Book a Car</h3>
            {showErrorMessage && (
              <p className="booking__message--fail">
                All fields needs to be selected
              </p>
            )}
            {showSuccessMessage && (
              <p className="booking__message--success">
                Check your email to confirm the reservation!
              </p>
            )}
            <div className="booking__form">
              <div className="booking__select">
                <label>
                  Car Model <span className="red">*</span>
                </label>
                <select value={carModel} onChange={handleCar}>
                  <option>Select car model</option>
                  {cars.map((car) => (
                    <option key={car.label} value={car.label}>
                      {car.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="booking__select">
                <label>
                  Pick-up location <span className="red">*</span>
                </label>
                <select value={pickUpCity} onChange={handlePickCity}>
                  <option>Select car pick-up location</option>
                  {cities.map((city) => (
                    <option key={city.label} value={city.label}>
                      {city.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="booking__select">
                <label>
                  Drop-off location <span className="red">*</span>
                </label>
                <select value={dropOffCity} onChange={handleDropCity}>
                  <option>Select car drop-off location</option>
                  {cities.map((city) => (
                    <option key={city.label} value={city.label}>
                      {city.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="booking__select">
                <label>
                  Car pick-up date <span className="red">*</span>
                </label>
                <input
                  type="date"
                  value={pickDate}
                  onChange={handlePickDate}
                ></input>
              </div>
              <div className="booking__select">
                <label>
                  Car drop-off date <span className="red">*</span>
                </label>
                <input
                  type="date"
                  value={dropDate}
                  onChange={handleDropDate}
                ></input>
              </div>
              <div className="booking__select">
                <button
                  className="booking__submit"
                  onClick={handleSetModalTrue}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Booking;
