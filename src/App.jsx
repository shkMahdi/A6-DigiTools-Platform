import './App.css'
import Banner from './assets/Components/Homepage/Banner'
import Navbar from './assets/Components/Homepage/Navbar'
import ProductGallary from './assets/Components/Homepage/ProductGallary'
import Stat from './assets/Components/Homepage/Stat'
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
        <section>
            <Stat></Stat>
        </section>
      </header>
      <main>
        <ProductGallary></ProductGallary>
      </main>
    </>
  )
}

export default App
