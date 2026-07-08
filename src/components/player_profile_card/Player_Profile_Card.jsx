import "./Player_Profile_Card.css";

import {
LuMapPin,
LuShield,
LuRuler,
LuFootprints,
LuTrophy,
LuGoal,
LuBadgePlus,
LuPlay,
} from "react-icons/lu";


function Player_Profile_Card({ player }){


return(

<section className="player-profile-card">


<div className="profile-header">


{

player.profile?.photoURL ?

<img
src={player.profile.photoURL}
className="profile-image"
/>

:

<div className="profile-image">

FOTO

</div>

}




<div className="profile-info">


<h1>
{player.name} {player.surname}
</h1>


<div className="profile-badge">

{player.profile?.position}

</div>



<p className="profile-age">

{player.profile?.age} vjeç

</p>




<div className="profile-details">



<div className="detail-box">

<LuShield />

<div>

<span>Klubi</span>

<p>
{player.profile?.club}
</p>

</div>

</div>





<div className="detail-box">

<LuMapPin />

<div>

<span>Shteti</span>

<p>
{player.profile?.nationality}
</p>

</div>

</div>





<div className="detail-box">

<LuRuler />

<div>

<span>Gjatësia</span>

<p>
{player.profile?.height} cm
</p>

</div>

</div>






<div className="detail-box">

<LuFootprints />

<div>

<span>Këmba</span>

<p>
{player.profile?.dominantFoot}
</p>

</div>

</div>




</div>


</div>


</div>





<div className="stats-grid">



<div className="stat-card">

<LuTrophy />

<h2>0</h2>

<span>Ndeshje</span>

</div>





<div className="stat-card">

<LuGoal />

<h2>0</h2>

<span>Gola</span>

</div>





<div className="stat-card">

<LuBadgePlus />

<h2>0</h2>

<span>Asiste</span>

</div>





<div className="stat-card">

<LuPlay />

<h2>0</h2>

<span>Video</span>

</div>



</div>





<div className="highlights">


<h2>
Video Highlights
</h2>


<div className="video-placeholder">

Video do të vendosen këtu

</div>


</div>



</section>


)


}


export default Player_Profile_Card;