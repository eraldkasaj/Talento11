import { useEffect,useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import PlayerCard from "../../components/player_card/Player_Card";
import "./Players.css";

import { db } from "../../firebase/firebase";
import { ref,get } from "firebase/database";



function Players(){


const [players,setPlayers] = useState([]);

const [search,setSearch] = useState("");
const [position,setPosition] = useState("");
const [age,setAge] = useState("");
const [sort,setSort] = useState("");




useEffect(()=>{


const getPlayers = async()=>{


const usersRef = ref(db,"users");


const snapshot = await get(usersRef);



if(snapshot.exists()){


const data = snapshot.val();



const playersArray = Object.keys(data).map((uid)=>({

uid,
...data[uid]

}))
.filter((user)=>user.role==="player");



setPlayers(playersArray);


}


}



getPlayers();



},[]);







let filteredPlayers = [...players];



filteredPlayers = filteredPlayers.filter((player)=>

(player.name + " " + player.surname)
.toLowerCase()
.includes(search.toLowerCase())

);




if(position !== ""){

filteredPlayers = filteredPlayers.filter(

(player)=>player.profile?.position === position

);

}



if(age==="16-18"){

filteredPlayers = filteredPlayers.filter(

(player)=>
Number(player.profile?.age)>=16 &&
Number(player.profile?.age)<=18

);

}



if(age==="19-21"){

filteredPlayers = filteredPlayers.filter(

(player)=>
Number(player.profile?.age)>=19 &&
Number(player.profile?.age)<=21

);

}



if(age==="22+"){

filteredPlayers = filteredPlayers.filter(

(player)=>
Number(player.profile?.age)>=22

);

}



if(sort==="age-asc"){

filteredPlayers.sort(

(a,b)=>a.profile?.age-b.profile?.age

);

}


if(sort==="age-desc"){

filteredPlayers.sort(

(a,b)=>b.profile?.age-a.profile?.age

);

}






return(

<>


<Navbar/>



<section className="players-page">



<div className="players-header">

<h1>Lojtarët</h1>


<p>
Zbulo talentet e platformës Talento11.
</p>


</div>






<div className="players-filters">



<input

type="text"

placeholder="🔍 Kërko lojtar..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>





<select

value={position}

onChange={(e)=>setPosition(e.target.value)}

>


<option value="">
Pozicioni
</option>

<option value="GK">GK</option>

<option value="CB">CB</option>

<option value="LB">LB</option>

<option value="RB">RB</option>

<option value="CM">CM</option>

<option value="ST">ST</option>


</select>






<select

value={age}

onChange={(e)=>setAge(e.target.value)}

>


<option value="">
Mosha
</option>

<option value="16-18">
16-18
</option>

<option value="19-21">
19-21
</option>

<option value="22+">
22+
</option>


</select>







<select

value={sort}

onChange={(e)=>setSort(e.target.value)}

>

<option value="">
Rendit sipas
</option>


<option value="age-asc">
Mosha ↑
</option>


<option value="age-desc">
Mosha ↓
</option>


</select>



</div>







<div className="players-grid">


{

filteredPlayers.map((player)=>(


<PlayerCard

key={player.uid}

player={player}

/>


))


}


</div>



</section>



</>

)


}



export default Players;