import "../../pages/player_dashboard/Player_Dashboard.css";

import { useEffect,useState } from "react";

import { useParams } from "react-router-dom";

import { db } from "../../firebase/firebase";

import { ref,get } from "firebase/database";

import {
LuFootprints,
LuMapPin,
LuPlay,
LuShield
} from "react-icons/lu";


const statItems=[

["matches","Ndeshje"],
["goals","Gola"],
["assists","Asist"],
["yellowCards","Kartona të verdhë"],
["redCards","Kartona të kuq"]

];


const detailedStatItems=[...statItems,["minutes","Minuta të luajtura"]];


const getPitchZone=(position)=>{


const pos=position?.trim().toUpperCase();


if(["GK","GOALKEEPER","PORTIER"].includes(pos)) return "goalkeeper";

if(["CB","LB","RB","DEF"].includes(pos)) return "defender";

if(["CM","CDM","CAM","MID"].includes(pos)) return "midfielder";


return "forward";


}



function Player_Profile(){


const {id}=useParams();


const [player,setPlayer]=useState(null);


const [activeTab,setActiveTab]=useState("Përmbledhje");



useEffect(()=>{


const getPlayer=async()=>{


const snapshot=await get(ref(db,`users/${id}`));


if(snapshot.exists()){

setPlayer(snapshot.val());

}


}


getPlayer();


},[id]);



if(!player){

return <p>Duke ngarkuar...</p>

}



const profile=player.profile || {};

const stats=player.stats || {};


const fullName=`${player.name} ${player.surname}`;


const club=profile.club || "Klubi nuk është vendosur";


const league=profile.league || "Superliga Shqiptare U-19";


const pitchZone=getPitchZone(profile.position);


return(


<main className="talento-player-dashboard">


<section className="talento-player-panel">



<header className="talento-player-hero">


<div className="talento-player-photo">


{

profile.photoURL ?

<img src={profile.photoURL} alt={fullName}/>

:

<span>{fullName.slice(0,2)}</span>


}


</div>




<div className="talento-player-summary">



<div className="talento-player-name-row">


<h1>{fullName}</h1>


<span className="talento-player-verified">

Verified

</span>


</div>



<p className="talento-player-club">

<LuShield/> {club}

</p>



<p className="talento-player-league">

🇦🇱 {league}

</p>



<div className="talento-player-facts">


<div>

<strong>{profile.age || "—"}</strong>

<span>Mosha</span>

</div>



<div>

<strong>{profile.height ? `${profile.height} cm`:"—"}</strong>

<span>Lartësia</span>

</div>



<div>

<strong>{profile.position || "—"}</strong>

<span>Pozicioni</span>

</div>




<div>

<strong><LuMapPin/> {profile.nationality || "—"}</strong>

<span>Kombësia</span>

</div>



<div>

<strong><LuFootprints/> {profile.dominantFoot || "—"}</strong>

<span>Këmba e preferuar</span>

</div>



<div>

<strong>{profile.weight ? `${profile.weight} kg`:"—"}</strong>

<span>Pesha</span>

</div>



</div>



</div>


</header>





<nav className="talento-player-tabs">


{

["Përmbledhje","Statistikat","Media"].map(tab=>(


<button

key={tab}

className={activeTab===tab ? "is-active":""}

onClick={()=>setActiveTab(tab)}

>

{tab}

</button>


))

}


</nav>





{

activeTab==="Përmbledhje" &&


<>


<section className="talento-player-about">


<div>

<h2>Rreth lojtarit</h2>


<p>

{profile.bio || "Nuk ka përshkrim akoma."}

</p>


</div>



<div className={`talento-player-pitch talento-player-pitch--${pitchZone}`}>

<span/>

</div>



</section>




<section className="talento-player-statistics">


<div className="talento-player-section-heading">

<h2>Statistikat</h2>

<span>{stats.season || "Sezoni aktual"}</span>

</div>




<div className="talento-player-stat-grid">


{

statItems.map(([key,label])=>(


<div key={key}>


<span>{label}</span>


<strong>{stats[key] || 0}</strong>


</div>


))


}


</div>



</section>


</>


}




{


activeTab==="Statistikat" &&


<section className="talento-player-tab-dashboard">


<div className="talento-player-detailed-stat-grid">


{


detailedStatItems.map(([key,label])=>(


<div key={key}>


<span>{label}</span>


<strong>{stats[key] || 0}</strong>


</div>


))


}


</div>


</section>


}





{


activeTab==="Media" &&


<section className="talento-player-tab-dashboard">


<h2>Highlights</h2>


{

profile.videoURL ?


<video

src={profile.videoURL}

controls

className="talento-player-video"

/>


:


<div className="talento-player-empty-video">

<LuPlay/>

<span>Nuk ka video</span>

</div>


}


</section>


}




</section>


</main>


)


}


export default Player_Profile;