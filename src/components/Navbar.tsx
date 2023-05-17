import "../styles/Navbar/navbar-style.css";
import Logo from "../images/Navbar/logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [navOn, setNavOn] = useState(false);

  const handleNav = () => {
    setNavOn(!navOn);
  };

  return (
    <>
      <section className="navbar">
        <nav>
          <div
            className={`navbar__mobile-menu ${
              navOn ? "navbar__mobile-menu--open" : ""
            }`}
          >
            <div onClick={handleNav} className="navbar__mobile-menu-close">
              <FontAwesomeIcon icon={faX} />
            </div>
            <ul className="navbar__mobile-menu-items">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Vehicles</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Sign In</a>
              </li>
            </ul>
          </div>

          <div className="navbar">
            <div className="navbar__logo">
              <a href="#">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <ul className="navbar__menu">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Vehicles</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#" className="navbar__menu-sign-in">
                  Sign In
                </a>
              </li>
            </ul>
            <div className="navbar__hamburger" onClick={handleNav}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
