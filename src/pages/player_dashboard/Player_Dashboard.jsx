import "./Player_Dashboard.css";

import { useEffect,useState } from "react";

import { auth,db } from "../../firebase/firebase";

import { ref,get } from "firebase/database";

import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";



function Player_Dashboard(){


const navigate = useNavigate();


const [userData,setUserData] = useState(null);



useEffect(()=>{


const getUserData = async()=>{


const user = auth.currentUser;


if(user){


const userRef = ref(db,"users/" + user.uid);


const snapshot = await get(userRef);


if(snapshot.exists()){


setUserData(snapshot.val());


}


}


}



getUserData();


},[]);





const logout = async()=>{


try{


await signOut(auth);


navigate("/login");


}


catch(error){


console.log(error.message);


}


}






return(


<section className="player-dashboard">


<h1>Paneli i Lojtarit</h1>



{


userData && (


<h2>

Mirësevjen {userData.name} {userData.surname}

</h2>


)

}



<button onClick={logout}>

Dil

</button>





<div className="dashboard-cards">





<div 
className="dashboard-card"
onClick={()=>navigate("/my-profile")}
>


<h3>👤 Profili im</h3>


<p>

Shiko profilin tënd.

</p>


</div>






<div 
className="dashboard-card"
onClick={()=>navigate("/statistics")}
>


<h3>📊 Statistics</h3>


<p>

Shiko statistikat.

</p>


</div>






<div 
className="dashboard-card"
onClick={()=>navigate("/highlights")}
>


<h3>🎥 Highlights</h3>


<p>

Menaxho videot.

</p>


</div>







<div 
className="dashboard-card"
onClick={()=>navigate("/settings")}
>


<h3>⚙️ Cilësimet</h3>


<p>

Menaxho llogarinë.

</p>


</div>




</div>



</section>


)


}



export default Player_Dashboard;