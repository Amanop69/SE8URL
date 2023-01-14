import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Focus from './Components/Focus/Focus'
import Features from './Components/Features/Features'
import Have from './Components/Have/Have'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Focus />
      <Features />
      <Have />
      <Footer />
    </div>
  )
}

export default App
