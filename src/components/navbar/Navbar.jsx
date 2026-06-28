import "./Navbar.css"
import logo_img from "../../assets/images/logo.png"
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
          <img src={logo_img} alt="logo_img" />
      </div>

      <ul className="navbar-links">
        <li>
          <Link
      to="si-funksionon"
      smooth={true}
      duration={500}
      offset={50}
          >
      Si funksionon ?
         </Link>
        </li>
        <li>
          <Link
      to="pse-talento11"
      smooth={true}
      duration={500}
      offset={50}
        >
      Pse Talento11 ?
        </Link>
      </li>
        <li>Player & Scout</li>
      </ul>

      <div className="navbar-buttons">
        <button className="signin-btn">Hyr</button>
        <button className="signup-btn">Rregjistrohu</button>
      </div>
    </nav>
  );
}

export default Navbar;