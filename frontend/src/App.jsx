import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Sell from './pages/Sell'
import Buy from './pages/Buy'
import Signup from './pages/Signup'
import BuyerSignup from './pages/BuyerSignup'
import SellerSignup from './pages/SellerSignup'
import Login from './pages/Login'
import CreditsPage from './pages/Credits'
import Navbar from './components/Navbar'
import Property from './pages/Property'
import Contact from './pages/Contact'
import Rent from './pages/Rent'

function App() {
  
  const location = useLocation();
  const hideNavbarOn = ['/login', '/signup/options', '/signup/buyer', '/signup/seller'];

  return (

    <div>
      
      {!hideNavbarOn.includes(location.pathname) && <Navbar />}

      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/sell" element={<Sell></Sell>}></Route>
      <Route path="/buy" element={<Buy></Buy>}></Route>
      <Route path="/signup/options" element={<Signup></Signup>}></Route>
      <Route path="/signup/buyer" element = {<BuyerSignup></BuyerSignup>}></Route>
      <Route path="/signup/seller" element = {<SellerSignup></SellerSignup>}></Route>
      <Route path="/login" element = {<Login></Login>}></Route>
      <Route path="/credits" element = {<CreditsPage></CreditsPage>}></Route>
      <Route path="/property/:propertyId" element = {<Property></Property>}></Route>
      <Route path="/contact" element = {<Contact></Contact>}></Route>
      <Route path="/rent" element = {<Rent></Rent>}></Route>
      
    </Routes>
    
    
    </div>
    
    
  )
}

export default App
