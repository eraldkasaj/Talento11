import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import logo_img from "../../assets/images/logo.png";
import { useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, get } from "firebase/database";
import { LuArrowLeft } from "react-icons/lu";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");


  const navigate = useNavigate();


  const handleLogin = async (e) => {

    setError("");

    e.preventDefault();

    try {

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;


      const userRef = ref(db, "users/" + user.uid);

      const snapshot = await get(userRef);


      if (snapshot.exists()) {

        const userData = snapshot.val();

        console.log(userData);


        if (userData.role === "player") {

          navigate("/player-dashboard");

        } else if (userData.role === "scout") {

          navigate("/scout-dashboard");

        }

      }

    } catch(error){

if(error.code==="auth/invalid-email"){

setError("Email i pavlefshëm.");

}

else if(error.code==="auth/invalid-credential"){

setError("Email ose password i gabuar.");

}

else if(error.code==="auth/user-disabled"){

setError("Kjo llogari është çaktivizuar.");

}

else if(error.code==="auth/too-many-requests"){

setError("Shumë tentativa. Provo përsëri pas pak minutash.");

}

else{

setError("Ndodhi një gabim. Provo përsëri.");

}

}

  };


  return (

    <section className="login">

      <Link to="/" className="login-back">
        <LuArrowLeft /> Kthehu në faqen kryesore
      </Link>

      <div className="login-card">

        <Link to="/">
          <img
            src={logo_img}
            alt="Talento11"
            className="login-logo"
          />
        </Link>


        <h1>Hyr</h1>

        <p>
          Mirë se u ktheve në Talento11.
        </p>

           {error && (

          <p className="login-error">

          {error}

          </p>

          )}

         

        <form 
          className="login-form"
          onSubmit={handleLogin}
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value);setError("");}}
            autoComplete="email"
            />

            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value);setError("");}}
            autoComplete="current-password"
            />

          <div className="forgot-password">

          <Link to="/forgot-password">

          Keni harruar password-in?

          </Link>

          </div>


          <button type="submit">
            Hyr
          </button>


        </form>


        <span>

          Nuk ke llogari?

          <Link to="/register">
            Regjistrohu
          </Link>

        </span>


      </div>

    </section>

  );

}

export default Login;