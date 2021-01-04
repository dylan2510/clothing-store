import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-out.component";
import {auth,createUserProfileDocument,addCollectionsAndDocuments} from './firebase/firebase.util';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {selecCurrentUser} from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.component";
import {selectCollectionsForPreview} from "./redux/shop/shop.selectors";

class App extends React.Component {
  
  // Using Redux instead for state
  /*
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  */

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
          /*
          this.setState({
            currentUser : {
              id : snapshot.id,
              ...snapshot.data()
            }
          });
          */
          // using Redux instead
          this.props.setCurrentUser({
            id : snapshot.id,
              ...snapshot.data()
          });

        });
      }
      else{
        // set to null
        //this.setState({currentUser : userAuth});
        this.props.setCurrentUser(userAuth);
      }

      // add shop data
      // we just want title and items data
      /*
      addCollectionsAndDocuments(
        'collections',
        this.props.collectionsArray.map(({title, items}) => ({title, items}))
      );
      */

    });
  }

  componentWillUnmount() {
    // upon unmount, unsubscrible
    this.unsubscribleFromAuth();
  }

  render(){
    return (
      // Header is outside router switchso it will always be rendered regardless of the url
      // Header component has a prop call 'curentUser' which will be retrieved from Reducer
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={
            () => {
              return (
                this.props.currentUser ?
                (<Redirect to="/" />) : (<SignInAndSignUpPage />)
              )
            }
          } />
        </Switch>
      </div>
    );
  }

}

// currentUser can be accessed via props
const mapStateToProps = (reducer) => {
  return {
      //reducer.user.currentUser
      currentUser: selecCurrentUser(reducer),
      collectionsArray: selectCollectionsForPreview(reducer)
  };
}

// map setCurrentUser action to prop so action can be accessed via this.props
// invoke setCurrentUser action, pass in user object, setCurrentUser action
// returns an object that is assigned to setCurrentUser
// setCurrentUser can be accessed via props
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  };
}


// input mapStateToProps = null
export default connect(mapStateToProps,mapDispatchToProps)(App);
