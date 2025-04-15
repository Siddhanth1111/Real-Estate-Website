import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Sell from './pages/Sell'
import Buy from './pages/Buy'
import Signup from './pages/Signup'
import BuyerSignup from './pages/BuyerSignup'
import SellerSignup from './pages/SellerSignup'
import Login from './pages/Login'
import CreditsPage from './pages/Credits'

function App() {
  
  

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/sell" element={<Sell></Sell>}></Route>
      <Route path="/buy" element={<Buy></Buy>}></Route>
      <Route path="/signup/options" element={<Signup></Signup>}></Route>
      <Route path="/signup/buyer" element = {<BuyerSignup></BuyerSignup>}></Route>
      <Route path="/signup/seller" element = {<SellerSignup></SellerSignup>}></Route>
      <Route path="/login" element = {<Login></Login>}></Route>
      <Route path="/credits" element = {<CreditsPage></CreditsPage>}></Route>

    </Routes>
  )
}

export default App
