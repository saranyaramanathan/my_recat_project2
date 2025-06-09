import { useState } from 'react'
import { Link, Route, Routes } from 'react-router'
import Home from './Home';
import CartItem from './CartItem';
import { Helmet } from "react-helmet";
import Cart from './Cart';

function App() {
  return(
    <div>
        
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  )
  }

export default App
