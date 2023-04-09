import "./Navbar.css";
import logo from "./logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="navbar__logo">
        <img src={logo} className="logo" alt="" />
      </div>
      <ul className="navbar__links">
        <li className="navbar__items slideInDown-1">
          <div className="navbar__link">
            <Link id="RouterNavLink" to="/" className="link">
              Accueil
            </Link>
          </div>
        </li>
        <li className="navbar__items slideInDown-2">
          <div href="/" className="navbar__link">
            <Link id="RouterNavLink" to="/simulation" className="link">
              Simulation
            </Link>
          </div>
        </li>
        <li className="navbar__items slideInDown-3">
          <div href="/" className="navbar__link">
            <Link
              id="RouterNavLink"
              to="/Energies_renouvelables"
              className="link"
            >
              Énergies Renouvelables
            </Link>
          </div>
        </li>
        <li className="navbar__items slideInDown-4">
          <div href="#" className="navbar__link">
            <Link id="RouterNavLink" to="/propos" className="link">
              À Propos
            </Link>
          </div>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}

export default Nav;
