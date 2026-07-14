import "./Player_Card.css";
import { Link } from "react-router-dom";
import { LuShield } from "react-icons/lu";


function PlayerCard({player}){


return(

<div className="player-card">


<div className="player-image-wrap">


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


<span className="player-badge player-badge--position">

{player.profile?.position ? player.profile.position.toUpperCase() : "—"}

</span>


<span className="player-badge player-badge--age">

{player.profile?.age ? `${player.profile.age} vjeç` : "Mosha —"}

</span>


</div>


<div className="player-info">


<h3>

{player.name} {player.surname}

</h3>


<div className="player-meta">


<span className="player-club">

<LuShield/> {player.profile?.club || "Pa klub"}

</span>


<span className="player-league">

{player.profile?.league || "Kampionati nuk është vendosur"}

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