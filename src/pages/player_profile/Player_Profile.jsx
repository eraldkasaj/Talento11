import Navbar from "../../components/navbar/Navbar";
import Player_Profile_Card from "../../components/player_profile_card/Player_Profile_Card";
import "./Player_Profile.css";
import { useParams } from "react-router-dom";
import players from "../../data/players";

function Player_Profile() {

  const { id } = useParams();

  const player = players.find(
    (player) => player.id === Number(id)
  );

  return (
    <>
      <Navbar />

      <section className="player-profile">

        <Player_Profile_Card player={player} />

      </section>
    </>
  );
}

export default Player_Profile;