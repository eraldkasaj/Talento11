import "./Register.css";
import { Link } from "react-router-dom";
import logo_img from "../../assets/images/logo.png";

function Register() {
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

        <form className="register-form">

          <input
            type="text"
            placeholder="Emri"
          />

          <input
            type="text"
            placeholder="Mbiemri"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
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
              />
              Lojtar
            </label>

            <label>
              <input
                type="radio"
                name="role"
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