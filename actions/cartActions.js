import {
    ADD_TO_CART,
} from "../constants";

function addToCartUnsafe(product, portion) {
    return {
        type: ADD_TO_CART,
        product,
        portion
    }
}

export function addToCart(product, portion) {
    return (dispatch, getState) => {
        dispatch(addToCartUnsafe(product, portion))
    }
}