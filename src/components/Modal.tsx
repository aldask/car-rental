import "../styles/Booking/modal-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faLocationDot } from "@fortawesome/free-solid-svg-icons";

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

export function Modal({
  setModal,
  isOpen,
  carModel,
  carImg,
  pickUpCity,
  dropOffCity,
  pickDate,
  dropDate,
  setSuccessMessage,
}: ModalProps) {
  function handleExit() {
    setModal(false);
    document.body.style.overflow = "auto";
  }

  function handleDone() {
    setModal(false);
    setSuccessMessage(true);
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {isOpen && <div className=" body overlay " />}
      <section className={`${isOpen ? "modal--active" : "modal--disabled"}`}>
        <div className="modal__modal__upper-bar">
          <h3>Complete reservation</h3>
          <p onClick={handleExit}>X</p>
        </div>
        <div className="modal-container">
          <div className="modal__modal__user-selections">
            <div className="modal__modal__user-selections__side1">
              <h4 className="strong">Location & Date</h4>
              <div className="modal__modal__user-selections__info-box">
                <div className="modal__user-selections__info-box__choice">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <div className="modal__user-selections__info-box__choice__result">
                    <div className="modal__user-selections__info-box__choice__result__title">
                      <p>Pick-Up Date & Time</p>
                    </div>
                    <div className="modal__user-selections__info-box__choice__result__data">
                      <p>
                        {pickDate} /{" "}
                        <input
                          type="time"
                          className="modal__user-selections__info-box__choice__result__data__input-time"
                          name="pickup-time"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="modal__user-selections__info-box__choice">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <div className="modal__user-selections__info-box__choice__result">
                    <div className="modal__user-selections__info-box__choice__result__title">
                      <p>Drop-Off Date & Time</p>
                    </div>
                    <div className="modal__user-selections__info-box__choice__result__data">
                      <p>
                        {dropDate} /{" "}
                        <input
                          type="time"
                          className="modal__user-selections__info-box__choice__result__data__input-time"
                          name="dropoff-time"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="modal__user-selections__info-box__choice">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <div className="modal__user-selections__info-box__choice__result">
                    <div className="modal__user-selections__info-box__choice__result__title">
                      <p>Pick-Up Location</p>
                    </div>
                    <div className="modal__user-selections__info-box__choice__result__data">
                      <p>{pickUpCity}</p>
                    </div>
                  </div>
                </div>
                <div className="modal__user-selections__info-box__choice">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <div className="modal__user-selections__info-box__choice__result">
                    <div className="modal__user-selections__info-box__choice__result__title">
                      <p>Drop-Off Location</p>
                    </div>
                    <div className="modal__user-selections__info-box__choice__result__data">
                      <p>{dropOffCity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal__selected-car">
              <h3 className="strong">{carModel}</h3>
              <img src={carImg} alt="selected-car"></img>
            </div>
          </div>
          <div className="modal__user-details">
            <h3>Personal info</h3>
            <form className="modal__user-details__info">
              <div className="modal__user-details__info__two-cols">
                <span className="modal__user-details__info__two-cols__data">
                  <label>
                    First Name <span className="red">*</span>
                  </label>
                  <input
                    type="text"
                    max={16}
                    min={2}
                    required
                    placeholder="Enter Your First Name"
                  ></input>
                </span>
                <span className="modal__user-details__info__two-cols__data">
                  <label>
                    Last Name <span className="red">*</span>
                  </label>
                  <input
                    type="text"
                    max={16}
                    min={2}
                    required
                    placeholder="Enter Your Last Name"
                  ></input>
                </span>
                <span className="modal__user-details__info__two-cols__data">
                  <label>
                    Phone Number <span className="red">*</span>
                  </label>
                  <input
                    type="tel"
                    min={9}
                    max={9}
                    required
                    placeholder="Enter Your Phone Number"
                  ></input>
                </span>
                <span className="modal__user-details__info__two-cols__data">
                  <label>
                    Age <span className="red">*</span>
                  </label>
                  <input
                    type="number"
                    max={18}
                    min={120}
                    required
                    placeholder="Enter Your Age"
                  ></input>
                </span>
              </div>
              <div className="modal__user-details__info__one-col">
                <span className="modal__user-details__info__two-cols__data">
                  <label>
                    Email <span className="red">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter Your Email"
                  ></input>
                </span>
                <span className="modal__user-details__info__two-cols__data">
                  <label>
                    Address <span className="red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter Your Street Address"
                  ></input>
                </span>
              </div>
              <div className="modal__user-details__info__two-cols">
                <span className="modal__user-details__info__two-cols__data">
                  <label>
                    City <span className="red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter Your City"
                  ></input>
                </span>
                <span className="modal__user-details__info__two-cols__data">
                  <label>
                    Zip Code <span className="red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter Your Zip Code"
                  ></input>
                </span>
              </div>
            </form>
            <div className="modal__user-details__subscription">
              <input type="radio" />
              <label>Subscribe to our newsletter</label>
            </div>
            <div className="modal__bottom-bar">
              <button
                className="modal__bottom-bar__trip-plan"
                onClick={handleDone}
              >
                Complete Reservation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
