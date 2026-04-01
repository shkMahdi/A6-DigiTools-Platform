import './App.css'
import Banner from './assets/Components/Homepage/Banner'
import Navbar from './assets/Components/Homepage/Navbar'

function App() {

  return (
    <>
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
        <section>
            <Banner></Banner>
        </section>
      </header>
    </>
  )
}

export default App
