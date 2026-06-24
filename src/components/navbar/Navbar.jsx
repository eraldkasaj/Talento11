import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-box">T</div>
        <h2>
          Talento<span>11</span>
        </h2>
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