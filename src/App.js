import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage.component';

// HatsPage
const HatsPage = () => {
  return(
    <div>
      <h1>Hats Page</h1>
    </div>
  );
}

function App() {
  return (
    //<HomePage />

    // Use routing
    <switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
    </switch>
  );
}

export default App;
