import "../styles/About/about-style.css";
import AboutMain from "../images/AboutContent/AboutMain.jpg";

function AboutContent() {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about__container">
            <div className="about__container--side1">
              <img src={AboutMain} alt="people and catalog"></img>
            </div>
            <div className="about__container--side2">
              <div className="about__container--side2-title">
                <h2>You start the engine and your adventure begins</h2>
              </div>
              <div className="about__container--side2-text">
                <p>
                  Experience the thrill of adventure with{" "}
                  <span className="black strong">
                    Car<span className="blue strong">O</span>
                  </span>
                  ! Our exceptional car rental services offer a world of
                  exciting possibilities. With a wide range of well-maintained
                  vehicles, we ensure a smooth and enjoyable experience for all
                  your travel needs. Our dedicated team prioritizes your
                  comfort, safety, and satisfaction, providing personalized
                  service that exceeds expectations. Embark on your journey
                  today and let CarO be your trusted companion on the road.
                  Start your adventure now!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutContent;
