import Logo from "../images/logo.png";

function Navbar() {
  return (
    <>
      <div className="header">
        <section className="headerSide1">
          <a href="aa"><img src={Logo} alt="logo"></img></a>
        </section>
        <section className="headerSide2">
          <a href="aa">About</a>
          <a href="aa">Vehicles</a>
          <a href="aa">Our Team</a>
        </section>
        <section className="headerSide2">
          <a href="aa">Sign Up</a>
          <a href="aa">Log In</a>
        </section>
      </div>
    </>
  );
}

export default Navbar;