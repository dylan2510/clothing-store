import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-out.component";
import {auth,createUserProfileDocument} from './firebase/firebase.util';

class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribleFromAuth = null;

  componentDidMount(){
    // subscrible to onAuthStateChanged observer
    // this onAuthState connection is always open as long component is mounted
    this.unsubscribleFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({currentUser: user});
      //console.log(user);
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser : {
              id : snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
      else{
        // set to null
        this.setState({currentUser : userAuth});
      }
    });
  }

  componentWillUnmount() {
    // upon unmount, unsubscrible
    this.unsubscribleFromAuth();
  }

  render(){
    return (
      // Header is outside router switchso it will always be rendered regardless of the url
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

export default App;
