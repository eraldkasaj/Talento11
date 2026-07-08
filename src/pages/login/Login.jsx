import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import logo_img from "../../assets/images/logo.png";
import { useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, get } from "firebase/database";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleLogin = async (e) => {

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

    } catch (error) {

      console.log(error.message);

    }

  };


  return (

    <section className="login">

      <div className="login-card">

        <img
          src={logo_img}
          alt="Talento11"
          className="login-logo"
        />


        <h1>Hyr</h1>

        <p>
          Mirë se u ktheve në Talento11.
        </p>


        <form 
          className="login-form"
          onSubmit={handleLogin}
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />


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