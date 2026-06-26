import "./Lojtaret_Ne_Fokus.css";

function Lojtaret_Ne_Fokus() {
  return (
    <section className="featured-players">

      <div className="featured-header">
        <h2>Lojtarët në Fokus</h2>

        <p>
          Lojtarë që po tërheqin vëmendjen e
          skautëve, akademive dhe klubeve.
        </p>
      </div>

      <div className="featured-grid">

        <div className="featured-card">

          <div className="player-image">
            FOTO
          </div>

          <h3>Klajdi Salaj</h3>

          <span className="player-position">
            CB
          </span>

          <p className="player-age">
            18 vjeç
          </p>

          <div className="player-stats">
            <span>🎥 12 Video</span>
            <span>👁 2.4K Views</span>
          </div>

          <button>
            Shiko Profilin
          </button>

        </div>

        <div className="featured-card">

          <div className="player-image">
            FOTO
          </div>

          <h3>Denis Hoxha</h3>

          <span className="player-position">
            ST
          </span>

          <p className="player-age">
            17 vjeç
          </p>

          <div className="player-stats">
            <span>🎥 8 Video</span>
            <span>👁 1.8K Views</span>
          </div>

          <button>
            Shiko Profilin
          </button>

        </div>

        <div className="featured-card">

          <div className="player-image">
            FOTO
          </div>

          <h3>Enea Dema</h3>

          <span className="player-position">
            CM
          </span>

          <p className="player-age">
            19 vjeç
          </p>

          <div className="player-stats">
            <span>🎥 15 Video</span>
            <span>👁 3.1K Views</span>
          </div>

          <button>
            Shiko Profilin
          </button>

        </div>

      </div>

    </section>
  );
}

export default Lojtaret_Ne_Fokus;