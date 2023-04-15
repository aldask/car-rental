import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Booking() {
  return (
  <>
    <section className="booking-Container">
        <h1 className="bookingTitle">Book a Car</h1>
        <div className="booking-box">
          <div className="selectionBox">
            <label>Car Model <span className="red">*</span></label>
            <select>
              <option>Select car model</option>
              <option>VW Golf GTI</option>
              <option>Tesla Model S</option>
              <option>Bugatti Chiron</option>
              <option>Lamborghini Gallardo</option>
            </select>
          </div>
          <div className="selectionBox">
            <label>Pick-up location <span className="red">*</span></label>
            <select>
              <option>Select car pick-up location</option>
              <option>Vilnius</option>
              <option>Kaunas</option>
              <option>Riga</option>
              <option>Talin</option>
            </select>
          </div>
          <div className="selectionBox">
            <label>Drop-off location <span className="red">*</span></label>
            <select>
              <option>Select car drop-off location</option>
              <option>Vilnius</option>
              <option>Kaunas</option>
              <option>Riga</option>
              <option>Talin</option>
            </select>
          </div>
          <div className="selectionBox">
            <label>Car pick-up date <span className="red">*</span></label>
            <input type="date"></input>
          </div>
          <div className="selectionBox">
            <label>Car drop-off date <span className="red">*</span></label>
            <input type="date"></input>
          </div>
          <div className="selectionBox">
            <label>random shit</label>
            <button className="confirmBooking">Confirm</button>
          </div>
        </div>
    </section>
  </>
  );
}

export default Booking;