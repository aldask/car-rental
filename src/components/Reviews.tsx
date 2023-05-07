import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { users } from "../Data/users";

function Reviews() {
  return (
    <>
      <section className="reviews">
        <div className="container">
          <div className="reviewBox">
            <div className="reviewsTitle">
              <h1>Client's Testimonials</h1>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>
            <div className="reviewsBoxes">
              {users.map((user, index) => (
                <div className="userBox" key={index}>
                  <p className="message">{user.userMessage}</p>
                  <div className="reviewerCredentials">
                    <div className="sideOne">
                      <img src={user.userPic} alt="user"></img>
                      <p>{user.fullname}</p>
                    </div>
                    <div className="sideTwo">
                      <FontAwesomeIcon icon={faQuoteRight} className="quote" />
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