import Logo from "../images/logo.png";

function Navbar() {
  return (
    <>
      <div className="header">
        <section className="headerSide1">
          <a href="#"><img src={Logo} alt="logo"></img></a>
        </section>
        <section className="headerSide2">
          <a href="#">About</a>
          <a href="#">Vehicles</a>
          <a href="#">Our Team</a>
        </section>
        <section className="headerSide2">
          <a href="#">Log In</a>
          <a href="#">Sign Up</a>
        </section>
      </div>
    </>
  );
}

export default Navbar;