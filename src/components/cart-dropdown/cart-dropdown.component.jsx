import React from 'react';
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.map(cartItem => {
                    return (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )
                })
            }
            </div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    );
}

// this function take in the base reducer which is combineReducers() created in root-reducer.js
// the reducer.user is pointing to the userReducer as defined in combineReducers()
// the currentUser state is accessed via the userReducer

const mapStateToProps = (reducer) => {
    return {
        cartItems: reducer.cart.cartItems
    };
  }

export default connect(mapStateToProps)(CartDropdown);