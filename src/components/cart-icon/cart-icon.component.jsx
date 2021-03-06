import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import "./cart-icon.styles.scss";
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    };
};

const mapStateToProps = (reducer) => {
    return {
        /*
        itemCount: reducer.cart.cartItems.reduce((accumulator, cartItem) => {
            return accumulator + cartItem.quantity
        } , 0)
        */

        // USE SELECTORS instead, to achieve caching / memonise
        itemCount: selectCartItemsCount(reducer)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);