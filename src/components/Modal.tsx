import "../styles/Booking/modal-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";
import InputForm from "./InputForm";

interface FormData {
  pickTime: string;
  dropTime: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  age: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
}

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
  const initialFormData: FormData = {
    pickTime: "",
    dropTime: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    age: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [lostInputs, setLostInputs] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  function handleExit() {
    setModal(false);
    document.body.style.overflow = "auto";
  }

  function handleDone() {
    // Checking if all required fields are filled
    const requiredFields: (keyof FormData)[] = [
      "pickTime",
      "dropTime",
      "firstName",
      "lastName",
      "phoneNumber",
      "age",
      "email",
      "address",
      "city",
      "zipCode",
    ];

    const isAnyFieldEmpty = requiredFields.some((field) => {
      if (field === "zipCode") {
        return !formData[field] || formData[field].length < 5;
      }
      return !formData[field];
    });

    if (isAnyFieldEmpty) {
      setLostInputs(true);
      return;
    } else {
      setModal(false);
      setSuccessMessage(true);
      setLostInputs(false);
      setFormData(initialFormData);
      document.body.style.overflow = "auto";
    }
  }

  return (
    <>
      {isOpen && <div className=" body overlay " />}
      <section className={`${isOpen ? "modal--active" : "modal--disabled"}`}>
        <div className="modal__upper-bar">
          <h3>Complete reservation</h3>
          <p onClick={handleExit}>X</p>
        </div>
        <div className="modal-container">
          <div className="modal__user-selections">
            <div className="modal__user-selections__side1">
              <h4 className="strong">Location & Date</h4>
              <div className="modal__user-selections__info-box">
                <div className="modal__info-box__choice">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <div className="modal__info-box__choice-result">
                    <div className="modal__info-box__choice-result__title">
                      <p>Pick-Up Date & Time</p>
                    </div>
                    <div className="modal__info-box__choice-result__data">
                      <p>
                        {pickDate} /{" "}
                        <input
                          type="time"
                          className="modal__user-selections__info-box__choice__result__data__input-time"
                          name="pickTime"
                          value={formData.pickTime}
                          onChange={handleChange}
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="modal__info-box__choice">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <div className="modal__info-box__choice-result">
                    <div className="modal__info-box__choice-result__title">
                      <p>Drop-Off Date & Time</p>
                    </div>
                    <div className="modal__info-box__choice-result__data">
                      <p>
                        {dropDate} /{" "}
                        <input
                          type="time"
                          className="modal__user-selections__info-box__choice__result__data__input-time"
                          value={formData.dropTime}
                          name="dropTime"
                          onChange={handleChange}
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="modal__info-box__choice">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <div className="modal__info-box__choice-result">
                    <div className="modal__info-box__choice-result__title">
                      <p>Pick-Up Location</p>
                    </div>
                    <div className="modal__info-box__choice-result__data">
                      <p>{pickUpCity}</p>
                    </div>
                  </div>
                </div>
                <div className="modal__info-box__choice">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <div className="modal__info-box__choice-result">
                    <div className="modal__info-box__choice-result__title">
                      <p>Drop-Off Location</p>
                    </div>
                    <div className="modal__info-box__choice-result__data">
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
            {lostInputs && (
              <p className="booking__message--fail">
                All fields needs to be filled
              </p>
            )}
            <form className="modal__user-details__info">
              <div className="modal__user-details__info-two-cols">
                <span className="modal__user-details__info-two-cols-data">
                  <InputForm
                    type="text"
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    max={16}
                    min={2}
                    required
                    placeholder="Enter Your First Name"
                  />
                </span>
                <span className="modal__user-details__info-two-cols-data">
                  <InputForm
                    type="text"
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    max={16}
                    min={2}
                    required
                    placeholder="Enter Your Last Name"
                  />
                </span>
                <span className="modal__user-details__info-two-cols-data">
                  <InputForm
                    type="number"
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    pattern="\+370[0-9]{6}"
                    onChange={handleChange}
                    max={16}
                    min={2}
                    required
                    placeholder="Enter Your Phone Number"
                  />
                </span>
                <span className="modal__user-details__info-two-cols-data">
                  <InputForm
                    type="number"
                    label="Age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    max={120}
                    min={18}
                    required
                    placeholder="Enter Your Age"
                  />
                </span>
              </div>
              <div className="modal__user-details__info-one-col">
                <span className="modal__user-details__info-two-cols-data">
                  <InputForm
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Email"
                  />
                </span>
                <span className="modal__user-details__info-two-cols-data">
                  <InputForm
                    type="text"
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Street Address"
                  />
                </span>
              </div>
              <div className="modal__user-details__info-two-cols">
                <span className="modal__user-details__info-two-cols-data">
                  <InputForm
                    type="text"
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your City"
                  />
                </span>
                <span className="modal__user-details__info-two-cols-data">
                  <InputForm
                    type="number"
                    label="Zip Code"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Zip Code"
                    pattern="[0-9]{5,}"
                  />
                </span>
              </div>
            </form>
            <div className="modal__user-details__subscription">
              <input type="checkbox" />
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
