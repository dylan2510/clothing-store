import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// Takes in a price parameter
// Convert price to cents for stripe
// publishableKey found in stripe developer page
// https://github.com/azmenak/react-stripe-checkout

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51I4hbZFHToNuSzjZ42JJXPRkT9XgIh3YzzgFeTZhGU2sIhD6Nztqzyla3YlX3BrJGI0UcCQo0fkwyopEUlvBvbwu00MdY8pz4i";

    // function that has a token input and print the token
    const onToken = token => {
        console.log(token);
        alert("Payment Successful !");
    }

    return (
        <StripeCheckout
            label="Pay Now" // label to display
            name="clothing-store pte ltd" // name
            // fields below requires user to fill in
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`} // price to show user
            amount={priceForStripe} // price for stripe
            panelLabel="Pay Now"
            token={onToken} // submit callback
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;