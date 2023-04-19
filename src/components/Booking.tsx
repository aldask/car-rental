import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function Booking() {

  const [carModel, setCarModel] = useState("");
  const [pickUpCity, setPickUpCity] = useState("");
  const [dropOffCity, setDropOffCity] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [dropDate, setDropDate] = useState("");

  const handleCar = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCarModel(e.target.value);
  };
  const handlePickCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickUpCity(e.target.value);
  };
  const handleDropCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropOffCity(e.target.value);
  }
  const handlePickDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickDate(e.target.value);
  }
  const handleDropDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropDate(e.target.value);
  }

  return (
  <>
    <section className="booking">
      <div className='container'>
        <div className='carsBookingBox'>
          <h2 className="bookingTitle">Book a Car</h2>
          <div className="bookingBox">
            <div className="selectionBox">
              <label>Car Model <span className="red">*</span></label>
              <select value={carModel} onChange={handleCar}>
                <option>Select car model</option>
                <option>VW Golf GTI</option>
                <option>Tesla Model S</option>
                <option>Bugatti Chiron</option>
                <option>Lamborghini Gallardo</option>
              </select>
            </div>
            <div className="selectionBox">
              <label>Pick-up location <span className="red">*</span></label>
              <select value={pickUpCity} onChange={handlePickCity}>
                <option>Select car pick-up location</option>
                <option>Vilnius</option>
                <option>Kaunas</option>
                <option>Riga</option>
                <option>Talin</option>
              </select>
            </div>
            <div className="selectionBox">
              <label>Drop-off location <span className="red">*</span></label>
              <select value={dropOffCity} onChange={handleDropCity}>
                <option>Select car drop-off location</option>
                <option>Vilnius</option>
                <option>Kaunas</option>
                <option>Riga</option>
                <option>Talin</option>
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
              <button className="confirmBooking">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default Booking;