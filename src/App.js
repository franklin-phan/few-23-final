  
import React from 'react';
import './App.css';
import Title from './Title'
import Home from './Home'
import StarWars from './StarWars';
function App() {
  return (
    <div className="App-header">
      <Home home="FEW 2.3 - Franklin Final"><Title title="Franklin"></Title></Home>
      <StarWars/>
    </div>
  );
}

export default App;