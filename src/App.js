import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop.component';

function App() {
  return (
    //<HomePage />

    // Use routing
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
