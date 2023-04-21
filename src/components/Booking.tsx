import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import bmw3series from '../images/bmw3series.png'
import vw from '../images/bmw3series.png'
import a from '../images/bmw3series.png'
import c from '../images/bmw3series.png'

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

interface City {
  value: string;
  label: string;
};
const cities = [
  { value: 'vilnius', label: 'Vilnius' },
  { value: 'kaunas', label: 'Kaunas' },
  { value: 'riga', label: 'Riga' },
  { value: 'warsaw', label: 'Warsaw' },
]


function Booking() {

  const [carModel, setCarModel] = useState("");
  const [pickUpCity, setPickUpCity] = useState("");
  const [dropOffCity, setDropOffCity] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [carImg, setCarImg] = useState("");

  const handleCar = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCarModel(e.target.value);
    setCarImg(e.target.value)
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

  let img = carImg;

  cars.forEach((car) => {
    switch(car.value) {
      case 'audia3':
        img = bmw3series;
        break;
      case 'bmw3':
        img = bmw3series;
        break;
      default:
        break;
    }
  });

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
      
      <section className='confirmBox'>
        <div className='upperBar'>
          <h3>Complete reservation</h3>
          <p>X</p>
        </div>
        <div className='mainConfirmBoxCotainer'>
          <div className='side1'>
            <h4>Location & Date</h4>
            <div className='selectedInfoTitle'>
              <FontAwesomeIcon icon={faLocationDot} />
              <h4>Pick-Up Date & Time</h4>
            </div>
            <div className='result'>
              <p>{pickDate} /{" "}
                <input type="time" className="input-time"></input></p>
            </div>
          </div>
          <div className='selectedCar'>
              <img src={img} alt='selected-car'></img>
          </div>
        </div>
      </section>
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