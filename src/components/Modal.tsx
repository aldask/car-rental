import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import Booking from './Booking';

const [modal, setModal] = useState(false);
interface ModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
  }

function Modal({ setModal }: ModalProps) {
    return (
    <section className='modal'>
        <div className='upperBar'>
            <h3>Complete reservation</h3>
            <p>X</p>
        </div>
        <div className='modalContainer'>
          <div className='side1'>
            <h4>Location & Date</h4>
            <div className='infoBox'>
              <div className='choice'>
                <FontAwesomeIcon icon={faCalendarDays} />
                <div className='result'>
                  <div className='resultTitle'>
                    <p>Pick-Up Date & Time</p>
                  </div>
                  <div className='resultData'>
                    <p>d /{" "}
                    <input type="time" className="input-time"></input></p>
                  </div>
                </div>
              </div>
              <div className='choice'>
                <FontAwesomeIcon icon={faCalendarDays} />
                <div className='result'>
                  <div className='resultTitle'>
                    <p>Drop-Off Date & Time</p>
                  </div>
                  <div className='resultData'>
                    <p>d /{" "}
                    <input type="time" className="input-time"></input></p>
                  </div>
                </div>
              </div>
              <div className='choice'>
                <FontAwesomeIcon icon={faLocationDot} />
                <div className='result'>
                  <div className='resultTitle'>
                    <p>Pick-Up Location</p>
                  </div>
                  <div className='resultData'>
                    <p>d</p>
                  </div>
                </div>
              </div>
              <div className='choice'>
                <FontAwesomeIcon icon={faLocationDot} />
                <div className='result'>
                  <div className='resultTitle'>
                    <p>Drop-Off Location</p>
                  </div>
                  <div className='resultData'>
                    <p>d</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='selectedCar'>
            <h2>b</h2>
            <img src="a" alt='selected-car'></img>
          </div>
        </div>
        <div className='userDetails'>
          <p>a</p>
          <h4>Personal Info</h4>
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
                <input type='tel' max={16} min={2} required placeholder='Enter Your Phone Number'></input>
              </span>
              <span className='data'>
                <label>Age <span className='red'>*</span></label>
                <input type='number' max={16} min={2} required placeholder='Enter Your Age'></input>
              </span>
            </div>
            <div className='one-col'>
              <span className='data'>
                <label>Email <span className='red'>*</span></label>
                <input type='email' max={16} min={2} required placeholder='Enter Your Email'></input>
              </span>
              <span className='data'>
                <label>Address <span className='red'>*</span></label>
                <input type='text' max={16} min={2} required placeholder='Enter Your Address'></input>
              </span>
            </div>
            <div className='two-cols'>
              <span className='data'>
                <label>City <span className='red'>*</span></label>
                <input type='text' max={16} min={2} required placeholder='Enter Your City'></input>
              </span>
              <span className='data'>
                <label>Zip Code <span className='red'>*</span></label>
                <input type='number' max={16} min={2} required placeholder='Enter Your Zip Code'></input>
              </span>
            </div>
          </form>
          <div className='subscription'>
            <input type="radio"></input>
            <label>
              <p>I agree to receive newsletters, updates, promotions, and offers via email</p>
            </label>
          </div>
        </div>
        <div className='bottomBar'>
          <button className='tripPlan'>Reserve now</button>
        </div>
    </section>
    )
}

export default Modal;