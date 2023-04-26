import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';


interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  carModel: string;
  carImg: string;
  pickUpCity: string;
  dropOffCity: string;
  pickDate: string;
  dropDate: string;
  setSuccessMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ setModal, isOpen, carModel, carImg, pickUpCity, dropOffCity, pickDate, dropDate, setSuccessMessage }: ModalProps) { 
  
  const box = document.querySelector("body") as HTMLElement;


  function handleExit() {
    setModal(false);
    document.body.style.overflow = "auto";
  };

  function handleDone() {
    setModal(false);
    setSuccessMessage(true);
    document.body.style.overflow = "auto";
  };


  return (    
    <>
    {isOpen && <div className=" body overlay" />}
    <section className={`${isOpen ? "activeModal" : "disabled"}`}>
      <div className="upperBar">
        <h3>Complete reservation</h3>
        <p onClick={handleExit}>X</p>
      </div>
      <div className="modalContainer">
        <div className='userSelections'>
          <div className='side1'>
          <h4>Location & Date</h4>
          <div className="infoBox">
            <div className="choice">
              <FontAwesomeIcon icon={faCalendarDays} />
              <div className="result">
                <div className="resultTitle">
                  <p>Pick-Up Date & Time</p>
                </div>
                <div className="resultData">
                  <p>
                    {pickDate} /{" "}
                    <input type="time" className="input-time" name="pickup-time" />
                  </p>
                </div>
              </div>
            </div>
            <div className="choice">
              <FontAwesomeIcon icon={faCalendarDays} />
              <div className="result">
                <div className="resultTitle">
                  <p>Drop-Off Date & Time</p>
                </div>
                <div className="resultData">
                  <p>
                    {dropDate} /{" "}
                    <input type="time" className="input-time" name="dropoff-time" />
                  </p>
                </div>
              </div>
            </div>
            <div className="choice">
              <FontAwesomeIcon icon={faLocationDot} />
              <div className="result">
                <div className="resultTitle">
                  <p>Pick-Up Location</p>
                </div>
                <div className="resultData">
                  <p>{pickUpCity}</p>
                </div>
              </div>
            </div>
            <div className="choice">
              <FontAwesomeIcon icon={faLocationDot} />
              <div className="result">
                <div className="resultTitle">
                  <p>Drop-Off Location</p>
                </div>
                <div className="resultData">
                  <p>{dropOffCity}</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className='selectedCar'>
            <h2>{carModel}</h2>
            <img src={carImg} alt='selected-car'></img>
          </div>
        </div>
        <div className="userDetails">
          <h4>Personal info</h4>
          <form className='userInfo'>
            <div className='two-cols'>
              <span className='data'>
                <label>First Name <span className='red'>*</span></label>
                <input type='text' max={16} min={2} required placeholder='Enter Your First Name'></input>
              </span>
              <span className='data'>
                <label>Last Name <span className='red'>*</span></label>
                <input type='text' max={16} min={2} required placeholder='Enter Your Last Name'></input>
              </span>
              <span className='data'>
                <label>Phone Number <span className='red'>*</span></label>
                <input type='tel' min={9} max={9} required placeholder='Enter Your Phone Number'></input>
              </span>
              <span className='data'>
                <label>Age <span className='red'>*</span></label>
                <input type='number' max={18} min={120} required placeholder='Enter Your Age'></input>
              </span>
            </div>
            <div className='one-col'>
              <span className='data'>
                <label>Email <span className='red'>*</span></label>
                <input type='email' required placeholder='Enter Your Email'></input>
              </span>
              <span className='data'>
                <label>Address <span className='red'>*</span></label>
                <input type='text' required placeholder='Enter Your Street Address'></input>
              </span>
            </div>
            <div className='two-cols'>
              <span className='data'>
                <label>City <span className='red'>*</span></label>
                <input type='text' required placeholder='Enter Your City'></input>
              </span>
              <span className='data'>
                <label>Zip Code <span className='red'>*</span></label>
                <input type='text' required placeholder='Enter Your Zip Code'></input>
              </span>
            </div>
          </form>
          <div className='subscription'>
            <input type="radio" />
            <label>Subscribe to our newsletter</label>
          </div>
          <div className="bottomBar">
            <button className="tripPlan" onClick={handleDone}>Complete Reservation</button>
          </div>
        </div>
      </div>
    </section>
    </>
    )
  };