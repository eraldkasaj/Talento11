import "./Player_Dashboard.css";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { ref, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import {
  LuFootprints,
  LuLogOut,
  LuMapPin,
  LuPencil,
  LuPlay,
  LuShield,
} from "react-icons/lu";

const statItems = [
  ["matches", "Ndeshje"],
  ["goals", "Gola"],
  ["assists", "Asist"],
  ["yellowCards", "Kartona të verdhë"],
  ["redCards", "Kartona të kuq"],
];

const detailedStatItems = [...statItems, ["minutes", "Minuta të luajtura"]];

const getPitchZone = (position) => {
  const normalizedPosition = position?.trim().toUpperCase();

  if (["GK", "GOALKEEPER", "PORTIER"].includes(normalizedPosition)) return "goalkeeper";
  if (["CB", "LB", "RB", "LWB", "RWB", "DF", "DEF"].includes(normalizedPosition)) return "defender";
  if (["CM", "CDM", "CAM", "LM", "RM", "DM", "AM", "MID"].includes(normalizedPosition)) return "midfielder";

  return "forward";
};

function Player_Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("Përmbledhje");

  useEffect(() => {
    const getUser = async () => {
      const user = auth.currentUser;

      if (!user) {
        navigate("/login");
        return;
      }

      const snapshot = await get(ref(db, `users/${user.uid}`));

      if (snapshot.exists()) {
        setUserData(snapshot.val());
      }
    };

    getUser();
  }, [navigate]);

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const profile = userData?.profile ?? {};
  const stats = userData?.stats ?? {};
  const fullName = [userData?.name, userData?.surname].filter(Boolean).join(" ") || "Profili im";
  const club = profile.club || "Klubi nuk është vendosur";
  const league = profile.league || "Superliga Shqiptare U-19";
  const pitchZone = getPitchZone(profile.position);
  const joinedAt = userData?.createdAt
    ? new Intl.DateTimeFormat("sq-AL", { month: "long", year: "numeric" }).format(new Date(userData.createdAt))
    : "—";

  return (
    <main className="talento-player-dashboard">
      <section className="talento-player-panel">
        <div className="talento-player-actions">
          <button type="button" onClick={() => navigate("/edit-profile")}>
            <LuPencil /> Edito profilin
          </button>
          <button type="button" className="talento-player-logout" onClick={logout}>
            <LuLogOut /> Dil
          </button>
        </div>

        <header className="talento-player-hero">
          <div className="talento-player-photo">
            {profile.photoURL ? (
              <img src={profile.photoURL} alt={fullName} />
            ) : (
              <span>{fullName.slice(0, 2).toUpperCase()}</span>
            )}
          </div>

          <div className="talento-player-summary">
            <div className="talento-player-name-row">
              <h1>{fullName}</h1>
              <span className="talento-player-verified">Verified</span>
            </div>

            <p className="talento-player-club"><LuShield /> {club}</p>
            <p className="talento-player-league">🇦🇱 {league}</p>

            <div className="talento-player-facts">
              <div>
                <strong>{profile.age || "—"}</strong>
                <span>Mosha</span>
              </div>
              <div>
                <strong>{profile.height ? `${profile.height} cm` : "—"}</strong>
                <span>Lartësia</span>
              </div>
              <div>
                <strong>{profile.position || "—"}</strong>
                <span>Pozicioni</span>
              </div>
              <div>
                <strong><LuMapPin /> {profile.nationality || "—"}</strong>
                <span>Kombësia</span>
              </div>
              <div>
                <strong><LuFootprints /> {profile.dominantFoot || "—"}</strong>
                <span>Këmba e preferuar</span>
              </div>
              <div>
                <strong>{profile.weight ? `${profile.weight} kg` : "—"}</strong>
                <span>Pesha</span>
              </div>
            </div>
          </div>
        </header>

        <nav className="talento-player-tabs" aria-label="Seksionet e profilit">
          {["Përmbledhje", "Statistikat", "Media", "Karriera"].map((tab) => (
            <button
              type="button"
              key={tab}
              className={activeTab === tab ? "is-active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        {activeTab === "Përmbledhje" && (
          <>
            <section className="talento-player-about">
              <div>
                <h2>Rreth lojtarit</h2>
                <p>
                  {profile.bio || "Lojtar i përkushtuar që punon çdo ditë për të përmirësuar aftësitë e tij. I gatshëm të tregojë talentin e tij para scout-ëve dhe klubeve."}
                </p>
              </div>
              <div className={`talento-player-pitch talento-player-pitch--${pitchZone}`} aria-hidden="true">
                <div className="talento-player-pitch-center" />
                <div className="talento-player-pitch-box talento-player-pitch-box-left" />
                <div className="talento-player-pitch-box talento-player-pitch-box-right" />
                <span />
              </div>
            </section>

            <section className="talento-player-statistics">
              <div className="talento-player-section-heading">
                <h2>Statistikat</h2>
                <span>{stats.season || "Sezoni aktual"}</span>
              </div>
              <div className="talento-player-stat-grid">
                {statItems.map(([key, label]) => (
                  <div key={key}>
                    <span>{label}</span>
                    <strong>{stats[key] || 0}</strong>
                  </div>
                ))}
              </div>
            </section>

            <section className="talento-player-club-card">
              <div className="talento-player-club-mark"><LuShield /></div>
              <div>
                <span>Klubi aktual</span>
                <h2>{club}</h2>
                <p>🇦🇱 {league}</p>
              </div>
            </section>

            <section className="talento-player-highlights">
              <div className="talento-player-section-heading"><h2>Highlights</h2></div>
              {profile.videoURL ? (
                <div className="talento-player-video-wrap"><video src={profile.videoURL} controls className="talento-player-video" /></div>
              ) : (
                <button type="button" className="talento-player-empty-video" onClick={() => navigate("/edit-profile")}>
                  <LuPlay /><span>Ngarko highlight-in tënd të parë</span>
                </button>
              )}
            </section>
          </>
        )}

        {activeTab === "Statistikat" && (
          <section className="talento-player-tab-dashboard">
            <div className="talento-player-section-heading">
              <div><h2>Statistikat e sezonit</h2><span>{stats.season || "Sezoni aktual"}</span></div>
              <button type="button" onClick={() => navigate("/statistics")}><LuPencil /> Përditëso</button>
            </div>
            <div className="talento-player-detailed-stat-grid">
              {detailedStatItems.map(([key, label]) => (
                <div key={key}><span>{label}</span><strong>{stats[key] || 0}</strong></div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "Media" && (
          <section className="talento-player-tab-dashboard">
            <div className="talento-player-section-heading"><h2>Video Highlights</h2></div>
            {profile.videoURL ? (
              <div className="talento-player-video-wrap"><video src={profile.videoURL} controls className="talento-player-video" /></div>
            ) : (
              <button type="button" className="talento-player-empty-video" onClick={() => navigate("/edit-profile")}>
                <LuPlay /><span>Nuk ka video akoma. Kliko për të ngarkuar videon.</span>
              </button>
            )}
          </section>
        )}

        {activeTab === "Karriera" && (
          <section className="talento-player-tab-dashboard">
            <div className="talento-player-section-heading"><h2>Karriera</h2></div>
            <div className="talento-player-career-entry">
              <div className="talento-player-club-mark"><LuShield /></div>
              <div><span>Klubi aktual</span><h3>{club}</h3><p>🇦🇱 {league} · {profile.position || "Pozicioni nuk është vendosur"}</p></div>
              <time>{joinedAt}</time>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

export default Player_Dashboard;
