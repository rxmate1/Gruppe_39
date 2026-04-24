import "../css/JamesCard.css"
import bilde from "../assets/student-illustrasjon.png";

function JamesCard() {
  return (
    <section className="james-card">
      <img
        src={bilde}
        alt="Illustrasjon av student"
        className="james-image"
      />

      <div>
        <h2>James Remo Walker</h2>

        <p>
          E-post:{" "}
          <a href="mailto:jrwalker@hiof.no">
            jrwalker@hiof.no
          </a>
        </p>

        <p>Bachelorstudie: Informasjonssystemer</p>
      </div>
    </section>
  );
}

export default JamesCard;