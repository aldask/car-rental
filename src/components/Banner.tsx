import "../styles/Banner/banner-style.css";

function Banner() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner__box">
            <h2>
              Save big with Car<span className="blue strong">O</span> car
              rental!
            </h2>
            <p>
              Top Cities. <span className="blue strong">24/7</span> Support!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
