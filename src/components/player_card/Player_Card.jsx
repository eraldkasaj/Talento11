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
/>


:


<div className="player-image">

FOTO

</div>


}




<div className="player-info">


<h3>

{player.name} {player.surname}

</h3>



<span className="player-position">

{player.profile?.position}

</span>



<p>

{player.profile?.age} vjeç

</p>




<div className="player-stats">

<span>🎥 0</span>

<span>👁 0</span>

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