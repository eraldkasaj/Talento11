import "./Player_Scout.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

import { LuUsers, LuSearch, LuArrowRight } from "react-icons/lu";

function Player_Scout() {
  return (
    <>
      <Navbar />

      <section className="player-scout">

        <div className="player-scout-header">
          <h1>Player & Scout</h1>

          <p>
            Zgjidh kategorinë që dëshiron të eksplorosh.
          </p>
        </div>

        <div className="player-scout-cards">

          <div className="category-card">

            <div className="category-icon">
              <LuUsers />
            </div>

            <h2>Lojtarët</h2>

            <p>
              Shiko profilet e lojtarëve,
              statistikat dhe videot e tyre.
            </p>

          <Link to="/players" className="category-btn">
            Shiko Lojtarët
            <LuArrowRight />
          </Link>

          </div>

          <div className="category-card">

            <div className="category-icon">
              <LuSearch />
            </div>

            <h2>Scoutët</h2>

            <p>
              Zbulo scoutët dhe lidhu
              me profesionistë të futbollit.
            </p>

            <button>
              Shiko Scoutët
              <LuArrowRight />
            </button>

          </div>

        </div>

      </section>
    </>
  );
}

export default Player_Scout;