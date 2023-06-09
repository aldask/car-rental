import "../styles/VehiclesFleet/vehicles-style.css";
import { cars } from "../Data/cars";

function VehiclesFleet() {
  return (
    <section className="vehicles">
      <div className="container">
        <div className="vehicles__box">
          <div className="vehicles__title">
            <h2>Our Cars</h2>
          </div>
          <div className="vehicles__fleet">
            {cars.map((car) => (
              <div key={car.label} className="vehicles__fleet-box">
                <div className="vehicles__fleet-box-img-box">
                  <img src={car.img} alt="fleet car" />
                </div>
                <div className="vehicles__box-data">
                  <p className="vehicles__box-data-make">{car.manufacturer}</p>
                  <p className="vehicles__box-data-model">{car.model}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VehiclesFleet;
