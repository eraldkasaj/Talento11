import "./Navbar.css"
import logo_img from "../../assets/images/logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
          <img src={logo_img} alt="logo_img" />
      </div>

      <ul className="navbar-links">
        <li>Si funksionon ?</li>
        <li>Pse Talento11 ?</li>
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