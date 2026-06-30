import "./Scout_Profile_Card.css";

import {
  LuMapPin,
  LuBuilding2,
  LuStar,
  LuUsers,
  LuTarget,
  LuBadgeCheck,
} from "react-icons/lu";

function Scout_Profile_Card({ scout }) {
  return (
    <section className="scout-profile-card">

      <div className="scout-top">

        <div className="scout-image">
          FOTO
        </div>

        <div className="scout-info">

          <h1>{scout.name}</h1>

          <span className="scout-role">
            Scout Profesional
          </span>

          <div className="scout-details">

            <div className="detail-card">
              <LuBuilding2 />

              <div>
                <span>Klubi</span>
                <h3>{scout.company}</h3>
              </div>
            </div>

            <div className="detail-card">
              <LuMapPin />

              <div>
                <span>Shteti</span>
                <h3>{scout.country}</h3>
              </div>
            </div>

            <div className="detail-card">
              <LuStar />

              <div>
                <span>Eksperienca</span>
                <h3>{scout.experience}</h3>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className="scout-stats">

        <div className="stat-card">
          <LuUsers />
          <h2>{scout.playersFound}</h2>
          <span>Lojtarë të zbuluar</span>
        </div>

        <div className="stat-card">
          <LuTarget />
          <h2>180</h2>
          <span>Ndeshje ndjekur</span>
        </div>

        <div className="stat-card">
          <LuBadgeCheck />
          <h2>14</h2>
          <span>Klube partnere</span>
        </div>

      </div>

      <div className="about-scout">

        <h2>Rreth Scout-it</h2>

        <p>
          Scout profesionist me eksperiencë në identifikimin e talenteve të rinj.
          Bashkëpunon me akademi dhe klube për të zbuluar lojtarë me potencial
          dhe për t'i prezantuar tek ekipet profesionale.
        </p>

      </div>

    </section>
  );
}

export default Scout_Profile_Card;