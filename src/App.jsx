// App.jsx - Main component
import React from 'react';
import Header from './components/header';
import FlightSearch from './components/FlightSearch';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        {/* Background Image */}
        <div 
          className="background-image"
        />
        
        {/* Content */}
        <div className="content">
          <Header />
          <div className="search-container">
            <FlightSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;