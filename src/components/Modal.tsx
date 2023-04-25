import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';


interface ModalProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export function Modal({ setModal, isOpen }: ModalProps) {
  function handleExit() {
    setModal(false);
  };

  function handleDone() {
    setModal(true);
  };


  return (
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
                    d /{" "}
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
                    d /{" "}
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
                  <p>d</p>
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
                  <p>d</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className='selectedCar'>
            <h2>carmake</h2>
            <img src="{img}" alt='selected-car'></img>
          </div>
        </div>
        <div className="userDetails">
          <h4>Personal info</h4>
          <div className='two-cols'>
            <form>
              <span>test</span>
            </form>
          </div>
          <div className="buttonsContainer">
            <button className="doneBtn" onClick={handleDone}>Done</button>
          </div>
        </div>
      </div>
    </section>
    )
  };