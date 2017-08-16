import {
  ADD_TO_CART,
} from "../constants";

const initialState = {
  addedIds: [],
  load: false,
  basket: {}
};

function addedIds(state = initialState.addedIds, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.product];
    default:
      return state
  }
}

function basket(state = initialState.basket, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let basket = state;
      basket.products = !!basket ? [...basket.products || [], action.product] : [action.product];
      return basket;
    default:
      return state
  }
}

export default function cart(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        basket: basket(state.basket, action)
      }
  }
}

export function getLoadCart(state) {
  return state.load
}

export function getAddedIds(state) {
  return state.addedIds
}

export function getProducts(state) {
  return state.basket.products || [];
}