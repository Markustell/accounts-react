import { useState } from 'react'

import './App.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'

function App() {

  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  )
}

export default App
