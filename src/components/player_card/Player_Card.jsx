import "./Player_Card.css";
import { Link } from "react-router-dom";

function PlayerCard({player}) {
  return (
    <div className="player-card">

      <div className="player-image">
        FOTO
      </div>

      <div className="player-info">

        <h3>{player.name}</h3>

        <span className="player-position">
          {player.position}
        </span>

        <p>{player.age}</p>

        <div className="player-stats">
          <span>🎥 {player.videos}</span>
          <span>👁 {player.views}</span>
        </div>

        <Link
          to={`/players/${player.id}`}
          className="profile-btn"
        >
          Shiko Profilin
       </Link>

      </div>

    </div>
  );
}

export default PlayerCard;