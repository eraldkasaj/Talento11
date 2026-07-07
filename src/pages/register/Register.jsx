import "./Register.css";
import { Link } from "react-router-dom";
import logo_img from "../../assets/images/logo.png";
import { useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";


function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");


  const handleRegister = async (e) => {

    e.preventDefault();

    try {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      await set(ref(db, "users/" + user.uid), {
        name: name,
        surname: surname,
        email: email,
        role: role,
        createdAt: new Date().toISOString()
      });

      console.log("User u krijua:", user);

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="register">
      <div className="register-card">
        <img
          src={logo_img}
          alt="Talento11"
          className="register-logo"
        />

        <h1>Krijo Llogari</h1>
        <p>
          Bashkohu me komunitetin Talento11.
        </p>




        <form
          className="register-form"
          onSubmit={handleRegister}
        >



          <input
            type="text"
            placeholder="Emri"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />



          <input
            type="text"
            placeholder="Mbiemri"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />



          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />



          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />



          <input
            type="password"
            placeholder="Konfirmo Password"
          />




          <div className="role-select">


            <label>

              <input
                type="radio"
                name="role"
                value="player"
                onChange={(e) => setRole(e.target.value)}
              />

              Lojtar

            </label>



            <label>

              <input
                type="radio"
                name="role"
                value="scout"
                onChange={(e) => setRole(e.target.value)}
              />

              Scout

            </label>


          </div>




          <button type="submit">

            Regjistrohu

          </button>



        </form>





        <span>

          Ke tashmë llogari?

          <Link to="/login">

            Hyr

          </Link>


        </span>




      </div>


    </section>


  );


}



export default Register;