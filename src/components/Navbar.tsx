import Logo from "../images/logo.png";

function Navbar() {
  return (
    <>
      <section className="header">
        <div className="headerSide1">
          <a href="#"><img src={Logo} alt="logo"></img></a>
        </div>
        <div className="headerSide2">
          <a href="#">About</a>
          <a href="#">Vehicles</a>
          <a href="#">Our Team</a>
          <a href="#">Customer Area</a>
        </div>
      </section>
    </>
  );
}

export default Navbar;