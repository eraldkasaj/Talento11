import "./Player_Dashboard.css";

import { useEffect,useState } from "react";

import { auth,db } from "../../firebase/firebase";

import { ref,get } from "firebase/database";

import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";

import {
LuPencil,
LuLogOut,
LuPlay
} from "react-icons/lu";



function Player_Dashboard(){


const navigate = useNavigate();


const [userData,setUserData] = useState(null);




useEffect(()=>{


const getUser = async()=>{


const user = auth.currentUser;


if(user){


const snapshot = await get(ref(db,"users/" + user.uid));


if(snapshot.exists()){


setUserData(snapshot.val());


}


}


}



getUser();


},[]);






const logout = async()=>{


await signOut(auth);


navigate("/login");


}









return(


<section className="player-dashboard">



<div className="player-card">






<div className="profile-actions">


<button onClick={()=>navigate("/edit-profile")}>

<LuPencil/>

Edit

</button>



<button onClick={logout}>

<LuLogOut/>

Logout

</button>



</div>










<div className="profile-top">





<div className="photo-box">


{

userData?.profile?.photoURL ?


<img src={userData.profile.photoURL}/>


:


<span>Foto</span>


}


</div>










<div className="player-details">



<div className="name-row">


<h1>

{userData?.name} {userData?.surname}

</h1>



<span>

Verified

</span>



</div>







<p className="club">

🏟️ {userData?.profile?.club}

</p>










<div className="details-grid">






<div>


<strong>

{userData?.profile?.age}

</strong>


<p>Mosha</p>


</div>






<div>


<strong>

{userData?.profile?.height} cm

</strong>


<p>Lartësia</p>


</div>







<div>


<strong>

{userData?.profile?.position}

</strong>


<p>Pozicioni</p>


</div>







<div>


<strong>

{userData?.profile?.nationality}

</strong>


<p>Kombësia</p>


</div>






<div>


<strong>

{userData?.profile?.dominantFoot}

</strong>


<p>Këmba</p>


</div>






</div>




</div>






</div>









<div className="profile-tabs">


<p className="active">

Përmbledhje

</p>


<p>Statistikat</p>


<p>Media</p>


<p>Karriera</p>


</div>









<div className="about">


<h3>

Rreth lojtarit

</h3>


<p>

Profili zyrtar i lojtarit në Talento11.
Këtu shfaqen të dhënat sportive dhe karriera.

</p>


</div>










<div className="season">


<h3>

Statistikat (Sezoni aktual)

</h3>




<div className="season-grid">


<div>

<strong>0</strong>

<p>Ndeshje</p>

</div>



<div>

<strong>0</strong>

<p>Gola</p>

</div>



<div>

<strong>0</strong>

<p>Asist</p>

</div>



<div>

<strong>0</strong>

<p>Kartona</p>

</div>


</div>




</div>




<div className="highlight-section">


<h3>

Highlights

</h3>



<div className="highlight-grid">


{


userData?.profile?.videoURL ?


<video

src={userData.profile.videoURL}

controls

className="player-video"

>


</video>


:


<div className="empty-video">


<LuPlay/>


<p>

Nuk ka video akoma

</p>


</div>


}



</div>



</div>









</div>



</section>


)


}



export default Player_Dashboard;