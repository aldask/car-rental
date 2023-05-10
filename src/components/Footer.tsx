function Footer() {
  return (
    <>
      <section className="footer footer--blue">
        <div className="container">
          <div className="footer__box">
            <ul className="footer__column footer__column--1">
              <li>
                <h2 className="footer__heading footer__heading--logo">
                  Car<span className="footer__heading--black">O</span>
                </h2>
              </li>
              <li>
                <p className="footer__text footer__text--description">
                  The go-to car rental service for all your transportation
                  needs. Affordable prices, excellent customer service, and a
                  wide selection of reliable vehicles to choose from. Book your
                  rental today and experience convenience!
                </p>
              </li>
              <li>
                <a href="tel:+4733378901" className="footer__link">+47 333 78 901</a>
              </li>
              <li>
                <a href="mailto:aaa@aa.com" className="footer__link">Send Email</a>
              </li>
            </ul>
            <ul className="footer__column footer__column--2">
              <li>
                <h2 className="footer__heading">Working Hours</h2>
              </li>
              <li>
                <p className="footer__text">Mon - Fri: 9:00AM - 9:00PM</p>
              </li>
              <li>
                <p className="footer__text">Sat: 9:00AM - 19:00PM</p>
              </li>
              <li>
                <p className="footer__text">Sun: Closed</p>
              </li>
            </ul>
            <ul className="footer__column footer__column--3">
              <li>
                <h2 className="footer__heading">Subscription</h2>
              </li>
              <li>
                <p className="footer__text">
                  Subscribe your Email address for latest news &amp; updates.
                </p>
              </li>
              <li>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="footer__input"
                ></input>
              </li>
              <li>
                <button className="footer__button">Subscribe</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;