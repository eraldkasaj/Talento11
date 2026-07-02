import "./Login.css";
import { Link } from "react-router-dom";
import logo_img from "../../assets/images/logo.png";

function Login() {
  return (
    <section className="login">

      <div className="login-card">

        <img
          src={logo_img}
          alt="Talento11"
          className="login-logo"
        />

        <h1>Mirë se u ktheve!</h1>

        <p>
          Hyr në llogarinë tënde për të vazhduar.
        </p>

        <form className="login-form">

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
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