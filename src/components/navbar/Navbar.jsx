import { useState } from "react";

import "./Navbar.css"

import logo_img from "../../assets/images/logo.png"

import { Link as ScrollLink } from "react-scroll";

import { Link } from "react-router-dom";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => setMenuOpen(false);


  return (

    <nav className="navbar">


      <div className="navbar-logo">

        <Link to="/" onClick={closeMenu}>

          <img src={logo_img} alt="Talento11 logo" />

        </Link>

      </div>


      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>

        <li>

          <ScrollLink

            to="si-funksionon"

            smooth={true}

            duration={500}

            offset={50}

            onClick={closeMenu}

          >

            Si funksionon ?

          </ScrollLink>

        </li>


        <li>

          <ScrollLink

            to="pse-talento11"

            smooth={true}

            duration={500}

            offset={50}

            onClick={closeMenu}

          >

            Pse Talento11 ?

          </ScrollLink>

        </li>


        <li>

          <Link to="/player-scout" onClick={closeMenu}>

            Player & Scout

          </Link>

        </li>


        {/* Only visible on mobile, inside the dropdown */}

        <li className="navbar-mobile-buttons">

          <Link to="/login" className="login-btn" onClick={closeMenu}>

            Hyr

          </Link>

          <Link to="/register" className="register-btn" onClick={closeMenu}>

            Regjistrohu

          </Link>

        </li>

      </ul>


      <div className="navbar-buttons">

        <Link to="/login" className="login-btn">

          Hyr

        </Link>

        <Link to="/register" className="register-btn">

          Regjistrohu

        </Link>

      </div>


      <button

        className={`navbar-toggle ${menuOpen ? "open" : ""}`}

        onClick={() => setMenuOpen((prev) => !prev)}

        aria-label="Hap menunë"

      >

        <span></span>

        <span></span>

        <span></span>

      </button>


    </nav>

  );

}


export default Navbar;