import { useState } from "react";
import "../styles/Faq/faq-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { questions } from "../Data/questions";

function Faq() {
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const handleQuestion = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const selectedQuestion = questions.find((q) => q.asking === e.currentTarget.value);
    if (selectedQuestion) {
      setSelectedQuestion(selectedQuestion.answer);
    } else {
      setSelectedQuestion("");
    }
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq__box">
          <div className="faq__title">
            <h2 className="faq__heading">Frequently Asked Questions</h2>
            <p className="faq__description">
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
          <div className="faq__question-box">
            {questions.map((q) => (
              <div key={q.asking}>
                <button
                  value={q.asking}
                  onClick={handleQuestion}
                  className="faq__question"
                >
                  {q.asking}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="faq__arrow"
                  />
                </button>
                {selectedQuestion === q.answer && (
                  <p className="faq__answer">{selectedQuestion}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;