import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Profile from "../images/profilePic.jpg";

interface User {
  fullname: string;
  userPic: string;
  userMessage: string;
}

const users: User[] = [
  {
    fullname: "Sophia Chen",
    userPic: Profile,
    userMessage: "I had a fantastic experience renting a car from this website. The process was incredibly easy and the customer service was top-notch. The car was clean and in great condition. I would definitely rent from them again!",
  },
  {
    fullname: "Oliver Davis",
    userPic: Profile,
    userMessage: "This website made renting a car a breeze! The prices were really competitive and the selection of cars was impressive. Customer service was friendly and helpful. I would definitely recommend this website to anyone in need of a car rental.",
  },
  {
    fullname: "Leah Rodriguez",
    userPic: Profile,
    userMessage: "I was blown away by how easy and affordable it was to rent a car from this website. The car was in excellent condition and the customer service was excellent. I will definitely be using this website again!",
  },
  {
    fullname: "Isaac Kim",
    userPic: Profile,
    userMessage: "I had a wonderful experience renting a car from this website. The process was straightforward and the prices were very reasonable. The customer service was fantastic and the car itself was great. Highly recommend!",
  },
  {
    fullname: "Samantha Patel",
    userPic: Profile,
    userMessage: "I was really impressed with the level of service I received from this car rental website. The prices were competitive and the selection of cars was great. The customer service reps were friendly and knowledgeable. I will definitely be using this website again!",
  },
  {
    fullname: "Ryan Martinez",
    userPic: Profile,
    userMessage: "I had a great experience renting a car from this website. The process was really easy and the prices were really reasonable. The customer service was fantastic and the car was in excellent condition. I would definitely recommend this website to anyone in need of a car rental.",
  },
];

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