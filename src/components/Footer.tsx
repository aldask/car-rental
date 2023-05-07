function Footer() {
    return (
      <>
        <section className="footer">
          <div className="container">
            <div className="footerBox">
              <ul className="column1">
                <li>
                  <h2>Car<span className="black strong">O</span></h2>
                </li>
                <li>
                  <p>We offer something nice</p>
                </li>
                <li>
                  <a href="tel:+4733378901">+47 333 78 901</a>
                </li>
                <li>
                  <a href="mailto: aaa@aa.com">Send Email</a>
                </li>
              </ul>
              <ul className="column2">
                <li>
                  <h2>Working Hours</h2>
                </li>
                <li>
                  <p>Mon - Fri: 9:00AM - 9:00PM</p>
                </li>
                <li>
                  <p>Sat: 9:00AM - 19:00PM</p>
                </li>
                <li>
                  <p>Sun: Closed</p>
                </li>
              </ul>
              <ul className="column3">
                <li>
                  <h2>Subscription</h2>
                </li>
                <li>
                  <p>Subscribe your Email address for latest news & updates.</p>
                </li>
                <li>
                  <input type="email" placeholder="Enter Your Email"></input>
                </li>
                <li>
                  <button>Subscribe</button>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Footer;  
  