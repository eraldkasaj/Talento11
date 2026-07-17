import "./Hero.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import heroPhone from "../../assets/images/hero-phone.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-left">
        <span className="hero-badge">
          <span className="hero-badge-dot" />
          Platforma e parë e skautimit në Shqipëri
        </span>

        <h1>
          Shfaq talentin tënd.
          <br />
          Bëhu <span className="hero-highlight">i dukshëm</span> për skautët.
        </h1>

        <p>
          Krijo profilin tënd, ngarko videot e ndeshjeve<br />
          dhe lidhu me klube dhe skautë.
        </p>

        <div className="hero-buttons">
          <Link to="/register" className="hero-register">Regjistrohu</Link>
          <ScrollLink to="si-funksionon" smooth duration={500} offset={50} className="hero-learn">
            Mëso më shumë
          </ScrollLink>
        </div>

        <div className="hero-stats">
          <div className="hero-stat"><h3>1,248+</h3><p>Lojtarë të regjistruar</p></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><h3>60+</h3><p>Skautë aktivë</p></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><h3>18</h3><p>Klube partnere</p></div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-phone-showcase">
          <img className="hero-phone-art" src={heroPhone} alt="Talento11 - profil lojtari" />
        </div>
      </div>
    </section>
  );
}

export default Hero;