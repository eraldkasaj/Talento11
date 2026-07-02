import "./Statistics.css";

function Statistics() {
  return (
    <section className="statistics-page">

      <div className="statistics-container">

        <h1>Statistikat</h1>

        <p>
          Përditëso statistikat e sezonit.
        </p>

        <form className="statistics-form">

          <div className="form-group">
            <label>Sezoni</label>
            <input type="text" placeholder="2025/2026" />
          </div>

          <div className="form-group">
            <label>Ndeshje</label>
            <input type="number" placeholder="0" />
          </div>

          <div className="form-group">
            <label>Gola</label>
            <input type="number" placeholder="0" />
          </div>

          <div className="form-group">
            <label>Asiste</label>
            <input type="number" placeholder="0" />
          </div>

          <div className="form-group">
            <label>Minuta të Luajtura</label>
            <input type="number" placeholder="0" />
          </div>

          <div className="form-group">
            <label>Kartonë të Verdhë</label>
            <input type="number" placeholder="0" />
          </div>

          <div className="form-group">
            <label>Kartonë të Kuq</label>
            <input type="number" placeholder="0" />
          </div>

          <button type="submit">
            Ruaj Statistikat
          </button>

        </form>

      </div>

    </section>
  );
}

export default Statistics;