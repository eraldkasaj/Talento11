import "./Navbar.css"
import logo_img from "../../assets/images/logo.png"
import { Link as ScrollLink} from "react-scroll";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
        <Link to='/'>
         <img src={logo_img} alt="logo_img" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <ScrollLink
      to="si-funksionon"
      smooth={true}
      duration={500}
      offset={50}
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
        >
      Pse Talento11 ?
        </ScrollLink>
      </li>
        <Link to="/player-scout">
        Player & Scout
        </Link>
      </ul>

      <div className="navbar-buttons">
        <Link to="/login" className="login-btn">
            Hyr
        </Link>
       <Link to="/register" className="register-btn">
          Regjistrohu
      </Link>
      </div>
    </nav>
  );
}

export default Navbar;