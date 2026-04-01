import { Suspense } from 'react'
import './App.css'
import Banner from './assets/Components/Homepage/Banner'
import Navbar from './assets/Components/Homepage/Navbar'
import ProductGallary from './assets/Components/Homepage/ProductGallary'
import Stat from './assets/Components/Homepage/Stat'

const productPromise = async () => {
  const res = await fetch('/data.json');
  return res.json();
}
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
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <ProductGallary productPromise={productPromise()}></ProductGallary>
        </Suspense>
      </main>
    </>
  )
}

export default App
