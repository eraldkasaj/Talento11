import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import PlayerCard from "../../components/player_card/Player_Card";
import "./Players.css";
import players from "../../data/players";



function Players() {

const [search, setSearch] = useState("");
const [position, setPosition] = useState("");
const [age, setAge] = useState("");
const [sort, setSort] = useState("");

let filteredPlayers = [...players];

filteredPlayers = filteredPlayers.filter((player) =>
  player.name.toLowerCase().includes(search.toLowerCase())
);

if (position !== "") {
  filteredPlayers = filteredPlayers.filter(
    (player) => player.position === position
  );
}

if (age === "16-18") {
  filteredPlayers = filteredPlayers.filter(
    (player) => player.age >= 16 && player.age <= 18
  );
}

if (age === "19-21") {
  filteredPlayers = filteredPlayers.filter(
    (player) => player.age >= 19 && player.age <= 21
  );
}

if (age === "22+") {
  filteredPlayers = filteredPlayers.filter(
    (player) => player.age >= 22
  );
}

if (sort === "views-desc") {
  filteredPlayers.sort((a, b) => b.views - a.views);
}
if (sort === "views-asc") {
  filteredPlayers.sort((a, b) => a.views - b.views);
}
if (sort === "age-asc") {
  filteredPlayers.sort((a, b) => a.age - b.age);
}
if (sort === "age-desc") {
  filteredPlayers.sort((a, b) => b.age - a.age);
}
if (sort === "videos-desc") {
  filteredPlayers.sort((a, b) => b.videos - a.videos);
}
if (sort === "videos-asc") {
  filteredPlayers.sort((a, b) => a.videos - b.videos);
}


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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="">Pozicioni</option>
            <option value="GK">GK</option>
            <option value="CB">CB</option>
            <option value="LB">LB</option>
            <option value="RB">RB</option>
            <option value="CDM">CDM</option>
            <option value="CM">CM</option>
            <option value="CAM">CAM</option>
            <option value="LW">LW</option>
            <option value="RW">RW</option>
            <option value="ST">ST</option>
          </select>

          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <option value="">Mosha</option>
            <option value="16-18">16-18</option>
            <option value="19-21">19-21</option>
            <option value="22+">22+</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Rendit sipas</option>

            <option value="views-desc">Më të shikuarit ↓</option>
            <option value="views-asc">Më pak të shikuarit ↑</option>

            <option value="age-asc">Mosha (e vogel → e madhe)</option>
            <option value="age-desc">Mosha (e madhe → e vogel)</option>

            <option value="videos-desc">Më shumë video ↓</option>
            <option value="videos-asc">Më pak video ↑</option>
          </select>

        </div>

        <div className="players-grid">

          {filteredPlayers.map((player) => (
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