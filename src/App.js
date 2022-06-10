import React from 'react';

import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <div className="App">
      <Router>
        <>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
        
      </Router>
    </div>
  );
}

export default App;
