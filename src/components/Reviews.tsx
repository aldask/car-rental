import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function Reviews() {
  return (
    <>
    <section className="reviewsBox">
        <div className="reviewsTitle">
            <h1>Client's Testimonials</h1>
            <p>Discover the positive impact we've made on the 
                our clients by reading through their testimonials. 
                Our clients have experienced our service and results, 
                and they're eager to share their positive experiences with you.</p>
        </div>
        <div className="reviewsBoxes">
            <div className="userBox">
                <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                <div className="reviewerCredentials">
                    <img src="userPic"></img>
                    <FontAwesomeIcon icon={faQuoteRight} className='icons' />
                </div>
            </div>
            <div className="userBox">
                <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                <div className="reviewerCredentials">
                    <img src="userPic"></img>
                    <FontAwesomeIcon icon={faQuoteRight} className='icons' />
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Reviews;