import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.util';
// SVG
import {ReactComponent as Logo} from '../../assets/crown.svg'

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

export default Header;