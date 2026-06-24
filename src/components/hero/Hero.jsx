import "./Hero.css";

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

        <div className="player-card">

          <h3>Lorik Manaj </h3>

          <p>CB • 18 vjeç</p>

          <div className="player-stats">
            <p>⭐ Highlights</p>
            <p>🎥 12 video</p>
            <p>👀 340 views</p>
          </div>

          <button>
            View Profile
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;