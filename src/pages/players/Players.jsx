import Navbar from "../../components/navbar/Navbar";
import PlayerCard from "../../components/player_card/Player_Card";
import "./Players.css";
import players from "../../data/players";

function Players() {
  return (
    <>
      <Navbar />

      <section className="players-page">

        <div className="players-header">
          <h1>Lojtarët</h1>

          <p>
            Zbulo talentet e platformës Talento11.
          </p>
        </div>

        <div className="players-filters">

          <input
            type="text"
            placeholder="🔍 Kërko lojtar..."
          />

          <select>
            <option>Pozicioni</option>
            <option>GK</option>
            <option>CB</option>
            <option>LB</option>
            <option>RB</option>
            <option>CDM</option>
            <option>CM</option>
            <option>CAM</option>
            <option>LW</option>
            <option>RW</option>
            <option>ST</option>
          </select>

          <select>
            <option>Mosha</option>
            <option>16-18</option>
            <option>19-21</option>
            <option>22+</option>
          </select>

          <select>
            <option>Rendit sipas</option>
            <option>Më të shikuarit</option>
            <option>Mosha</option>
            <option>Video</option>
          </select>

        </div>

        <div className="players-grid">

          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
            />
          ))}

        </div>

      </section>
    </>
  );
}

export default Players;