import React from 'react'
import "./App.css"

import Header from './components/header/header'
import { Hero } from './components/hero/hero'
import { Avf } from './components/avf/avf'
import Klapa from './components/klapa/klapa'
import { Ser } from './components/service/ser'
import { Biz } from './components/biz/biz'
import { Faq } from './components/faq/faq'
import { Ma } from './components/ma/ma'
import { Fut } from './components/footer/fut'


const App = () => {
  return (
    <>
    
      <header>
         <Header />
      </header>

     <main>
      <Hero />
     <Avf />
     <Klapa />
     <Ser />
     <Biz />
     <Faq />
     <Ma />
     </main>

     <Fut />

    </>
    
  )
}

export default App