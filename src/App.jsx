import { Suspense } from 'react'
import React, { use,useState } from 'react';
import './App.css'
import Banner from './assets/Components/Homepage/Banner'
import Navbar from './assets/Components/Homepage/Navbar'
import ProductGallary from './assets/Components/Homepage/ProductGallary'
import Stat from './assets/Components/Homepage/Stat'
import Steps from './assets/Components/Homepage/Steps';
import Pricing from './assets/Components/Homepage/Pricing';
import Workflow from './assets/Components/Homepage/Workflow';
import Footer from './assets/Components/Homepage/Footer'
const productPromise = async () => {
  const res = await fetch('/data.json');
  return res.json();
}
const promise = productPromise();
function App() {
  const products = use(promise);
  const [selected, setSelected] = useState([]);

  return (
    <>
      <header>
        <nav>
          <Navbar selected={selected}></Navbar>
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
          <ProductGallary products={products} selected={selected} setSelected={setSelected}></ProductGallary>
        </Suspense>

        <section>
           <Steps></Steps>
        </section>

        <section>
          <Pricing></Pricing>
        </section>

        <section>
          <Workflow></Workflow>
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
