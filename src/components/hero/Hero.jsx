import "./Hero.css";
import hero_img from "../../assets/images/hero.png"

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">
        <h1>
          Shfaq talentin tënd.
          <br />
          Bëhu i dukshëm për skautët.
        </h1>

        <p>
          Krijo profilin tënd, ngarko videot e ndeshjeve<br/>
          dhe lidhu me klube dhe skautë.
        </p>

        <div className="hero-buttons">
          <button className="hero-register">
            Regjistrohu
          </button>

          <button className="hero-learn">
            Mëso më shumë
          </button>
        </div>

      </div>

    <div className="hero-right">
  <img src={hero_img} alt="Hero" className="hero-img" />
   </div>

    </section>
  );
}

export default Hero;