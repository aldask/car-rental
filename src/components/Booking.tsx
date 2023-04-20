import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const carMakes = [
  { value: 'audia3', label: 'Audi A3', },
  { value: 'bmw3', label: 'BMW 3 Series' },
  { value: 'mercedes', label: 'Mercedes-Benz C-Class' },
  { value: 'vw', label: 'VW Golf GTI' },
];
const cities = [
  { value: 'vilnius', label: 'Vilnius', },
  { value: 'kaunas', label: 'Kaunas' },
  { value: 'riga', label: 'Riga' },
  { value: 'warsaw', label: 'Warsaw' },
];

function Booking() {

  const [carModel, setCarModel] = useState("");
  const [pickUpCity, setPickUpCity] = useState("");
  const [dropOffCity, setDropOffCity] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [dropDate, setDropDate] = useState("");

  const handleCar = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCarModel(e.target.value);
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

  //Show error if one of fields not selected

  const showMsg = () => {
    const errorMsg = document.querySelector(".fail") as HTMLDivElement;
    const successMsg = document.querySelector(".success") as HTMLDivElement;
    const box = document.querySelector(".confirmBox") as HTMLDivElement;
  
    if (
      carModel === "" ||
      pickUpCity === "" ||
      dropOffCity === "" ||
      pickDate === "" ||
      dropDate === ""
    ) {
      errorMsg.style.display = "flex";
      successMsg.style.display = "none";
    } else {
      successMsg.style.display = "flex";
      errorMsg.style.display = "none";
      box.style.display = "flex";
    }
  };

  return (
  <>
    <section className="booking">
      <div className='confirmBox'>
        <div className='upperBar'>
          <h3>Complete reservation</h3>
          <p>X</p>
        </div>
        <div className='mainConfirmBox'>
          <div className='baseInfo'>
            <FontAwesomeIcon icon={faCircleInfo} />
            <p>Your reservation is almost done!</p>
          </div>
          <div className='aa'>
            <div className='detailedInfo'>
              <h6>Pick-Up Date & Time</h6>
              <p>{pickDate} /{" "}
                    <input type="time" className="input-time"></input></p>
            </div>
          </div>
        </div>
      </div>
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
                {carMakes.map((car) => (
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
              <button className="confirmBooking" onClick={showMsg}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default Booking;