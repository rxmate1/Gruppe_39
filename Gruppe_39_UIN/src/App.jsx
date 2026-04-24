import Marius from "./components/Marius"
import Adrian from './components/Adrian'
import JamesCard from "./components/JamesCard";
import Arbeidskrav from "./components/Arbeidskrav";
import "./App.css"

function App () {
  return (
    <>
      <header>
        Gruppe 39
      </header>

      <main>
        <section className="kort">
          <Marius />
          <Adrian />
          <JamesCard />
        </section>

        <section className="arbeidskrav">
          <Arbeidskrav />
        </section>
      </main>
    </>
  )
}

export default App;