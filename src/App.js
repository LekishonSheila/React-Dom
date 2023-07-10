import './App.css';
import React from 'react';
import Login from './Login';
import Products from './Product';
import ProductDisplay from './ProductsDetails';
import Forms from './Forms';
import Navbar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Navbar/>
    <BrowserRouter>
      <Routes>
       {<Route path="/home" element={<Products/>}></Route>}
        {<Route path="/home" element={<Products/>}></Route>} 
        {<Route path="/about" element={<Products/>}></Route>} 
        {<Route path="/login" element={<Login/>}></Route>}
        {<Route path="/Products/:productId" element={<ProductDisplay/>}></Route>}
        {<Route path="/add" element={<Forms />}></Route>}
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
