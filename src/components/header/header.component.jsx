import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.util';
// SVG
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {connect} from 'react-redux';

const Header = ({currentUser}) => {
    return(
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/shop" className="option">
                    CONTACT
                </Link>
                {
                    currentUser ?
                    // call firebase.auth.signout
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className="option" to="/signin">Sign In</Link>
                }
            </div>
        </div>
    );
}

// standard function for react-redux connect()
// for setting the state in reducer
// state is the root reducer
// user is the userReducer in root reducer. refer to root-reducer.js
const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser
    };
}

export default connect(mapStateToProps)(Header);