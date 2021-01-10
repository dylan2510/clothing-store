import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.util';
// SVG
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {connect} from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from 'reselect';
import {selecCurrentUser} from "../../redux/user/user.selectors.js";
import {selectCartHidden} from "../../redux/cart/cart.selectors.js";
import {signOutStart} from "../../redux/user/user.actions";

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from "./header.styles";

const Header = ({currentUser, hidden, signOutStart}) => {
    return(
        /*
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
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
        */
       <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/shop">
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                    // call firebase.auth.signout
                    //<OptionDiv className="option" onClick={() => auth.signOut()}>Sign Out</OptionDiv>
                    <OptionDiv className="option" onClick={signOutStart}>Sign Out</OptionDiv>
                    :
                    <OptionLink to="/signin">Sign In</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    );
}

// standard function for react-redux connect()
// for setting the state in reducer
// reducer is the root reducer
// user is the userReducer in root reducer. refer to root-reducer.js
// currentUser andd hidden can be accessed via props
const mapStateToProps = (rootReducer) => {
    return {
        /*
        currentUser: rootReducer.user.currentUser,
        hidden: rootReducer.cart.hidden
        */
        currentUser: selecCurrentUser(rootReducer),
        hidden: selectCartHidden(rootReducer)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOutStart: () => dispatch(signOutStart())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);