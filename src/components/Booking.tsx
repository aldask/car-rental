import React, { useState, useEffect } from "react";
import { Modal } from "./Modal";

// Img's for cars
import AudiA3 from "../images/AudiA3.png";
import BMW3 from "../images/BMW3.png";
import MBE from "../images/MBE.png";
import GolfGTI from "../images/GolfGTI.png";

// Cars object
interface Car {
  label: string;
  img: any;
  manufacturer: string;
  model: string;
  year: string;
  doors: string;
  ac: string;
  transmission: string;
  fuel: string;
  price: string;
}
export const cars: Car[] = [
  {
    label: "Audi A3",
    img: AudiA3,
    manufacturer: "Audi",
    model: "A3",
    year: "2021",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: "42",
  },
  {
    label: "BMW 3 Series",
    img: BMW3,
    manufacturer: "BMW",
    model: "3 Series",
    year: "2021",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: "70",
  },
  {
    label: "Mercedes-Benz E-Class",
    img: MBE,
    manufacturer: "Mercedes-Benz",
    model: "E-Class",
    year: "2021",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: "95",
  },
  {
    label: "VW Golf GTI",
    img: GolfGTI,
    manufacturer: "Volkswagen",
    model: "Golf GTI",
    year: "2021",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: "75",
  },
  {
    label: "New Car",
    img: GolfGTI,
    manufacturer: "Volkswagen",
    model: "Golf GTI",
    year: "2021",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: "75",
  },
  {
    label: "New Car4",
    img: GolfGTI,
    manufacturer: "Volkswagen",
    model: "Golf GTI",
    year: "2021",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: "75",
  },
  {
    label: "New Car44",
    img: GolfGTI,
    manufacturer: "Volkswagen",
    model: "Golf GTI",
    year: "2021",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    price: "75",
  },
];

// Cities object
interface City {
  label: string;
};
const cities: City[] = [
  { label: "Vilnius" },
  { label: "Kaunas" },
  { label: "Riga" },
  { label: "Warsaw" },
];

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
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (
      carModel === "" ||
      pickUpCity === "" ||
      dropOffCity === "" ||
      pickDate === "" ||
      dropDate === ""
    ) {
      setShowErrorMessage(true);
    } else if (
      pickUpCity === "Select car pick-up location" ||
      dropOffCity === "Select car drop-off location"
    ) setShowErrorMessage(true); 
    else {
      setModal(true);
      setShowErrorMessage(false);
      document.body.style.overflow = "hidden";
    }
  };

  // Car img cases

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
          <div className="carsBookingBox">
            <h2 className="bookingTitle">Book a Car</h2>
            {showErrorMessage && (
              <p className="fail">All fields need to be selected</p>
            )}
            {showSuccessMessage && (
              <p className="success">
                Check your email to confirm the reservation!
              </p>
            )}
            <div className="bookingBox">
              <div className="selectionBox">
                <label>Car Model <span className="red">*</span></label>
                <select value={carModel} onChange={handleCar}>
                  <option>Select car model</option>
                  {cars.map((car) => (
                    <option key={car.label} value={car.label}>
                      {car.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="selectionBox">
                <label>Pick-up location <span className="red">*</span></label>
                <select value={pickUpCity} onChange={handlePickCity}>
                  <option>Select car pick-up location</option>
                  {cities.map((city) => (
                    <option key={city.label} value={city.label}>
                      {city.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="selectionBox">
                <label>Drop-off location <span className="red">*</span></label>
                <select value={dropOffCity} onChange={handleDropCity}>
                  <option>Select car drop-off location</option>
                  {cities.map((city) => (
                    <option key={city.label} value={city.label}>
                      {city.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="selectionBox">
                <label>Car pick-up date <span className="red">*</span></label>
                <input
                  type="date"
                  value={pickDate}
                  onChange={handlePickDate}
                ></input>
              </div>
              <div className="selectionBox">
                <label>Car drop-off date <span className="red">*</span></label>
                <input
                  type="date"
                  value={dropDate}
                  onChange={handleDropDate}
                ></input>
              </div>
              <div className="selectionBox">
                <button className="confirmBooking" onClick={handleSetModalTrue}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Booking;