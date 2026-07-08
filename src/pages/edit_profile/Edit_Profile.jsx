import "./Edit_Profile.css";
import { useState } from "react";
import { auth,db } from "../../firebase/firebase";
import { ref,update } from "firebase/database";
import { useNavigate } from "react-router-dom";


function Edit_Profile(){


const navigate = useNavigate();


const [club,setClub] = useState("");
const [position,setPosition] = useState("");
const [height,setHeight] = useState("");
const [age,setAge] = useState("");
const [nationality,setNationality] = useState("");
const [dominantFoot,setDominantFoot] = useState("");



const saveProfile = async(e)=>{

e.preventDefault();


try{


const user = auth.currentUser;


await update(ref(db,"users/" + user.uid + "/profile"),{

club,
position,
height,
age,
nationality,
dominantFoot

});


console.log("Profili u perditesua");


navigate("/player-dashboard");


}


catch(error){


console.log(error.message);


}


}




return(

<section className="edit-profile-page">


<div className="edit-profile-container">


<h1>Ndrysho Profilin</h1>


<p>
Ploteso informacionet e profilit tend.
</p>



<form 
className="edit-profile-form"
onSubmit={saveProfile}
>



<div className="form-group">

<label>
Klubi
</label>


<input
type="text"
value={club}
onChange={(e)=>setClub(e.target.value)}
/>


</div>






<div className="form-group">

<label>
Pozicioni
</label>


<input
type="text"
value={position}
onChange={(e)=>setPosition(e.target.value)}
/>


</div>






<div className="form-group">

<label>
Gjatesia
</label>


<input
type="text"
value={height}
onChange={(e)=>setHeight(e.target.value)}
/>


</div>






<div className="form-group">

<label>
Mosha
</label>


<input
type="number"
value={age}
onChange={(e)=>setAge(e.target.value)}
/>


</div>







<div className="form-group">

<label>
Kombesia
</label>


<input
type="text"
value={nationality}
onChange={(e)=>setNationality(e.target.value)}
/>


</div>








<div className="form-group">

<label>
Kemba dominante
</label>


<select

value={dominantFoot}

onChange={(e)=>setDominantFoot(e.target.value)}

>


<option value="">
Zgjidh
</option>


<option value="Right">
E djathta
</option>


<option value="Left">
E majta
</option>


<option value="Both">
Te dyja
</option>


</select>


</div>








<button type="submit">

Ruaj Profilin

</button>




</form>


</div>


</section>


)


}



export default Edit_Profile;