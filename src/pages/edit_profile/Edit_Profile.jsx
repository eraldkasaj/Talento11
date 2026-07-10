import "./Edit_Profile.css";

import { useEffect,useState } from "react";

import { auth,db } from "../../firebase/firebase";

import { ref,get,update } from "firebase/database";

import { useNavigate } from "react-router-dom";


function Edit_Profile(){


const navigate = useNavigate();


const [club,setClub] = useState("");
const [league,setLeague] = useState("");
const [position,setPosition] = useState("");
const [bio,setBio] = useState("");
const [height,setHeight] = useState("");
const [weight,setWeight] = useState("");
const [age,setAge] = useState("");
const [nationality,setNationality] = useState("");
const [dominantFoot,setDominantFoot] = useState("");
const [photoURL,setPhotoURL] = useState("");
const [videoURL,setVideoURL] = useState("");

const [uploading,setUploading] = useState(false);





useEffect(()=>{


const getProfile = async()=>{


const user = auth.currentUser;


if(user){


const snapshot = await get(
ref(db,"users/" + user.uid + "/profile")
);


if(snapshot.exists()){


const data = snapshot.val();


setClub(data.club || "");

setLeague(data.league || "");

setPosition(data.position || "");

setBio(data.bio || "");

setHeight(data.height || "");

setWeight(data.weight || "");

setAge(data.age || "");

setNationality(data.nationality || "");

setDominantFoot(data.dominantFoot || "");

setPhotoURL(data.photoURL || "");

setVideoURL(data.videoURL || "");


}


}


}



getProfile();


},[]);










const uploadImage = async(e)=>{


const file = e.target.files[0];


if(!file){

return;

}


const formData = new FormData();


formData.append("file",file);

formData.append("upload_preset","talento11_players");



const response = await fetch(

"https://api.cloudinary.com/v1_1/xqdb7tam/image/upload",

{

method:"POST",

body:formData

}

);



const data = await response.json();


console.log("IMAGE:",data.secure_url);


setPhotoURL(data.secure_url);


}









const uploadVideo = async(e)=>{


const file = e.target.files[0];


if(!file){

return;

}


setUploading(true);



const formData = new FormData();


formData.append("file",file);

formData.append("upload_preset","talento11_players");



try{


const response = await fetch(

"https://api.cloudinary.com/v1_1/xqdb7tam/video/upload",

{

method:"POST",

body:formData

}

);



const data = await response.json();



console.log("VIDEO:",data);



if(data.secure_url){


setVideoURL(data.secure_url);


}



setUploading(false);



}


catch(error){


console.log(error);


setUploading(false);


}


}









const saveProfile = async(e)=>{


e.preventDefault();


try{


const user = auth.currentUser;



await update(

ref(db,"users/" + user.uid + "/profile"),

{


club,

league,

position,

bio,

height,

weight,

age,

nationality,

dominantFoot,

photoURL,

videoURL


}

);



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



<h1>

Ndrysho Profilin

</h1>



<p>

Plotëso informacionet e profilit tënd.

</p>





<form

className="edit-profile-form"

onSubmit={saveProfile}

>






<div className="form-group">


<label>

Foto Profili

</label>



<input

type="file"

accept="image/*"

onChange={uploadImage}

/>



{

photoURL &&


<img

src={photoURL}

className="preview-image"

/>

}


</div>









<div className="form-group">


<label>

Highlight Video

</label>



<input

type="file"

accept="video/*"

onChange={uploadVideo}

/>



{

uploading &&

<p>Duke ngarkuar videon...</p>

}



{

videoURL &&


<video

src={videoURL}

controls

className="preview-video"

>

</video>


}



</div>









<div className="form-group">

<label>Klubi</label>


<input

type="text"

value={club}

onChange={(e)=>setClub(e.target.value)}

/>

</div>








<div className="form-group">

<label>Pozicioni</label>


<input

type="text"

value={position}

onChange={(e)=>setPosition(e.target.value)}

/>

</div>







<div className="form-group">

<label>Liga / Kampionati</label>


<input

type="text"

placeholder="p.sh. Superliga Shqiptare U-19"

value={league}

onChange={(e)=>setLeague(e.target.value)}

/>

</div>







<div className="form-group">

<label>Përshkrimi</label>


<textarea

value={bio}

onChange={(e)=>setBio(e.target.value)}

placeholder="Shkruaj shkurt për stilin tënd të lojës dhe objektivat e tua..."

rows="4"

/>

</div>









<div className="form-group">

<label>Gjatesia</label>


<input

type="number"

min="0"

placeholder="cm"

value={height}

onChange={(e)=>setHeight(e.target.value)}

/>

</div>







<div className="form-group">

<label>Pesha</label>


<input

type="number"

min="0"

placeholder="kg"

value={weight}

onChange={(e)=>setWeight(e.target.value)}

/>

</div>









<div className="form-group">

<label>Mosha</label>


<input

type="number"

value={age}

onChange={(e)=>setAge(e.target.value)}

/>

</div>










<div className="form-group">

<label>Kombesia</label>


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

Të dyja

</option>


</select>



</div>










<button

type="submit"

disabled={uploading}

>


{

uploading ?

"Duke ngarkuar..."

:

"Ruaj Profilin"

}


</button>







</form>


</div>


</section>


)


}



export default Edit_Profile;
