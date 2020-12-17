import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop.component';
import Header from './components/header/header.component.jsx';

function App() {
  return (
    // Header is outside router switchso it will always be rendered regardless of the url
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
