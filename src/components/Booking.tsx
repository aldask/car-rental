import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import bmw3series from '../images/bmw3series.png'
import bmwtest from '../images/55.png'
import { Modal } from './Modal';

// Cars object
interface Car {
  value: string;
  label: string;
  img: string;
};
const cars: Car[] = [
  { value: 'audia3', label: 'Audi A3', img: 'bmw3series' },
  { value: 'bmw3', label: 'BMW 3 Series', img: 'vw' },
  { value: 'mercedes', label: 'Mercedes-Benz C-Class', img: 'a' },
  { value: 'vw', label: 'VW Golf GTI', img: 'c' },
];

// Cities object
interface City {
  value: string;
  label: string;
};
const cities: City[] = [
  { value: 'vilnius', label: 'Vilnius' },
  { value: 'kaunas', label: 'Kaunas' },
  { value: 'riga', label: 'Riga' },
  { value: 'warsaw', label: 'Warsaw' },
];

//NEW



function Booking() {

  const [modal, setModal] = useState(false);

  // Modal states
  const [carModel, setCarModel] = useState("");
  const [pickUpCity, setPickUpCity] = useState("");
  const [dropOffCity, setDropOffCity] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [carImg, setCarImg] = useState("");

  // Modal handlers
  const handleCar = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCarModel(e.target.value);
    setCarImg(e.target.value);
  };
  const handlePickCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPickUpCity(e.target.value);
  };
  const handleDropCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDropOffCity(e.target.value);
  }
  const handlePickDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickDate(e.target.value);
  }
  const handleDropDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropDate(e.target.value);
  }
  const handleSetModalTrue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault(); // prevent default form submission behavior
    if (
      carModel === "" ||
      pickUpCity === "" ||
      dropOffCity === "" ||
      pickDate === "" ||
      dropDate === ""
    ) {
      console.log("just work finally shit");
    } else {
      setModal(true);
    }
  };
  return (
  <>
  <Modal setModal={setModal} isOpen={modal} />
    <section className="booking">
      <div className='container'>
        <div className='carsBookingBox'>
          <h2 className="bookingTitle">Book a Car</h2>
          <p className='fail'>All fields needs to be selected</p>
          <p className='success'>Check your email to confirm an order</p>
          <div className="bookingBox">
            <div className="selectionBox">
              <label>Car Model <span className="red">*</span></label>
              <select value={carModel} onChange={handleCar}>
                <option>Select car model</option>
                {cars.map((car) => (
                <option key={car.value} value={car.value}>
                  {car.label}</option>
                  ))}
              </select>
            </div>
            <div className="selectionBox">
              <label>Pick-up location <span className="red">*</span></label>
              <select value={pickUpCity} onChange={handlePickCity}>
                <option>Select car pick-up location</option>
                {cities.map((city) => (
                  <option key={city.value} value={city.value}>
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
                  <option key={city.value} value={city.value}>
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