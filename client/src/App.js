import React from 'react';
import './App.css';
import { Router, Redirect } from '@reach/router';
import AllPirates from './views/AllPirates';
import DetailPirate from './views/DetailPirate';
import NewPirate from './views/NewPirate';

function App() {
  return (
    <div className="App">
      <Router>
        <AllPirates path="pirate" />
        <DetailPirate path="pirate/:id" />
        <NewPirate path="pirate/new" />
      </Router>
      <Redirect from="/" to="/pirate" noThrow />
    </div>
  );
}

export default App;
