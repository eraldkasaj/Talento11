import "./Highlights.css";

function Highlights() {
  return (
    <section className="highlights-page">

      <div className="highlights-container">

        <h1>Highlights</h1>

        <p>
          Menaxho videot e tua.
        </p>

        <div className="video-list">

          <div className="video-card">
            <h3>Video 1</h3>
            <p>https://youtube.com/...</p>
            <button>Fshi</button>
          </div>

          <div className="video-card">
            <h3>Video 2</h3>
            <p>https://youtube.com/...</p>
            <button>Fshi</button>
          </div>

        </div>

        <form className="add-video">

          <input
            type="text"
            placeholder="Vendos linkun e videos..."
          />

          <button>
            Shto Video
          </button>

        </form>

      </div>

    </section>
  );
}

export default Highlights;