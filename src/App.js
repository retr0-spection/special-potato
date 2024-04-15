import React from 'react';
import './App.css';
import Navigator from './Access/Navigator';
import Homepage from './pages/Homepage';
import Features from './pages/Features';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
    <Navigator/>
    <Homepage/>
    <Features/>
      <footer>
        <p>&copy; 2024 e-SPAZA</p>
      </footer>
      
      </Router>
    </div>
  );
}

export default App;
