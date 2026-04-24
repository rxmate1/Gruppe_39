import Marius from "./components/Marius"
import Adrian from './components/Adrian'
import JamesCard from "./components/JamesCard";

function App () {
  return (
    <>
      <header>
        Gruppe 39
      </header>

    <main>
      <Marius />
    </main>
    
      <main>
        <Adrian />
        <JamesCard />
      </main>
    </>
  )
}

export default App;