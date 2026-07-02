import "./Edit_Profile.css";

function Edit_Profile() {
  return (
    <section className="edit-profile-page">

      <div className="edit-profile-container">

        <h1>Edito Profilin</h1>

        <p>
          Përditëso informacionin e profilit tënd.
        </p>

        <form className="edit-profile-form">

          <div className="form-group">
            <label>Emri</label>
            <input type="text" placeholder="Emri" />
          </div>

          <div className="form-group">
            <label>Mbiemri</label>
            <input type="text" placeholder="Mbiemri" />
          </div>

          <div className="form-group">
            <label>Klubi</label>
            <input type="text" placeholder="Klubi" />
          </div>

          <div className="form-group">
            <label>Pozicioni</label>
            <input type="text" placeholder="Pozicioni" />
          </div>

          <div className="form-group">
            <label>Mosha</label>
            <input type="number" placeholder="Mosha" />
          </div>

          <div className="form-group">
            <label>Gjatësia</label>
            <input type="text" placeholder="1.87 m" />
          </div>

          <div className="form-group">
            <label>Pesha</label>
            <input type="text" placeholder="78 kg" />
          </div>

          <div className="form-group">
            <label>Këmba Dominuese</label>

            <select>
              <option>Djathta</option>
              <option>Majta</option>
              <option>Të dyja</option>
            </select>

          </div>

          <div className="form-group">
            <label>Biografia</label>

            <textarea
              rows="5"
              placeholder="Shkruaj diçka për veten..."
            ></textarea>

          </div>

          <button type="submit">
            Ruaj Ndryshimet
          </button>

        </form>

      </div>

    </section>
  );
}

export default Edit_Profile;