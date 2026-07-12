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


// Every individual position the pitch can highlight. Keys are the canonical
// codes used both by the CSS classes (lowercased) and by getPositionName.
// Kept identical to Player_Dashboard.jsx so both pages stay in sync.
const PITCH_POSITIONS=[

"GK",
"CB",
"LB",
"RB",
"LWB",
"RWB",
"CDM",
"CM",
"CAM",
"LM",
"RM",
"LW",
"RW",
"CF",
"ST",

];


// Aliases so odd/legacy values stored in Firebase (or synonyms like "DF",
// "MID", "GOALKEEPER") still resolve to one of the exact codes above instead
// of falling back to a generic zone.
const POSITION_ALIASES={

GOALKEEPER:"GK",
PORTIER:"GK",
DF:"CB",
DEF:"CB",
DEFENDER:"CB",
DM:"CDM",
MID:"CM",
MIDFIELDER:"CM",
AM:"CAM",
FW:"ST",
FORWARD:"ST",
STRIKER:"ST",

};


// Resolves any stored position value to one of the exact codes in
// PITCH_POSITIONS (GK, LB, CB, RB, LWB, RWB, CDM, CM, CAM, LM, RM, LW, RW,
// CF, ST). Falls back to "ST" only when the value is missing or unrecognized.
const getPitchPosition=(position)=>{


const normalizedPosition=position?.trim().toUpperCase();


if(!normalizedPosition) return "ST";


if(PITCH_POSITIONS.includes(normalizedPosition)) return normalizedPosition;


return POSITION_ALIASES[normalizedPosition] || "ST";


}


const getPositionName=(position)=>{

const normalizedPosition=position?.trim().toUpperCase();


switch(normalizedPosition){

case "GK":
return "Portier";

case "CB":
return "Qendër Mbrojtës";

case "LB":
return "Mbrojtës i Majtë";

case "RB":
return "Mbrojtës i Djathtë";

case "LWB":
return "Mbrojtës Krahu i Majtë";

case "RWB":
return "Mbrojtës Krahu i Djathtë";

case "CDM":
return "Mesfushor Defensiv";

case "CM":
return "Mesfushor Qendre";

case "CAM":
return "Mesfushor Ofensiv";

case "LM":
return "Mesfushor i Majtë";

case "RM":
return "Mesfushor i Djathtë";

case "LW":
return "Sulmues Krahu i Majtë";

case "RW":
return "Sulmues Krahu i Djathtë";

case "CF":
return "Qendër Sulmues";

case "ST":
return "Sulmues";

default:
return "—";

}

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


const pitchPosition=getPitchPosition(profile.position);


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

<strong>{getPositionName(profile.position)}</strong>

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



<div className={`talento-player-pitch talento-player-pitch--${pitchPosition.toLowerCase()}`}>

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