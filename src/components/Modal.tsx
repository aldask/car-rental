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
    <section className={`modal ${isOpen ? "is-active" : ""}`}>
      <div className="upperBar">
        <h3>Complete reservation</h3>
        <p onClick={handleExit}>X</p>
      </div>
      <div className="modalContainer">
        <div className="side1">
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
        <div className="side2">
          <h4>Personal Information</h4>
          <div className="infoBox">
            <div className="choice">
              <div className="result">
                <div className="resultTitle">
                  <p>First Name</p>
                </div>
                <div className="resultData">
                  <input type="text" className="input-text" name="first-name" />
                </div>
              </div>
            </div>
            <div className="choice">
              <div className="result">
                <div className="resultTitle">
                  <p>Last Name</p>
                </div>
                <div className="resultData">
                  <input type="text" className="input-text" name="last-name" />
                </div>
              </div>
            </div>
            <div className="choice">
              <div className="result">
                <div className="resultTitle">
                  <p>Email</p>
                </div>
                <div className="resultData">
                  <input type="email" className="input-text" name="email" />
                </div>
              </div>
            </div>
            <div className="choice">
              <div className="result">
                <div className="resultTitle">
                  <p>Phone Number</p>
                </div>
                <div className="resultData">
                  <input type="tel" className="input-text" name="phone" />
                </div>
              </div>
            </div>
          </div>
          <div className="buttonsContainer">
            <button className="doneBtn" onClick={handleDone}>Done
            </button>
          </div>
        </div>
      </div>
    </section>
    )
  };