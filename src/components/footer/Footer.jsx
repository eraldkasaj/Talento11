import "./Footer.css";
import logo_img from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-top">
          <Link to="/" aria-label="Talento11 - Faqja kryesore">
            <img src={logo_img} alt="Talento11" className="footer-logo" />
          </Link>

          <p className="footer-description">
            Shfaq talentin tënd. Lidhu me scoutë, akademi dhe klube futbolli.
          </p>

          <span className="footer-tagline">TALENTI YT, MUNDËSIA JOTE</span>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Platforma</h3>
            <Link to="/#si-funksionon">Si funksionon?</Link>
            <Link to="/#pse-talento11">Pse Talento11?</Link>
            <Link to="/players">Lojtarët</Link>
          </div>

          <div className="footer-column">
            <h3>Llogaria</h3>
            <Link to="/login">Hyr</Link>
            <Link to="/register">Regjistrohu</Link>
            <Link to="/scouts">Scoutët</Link>
          </div>

          <div className="footer-column">
            <h3>Na ndiq</h3>
            <a href="#instagram" aria-label="Talento11 në Instagram"><FaInstagram /> Instagram</a>
            <a href="#facebook" aria-label="Talento11 në Facebook"><FaFacebookF /> Facebook</a>
            <a href="#tiktok" aria-label="Talento11 në TikTok"><FaTiktok /> TikTok</a>
          </div>

          <div className="footer-column footer-contact">
            <h3>Kontakt</h3>
            <a href="mailto:info@talento11.com">info@talento11.com</a>
            <p>Për pyetje, sugjerime ose bashkëpunime.</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Talento11. Të gjitha të drejtat e rezervuara.</span>
        <span>Ndërtuar për futbollin shqiptar.</span>
      </div>
    </footer>
  );
}

export default Footer;
