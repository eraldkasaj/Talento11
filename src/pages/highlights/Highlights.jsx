import "./Highlights.css";

import { useState } from "react";

import { auth,db } from "../../firebase/firebase";

import { ref,push,set } from "firebase/database";



function Highlights(){


const [title,setTitle] = useState("");

const [videoLink,setVideoLink] = useState("");




const addVideo = async(e)=>{


e.preventDefault();


try{


const user = auth.currentUser;


const newVideoRef = push(ref(db,"highlightRequests"));



await set(newVideoRef,{

playerUid:user.uid,

title:title,

videoLink:videoLink,

status:"pending",

createdAt:new Date().toISOString()

});



console.log("Video u dergua per kontroll");


setTitle("");

setVideoLink("");



}


catch(error){


console.log(error.message);


}



}





return(

<section className="highlights-page">


<div className="highlights-container">



<h1>

Highlights

</h1>



<p>

Dërgo videot e tua për kontroll.

</p>





<form 
className="add-video"
onSubmit={addVideo}
>




<input

type="text"

placeholder="Titulli videos"

value={title}

onChange={(e)=>setTitle(e.target.value)}

/>




<input

type="text"

placeholder="Google Drive link..."

value={videoLink}

onChange={(e)=>setVideoLink(e.target.value)}

/>





<button type="submit">

Dërgo Video

</button>




</form>




</div>



</section>


)


}



export default Highlights;