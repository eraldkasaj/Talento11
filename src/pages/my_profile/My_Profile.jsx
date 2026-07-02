import "./My_Profile.css";
import { Link } from "react-router-dom";

function My_Profile() {
  return (
    <section className="my-profile">

      <h1>Profili Im</h1>

      <div className="profile-card">

        <div className="profile-image">
          FOTO
        </div>

        <div className="profile-info">

          <div className="info-row">
            <span>Emri</span>
            <h3>Lorik Manaj</h3>
          </div>

          <div className="info-row">
            <span>Klubi</span>
            <h3>Flamurtari FC</h3>
          </div>

          <div className="info-row">
            <span>Pozicioni</span>
            <h3>Centre Forward</h3>
          </div>

          <div className="info-row">
            <span>Mosha</span>
            <h3>19</h3>
          </div>

          <div className="info-row">
            <span>Gjatësia</span>
            <h3>1.87 m</h3>
          </div>

        </div>

      </div>

     <Link to="/edit-profile" className="edit-btn">
        Edito Profilin
    </Link>

    </section>
  );
}

export default My_Profile;