import {combineReducers} from "redux";
import openSideMenu from "./openSideMenu";
import navigation from "./navigation";
import cart from "./cart";
import * as fromCart from "./cart";

export default combineReducers({
  openSideMenu,
  cart,
  navigation,
});

export function getAddedIds(state) {
  return fromCart.getAddedIds(state.cart)
}

export function getLoadCart(state) {
  return fromCart.getLoadCart(state.cart)
}

export function getCartProducts(state) {
  return fromCart.getProducts(state.cart);
}