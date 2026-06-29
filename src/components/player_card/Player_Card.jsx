import "./Player_Card.css";

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

        <button>Shiko Profilin</button>

      </div>

    </div>
  );
}

export default PlayerCard;