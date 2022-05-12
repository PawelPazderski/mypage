import React from 'react';
import logo from './logo.svg';

import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './components/Home'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <div className="App">
      <Router>
        <>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </>
        
      </Router>
    </div>
  );
}

export default App;
