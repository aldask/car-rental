import "../styles/Header/header-style.css";
import Logo from "../images/Header/logo.png";

function Header() {
  return (
    <>
      <section className="header">
        <div className="header__side1">
          <a href="#">
            <img src={Logo} alt="logo"></img>
          </a>
        </div>
        <div className="header__side2">
          <a href="#" className="header__link">About</a>
          <a href="#" className="header__link">Vehicles</a>
          <a href="#" className="header__link">Our Team</a>
          <a href="#" className="header__link header__link--active">Customer Area</a>
        </div>
      </section>
    </>
  );
}

export default Header;
