import "./Scout_Card.css";
import { Link } from "react-router-dom";

function Scout_Card({ scout }) {
  return (
    <div className="scout-card">

      <div className="scout-image">
        FOTO
      </div>

      <div className="scout-content">

        <h2>{scout.name}</h2>

        <p className="scout-club">
          {scout.company}
        </p>

        <div className="scout-info">

          <div className="info-box">
            <span>Shteti</span>
            <h3>{scout.country}</h3>
          </div>

          <div className="info-box">
            <span>Eksperienca</span>
            <h3>{scout.experience}</h3>
          </div>

        </div>

        <div className="players-found">

          <span>Zbuluar lojtarë</span>

          <strong>{scout.playersFound}</strong>

        </div>

        <Link
          to={`/scouts/${scout.id}`}
          className="scout-btn"
        >
          Shiko Profilin
        </Link>

      </div>

    </div>
  );
}

export default Scout_Card;