import React from 'react'
import "./App.css"

import Header from './components/header/header'
import { Hero } from './components/hero/hero'
import { Avf } from './components/avf/avf'
import Klapa from './components/klapa/klapa'

const App = () => {
  return (
    <>
     <Header />
     <Hero />
     <Avf />
     <Klapa />
    </>
  )
}

export default App