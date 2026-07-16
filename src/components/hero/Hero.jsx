import "./Hero.css";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";

import PlayerCard from "../player_card/Player_Card";

import { db } from "../../firebase/firebase";

import { ref, get } from "firebase/database";


function Hero() {


const [featuredPlayer, setFeaturedPlayer] = useState(null);


useEffect(() => {


const getFeaturedPlayer = async () => {


const usersRef = ref(db, "users");


const snapshot = await get(usersRef);


if (snapshot.exists()) {


const data = snapshot.val();


const playersArray = Object.keys(data)

.map((uid) => ({ uid, ...data[uid] }))

.filter((user) => user.role === "player");


// Prefer a player with a complete-looking profile (photo + club) so
// the hero showcase looks its best; fall back to any player if none
// like that exist yet.

const complete = playersArray.filter(

(player) => player.profile?.photoURL && player.profile?.club

);


const pool = complete.length > 0 ? complete : playersArray;


if (pool.length > 0) {

setFeaturedPlayer(pool[Math.floor(Math.random() * pool.length)]);

}


}


};


getFeaturedPlayer();


}, []);


return (

<section className="hero">


<div className="hero-glow" aria-hidden="true"></div>


<div className="hero-left">


<span className="hero-badge">

<span className="hero-badge-dot"></span>

Platforma e parë e skautimit në Shqipëri

</span>


<h1>

Shfaq talentin tënd.

<br />

Bëhu <span className="hero-highlight">i dukshëm</span> për skautët.

</h1>


<p>

Krijo profilin tënd, ngarko videot e ndeshjeve<br/>

dhe lidhu me klube dhe skautë.

</p>


<div className="hero-buttons">

<Link to="/register" className="hero-register">

Regjistrohu

</Link>


<ScrollLink

to="si-funksionon"

smooth={true}

duration={500}

offset={50}

className="hero-learn"

>

Mëso më shumë

</ScrollLink>

</div>


<div className="hero-stats">

<div className="hero-stat">

<h3>1,248+</h3>

<p>Lojtarë të regjistruar</p>

</div>

<div className="hero-stat-divider"></div>

<div className="hero-stat">

<h3>60+</h3>

<p>Skautë aktivë</p>

</div>

<div className="hero-stat-divider"></div>

<div className="hero-stat">

<h3>18</h3>

<p>Klube partnere</p>

</div>

</div>


</div>


{featuredPlayer && (

<div className="hero-right">

<div className="hero-phone-frame">

<div className="hero-phone-notch"></div>

<div className="hero-phone-screen">

<div className="hero-img-wrapper">

<PlayerCard player={featuredPlayer} />

</div>

</div>

<div className="hero-phone-home-indicator"></div>

</div>

</div>

)}


</section>

);

}


export default Hero;