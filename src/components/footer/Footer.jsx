import "./Footer.css";
import logo_img from "../../assets/images/logo.png";

import {
  FaInstagram,
  FaFacebookF,
  FaTiktok
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <img src={logo_img} alt="Talento11" className="footer-logo" />

        <p className="footer-description">
          Shfaq talentin tënd. Lidhu me skautë,
          akademi dhe klube futbolli.
        </p>

      </div>

      <div className="footer-links">

        <div className="footer-column">
          <h3>Platforma</h3>

          <a href="#">Si funksionon?</a>
          <a href="#">Pse Talento11?</a>
          <a href="#">Lojtarët</a>
        </div>

        <div className="footer-column">
          <h3>Llogaria</h3>

          <a href="#">Hyr</a>
          <a href="#">Regjistrohu</a>
          <a href="#">Skautët</a>
        </div>

        <div className="footer-column">
          <h3>Na ndiq</h3>

          <a href="#">
            <FaInstagram />
            Instagram
          </a>

          <a href="#">
            <FaFacebookF />
            Facebook
          </a>

          <a href="#">
            <FaTiktok />
            TikTok
          </a>

        </div>

        <div className="footer-column">
          <h3>Kontakt</h3>

          <a href="mailto:info@talento11.com">
            info@talento11.com
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Talento11. Të gjitha të drejtat e rezervuara.
      </div>

    </footer>
  );
}

export default Footer;