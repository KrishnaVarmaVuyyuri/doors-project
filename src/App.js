// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Product from './components/Product/Product';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
function App() {
  return (
    <Router>
      
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
