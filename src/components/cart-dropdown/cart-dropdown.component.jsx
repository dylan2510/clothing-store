import React from 'react';
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";

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

const mapStateToProps = (reducer) => {
    return {
        // cartItems: reducer.cart.cartItems

        // Use Selectors instead to achieve memmonisation
        cartItems: selectCartItems(reducer)
    };
  }

export default connect(mapStateToProps)(CartDropdown);