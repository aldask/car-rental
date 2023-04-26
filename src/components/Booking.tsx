import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';
import bmw3series from '../images/bmw3series.png';
import bmwtest from '../images/55.png';

// Cars object
interface Car {
  label: string;
  img: any;
};
const cars: Car[] = [
  { label: 'Audi A3', img: bmw3series },
  { label: 'BMW 3 Series', img: bmwtest },
  { label: 'Mercedes-Benz C-Class', img: 'a' },
  { label: 'VW Golf GTI', img: 'c' },
];

// Cities object
interface City {
  label: string;
};
const cities: City[] = [
  { label: 'Vilnius' },
  { label: 'Kaunas' },
  { label: 'Riga' },
  { label: 'Warsaw' },
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
    const selectedCar = cars.find(car => car.label === e.target.value);
    if(selectedCar) {
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
  const handleSetModalTrue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (
      carModel === "" ||
      pickUpCity === "" ||
      dropOffCity === "" ||
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
    <section className="booking" id='book'>
      <div className='container'>
        <div className='carsBookingBox'>
          <h2 className="bookingTitle">Book a Car</h2>
          {showErrorMessage && (<p className="fail">All fields need to be selected</p>)}
          {showSuccessMessage && (<p className='success'>Check your email to confirm the reservation!</p>)}
          <div className="bookingBox">
            <div className="selectionBox">
              <label>Car Model <span className="red">*</span></label>
              <select value={carModel} onChange={handleCar}>
                <option>Select car model</option>
                {cars.map((car) => (
                <option key={car.label} value={car.label}>
                  {car.label}</option>
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
              <input type="date" value={pickDate} onChange={handlePickDate}></input>
            </div>
            <div className="selectionBox">
              <label>Car drop-off date <span className="red">*</span></label>
              <input type="date" value={dropDate} onChange={handleDropDate}></input>
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