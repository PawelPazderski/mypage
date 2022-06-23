import React, {useState, useEffect} from 'react';

import "./scss/main.scss"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Portfolio_grafika from './components/Portfolio_grafika'
import Portfolio_react from './components/Portfolio_react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const App = () => {

  return (
    <div className="App">
      <Router>
        <>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/grafika" element={<Portfolio_grafika />} />
            <Route path="/portfolio/react" element={<Portfolio_react />} />
          </Routes>
          <Footer />
        </>
        
      </Router>
    </div>
  );
}

export default App;
