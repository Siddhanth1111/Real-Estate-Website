import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Sell from './pages/Sell'
import Buy from './pages/Buy'


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/sell" element={<Sell></Sell>}></Route>
      <Route path="/buy" element={<Buy></Buy>}></Route>
    </Routes>
  )
}

export default App
