import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Faq() {
  return (
    <>
    <section className="faqContainer">
        <div className='faqTitle'>
            <h1>Frequently Asked Questions</h1>
            <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
        </div>
        <div className='questionBox'>
            <div className='question'>
                <p>1. What is special about comparing rental car deals?</p>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className='answer'>
                    <p>Comparing rental car deals is important as it helps find 
                        the best deal that fits your budget and requirements, 
                        ensuring you get the most value for your money. By comparing various 
                        options, you can find deals that offer lower prices, additional services, 
                        or better car models. You can find car rental deals by researching online 
                        and comparing prices from different rental companies.</p>
                </div>
            <div className='question'>
                <p>2. How do I find the car rental deals?</p>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className='answer'>
                    <p>You can find car rental deals by researching online and comparing prices 
                        from different rental companies. Websites such as Expedia, Kayak, and 
                        Travelocity allow you to compare prices and view available rental options. 
                        It is also recommended to sign up for email newsletters and follow rental car 
                        companies on social media to be informed of any special deals or promotions.</p>
                </div>
            <div className='question'>
                <p>3. How do I find such low rental car prices?</p>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className='answer'>
                    <p>Book in advance: Booking your rental car ahead of time can often 
                        result in lower prices. Compare prices from multiple companies: 
                        Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple 
                        rental car companies. Look for discount codes and coupons: Search for discount codes 
                        and coupons that you can use to lower the rental price. Renting from an off-airport 
                        location can sometimes result in lower prices.</p>
                </div>
        </div>
    </section>
    </>
  );
}

export default Faq;