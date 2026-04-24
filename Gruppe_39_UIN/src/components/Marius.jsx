import bilde from "../assets/Marius.jpg"
import "../css/Marius.css"

export default function Marius () {
    return (
        <>
        <article>
            <figure>
                <img src={bilde}
                alt="Bilde av meg på bussen til byen"
                />
            <figcaption>Student ved høgskolen i Østfold</figcaption>
            </figure>
            <h2>Marius Walberg Larsen</h2>
            <section>
                <p>Epost:</p>
                <a href="mailto:mariuwl@hiof.no">
                    mariuwl@hiof.no
                </a>

                <p>Informatikk student</p>
            </section>

        </article>
        
        </>
    )
}