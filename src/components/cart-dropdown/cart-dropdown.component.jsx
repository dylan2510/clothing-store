import React from 'react';
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropdown = ({cartItems,history, toggleCartHidden}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.length ?
                (
                    cartItems.map(cartItem => {
                        return (
                            <CartItem key={cartItem.id} item={cartItem} />
                        )
                    })
                )
                :
                (
                    <span className="empty-message">Your Cart is empty</span>
                )
            }
            </div>
            <CustomButton onClick={() => 
                    {
                        history.push("/checkout");
                        toggleCartHidden();
                    }
                }>
                Go To Checkout
                </CustomButton>
        </div>
    );
}

const mapStateToProps = (reducer) => {
    return {
        //cartItems: reducer.cart.cartItems

        // Use Selectors instead to achieve memmonisation
        cartItems: selectCartItems(reducer)
    };
  }

  const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    };
}; 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));