import "./Pse_Talento11.css";
import mockup_img from "../../assets/images/mockup.png"

function Pse_Talento11() {
  return (
    <section className="pse-talento11">

      <div className="pse-header">
        <h2>Pse Talento11 ?</h2>
        <p>Platforma që lidh talentin me mundësinë</p>
      </div>

      <div className="pse-cards">

        <div className="pse-card">
          <div className="card-icon">⚽</div>

          <h3>Profil Profesional</h3>

          <p>
            Krijo një profil futbollistik të plotë me
            informacionet dhe statistikat e tua.
          </p>
        </div>

        <div className="pse-card">
          <div className="card-icon">🎥</div>

          <h3>Video Highlights</h3>

          <p>
            Ngarko videot e momenteve më të mira
            dhe shfaqi talentin tënd.
          </p>
        </div>

        <div className="pse-card">
          <div className="card-icon">🌍</div>

          <h3>Mundësi Reale</h3>

          <p>
            Zbulohu nga scoutë,
            akademi dhe klube futbolli.
          </p>
        </div>

      </div>

      <div className="app-preview">
         <img src={mockup_img} alt="mockup" className="mockup-img"/>
      </div>

    </section>
  );
}

export default Pse_Talento11;