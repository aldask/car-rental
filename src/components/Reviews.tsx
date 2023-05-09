import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { users } from "../Data/users";

function Reviews() {
  return (
    <>
      <section className="reviews">
        <div className="container">
          <div className="reviews__box">
            <div className="reviews__title">
              <h2>Client's Testimonials</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>
            <div className="reviews__boxes">
              {users.map((user, index) => (
                <div className="review__user-box" key={index}>
                  <p className="review__message">{user.userMessage}</p>
                  <div className="review__credentials">
                    <div className="review__side-one">
                      <img src={user.userPic} alt="user"></img>
                      <p>{user.fullname}</p>
                    </div>
                    <div className="review__side-two">
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="review__quote"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;