import Navbar from "../../components/navbar/Navbar";
import Scout_Profile_Card from "../../components/scout_profile_card/Scout_Profile_Card";
import { useParams } from "react-router-dom";
import scouts from "../../data/scouts";

import "./Scout_Profile.css";

function Scout_Profile() {

  const { id } = useParams();

  const scout = scouts.find(
    (scout) => scout.id === Number(id)
  );

  return (
    <>
      <Navbar />

      <section className="scout-profile">

        <Scout_Profile_Card scout={scout} />

      </section>

    </>
  );
}

export default Scout_Profile;