export const addItemToCart = (cartItems, cartItemsToAdd) => {

    // check if item already exist in cart
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id);

    // if exist
    if (existingCartItem) {
        // loop thru each item
        // if the item is the same item as item to add
        // return a new object for that item with all same properties, and quanity property + 1
        return cartItems.map(cartItem => cartItem.id === cartItemsToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1}
            :
            cartItem
            )
    }
    // if it's a new item, return a new cart object 
    // with all current cart item and this new item with a quanity of 1
    else {
        return [...cartItems, {...cartItemsToAdd, quantity: 1}]
    }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(i => i.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1){
        return cartItems.filter(i => i.id !== cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ? 
            {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    )
}