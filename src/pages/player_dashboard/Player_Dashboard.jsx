import "./Player_Dashboard.css";
import { Link } from "react-router-dom";

function Player_Dashboard() {
  return (
    <section className="player-dashboard">

      <div className="dashboard-header">

        <h1>Paneli i Lojtarit</h1>

        <p>
          Menaxho profilin dhe aktivitetin tënd.
        </p>

      </div>

      <div className="dashboard-grid">

       <Link to="/my-profile" className="dashboard-box">
            <h2>👤 Profili im</h2>
            <p>Shiko dhe përditëso të dhënat.</p>
       </Link>

       <Link to="/statistics" className="dashboard-card">
          <p>Statistics</p></Link>

        <Link to="/highlights" className="dashboard-card">
        <p>Highlights</p>
        </Link>

       <Link to="/messages" className="dashboard-card">
       <p>Messages</p>
       </Link>

        <Link to="/visits" className="dashboard-card">
        <p>Vizitat</p>
        </Link>

       <Link to="/settings" className="dashboard-box">

          <h2>⚙️ Cilësimet</h2>
          <p>Menaxho llogarinë.</p>
      </Link>

      </div>

    </section>
  );
}

export default Player_Dashboard;