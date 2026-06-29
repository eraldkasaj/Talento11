import "./Si_Funksionon.css";

import {
  LuUserPlus,
  LuBadgeInfo,
  LuVideo,
  LuHandshake
} from "react-icons/lu";

function Si_Funksionon() {
  return (
    <section id="si-funksionon" className="si-funksionon">

      <div className="si-header">
        <h2>Si funksionon?</h2>

        <p>
          Vetëm katër hapa për të shfaqur talentin tënd para
          scoutëve dhe klubeve.
        </p>
      </div>

      <div className="steps">

        <div className="step">
          <div className="step-number">1</div>

          <div className="step-icon">
            <LuUserPlus />
          </div>

          <h3>Regjistrohu</h3>

          <p>
            Krijo një llogari falas dhe bëhu pjesë
            e platformës Talento11.
          </p>
        </div>

        <div className="step">
          <div className="step-number">2</div>

          <div className="step-icon">
            <LuBadgeInfo />
          </div>

          <h3>Krijo Profilin</h3>

          <p>
            Plotëso pozicionin,
            moshën, gjatësinë dhe
            statistikat.
          </p>
        </div>

        <div className="step">
          <div className="step-number">3</div>

          <div className="step-icon">
            <LuVideo />
          </div>

          <h3>Ngarko Videot</h3>

          <p>
            Publiko videot e
            ndeshjeve dhe
            momenteve më të mira.
          </p>
        </div>

        <div className="step">
          <div className="step-number">4</div>

          <div className="step-icon">
            <LuHandshake />
          </div>

          <h3>Lidhu me Klubet</h3>

          <p>
            Scoutët, akademitë dhe
            klubet mund të të
            zbulojnë.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Si_Funksionon;