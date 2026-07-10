import "./Player_Card.css";
import { Link } from "react-router-dom";


function PlayerCard({player}){


return(

<div className="player-card">


{

player.profile?.photoURL ?

<img
src={player.profile.photoURL}
className="player-image"
alt={`${player.name} ${player.surname}`}
/>

:

<div className="player-image-placeholder">

FOTO

</div>

}


<div className="player-info">


<h3>

{player.name} {player.surname}

</h3>


<span className="player-position">

{player.profile?.position || "Pozicion"}

</span>


<p className="player-club">

🏟 {player.profile?.club || "Pa klub"}

</p>


<p className="player-details">

{player.profile?.age || "-"} vjeç · 🇦🇱 {player.profile?.nationality || "-"}

</p>


<div className="player-stats">


<span>

⚽ {player.stats?.goals || 0} gola

</span>


<span>

🎯 {player.stats?.assists || 0} asist

</span>


</div>


<Link
to={`/players/${player.uid}`}
className="profile-btn"
>

Shiko Profilin

</Link>


</div>


</div>

)


}


export default PlayerCard;