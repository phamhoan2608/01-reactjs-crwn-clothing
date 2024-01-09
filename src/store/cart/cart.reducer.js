import { CART_ACTION_TYPES } from "./cart.types";

const updateLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

export const CART_INIT_STATE = JSON.parse(localStorage.getItem("cart")) || {
  cartItems: [],
  isCartOpen: false,
  cartCount: 0,
  cartTotal: 0,
};

export const cartReducer = (state = CART_INIT_STATE, action) => {
  const { type, payload } = action;
  const cartItems = state.cartItems || [];

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      updateLocalStorage({ ...state, ...payload });
      return { ...state, ...payload };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    case CART_ACTION_TYPES.ADD_TO_CART:
      const { id } = payload;

      const checkExistCart = cartItems.find((item) => item.id === id);
      let cartItemsChange;
      if (checkExistCart) {
        cartItemsChange = cartItems.map((cartItem) => {
          return cartItem?.id === id
            ? {
                ...cartItem,
                quantity: Number(cartItem.quantity) + 1,
              }
            : cartItem;
        });
        localStorage.setItem(
          "cart",
          JSON.stringify({
            ...state,
            cartItems: cartItemsChange,
          })
        );
        return {
          ...state,
          cartItems: cartItemsChange,
        };
      } else {
        cartItemsChange = [...cartItems, { ...payload, quantity: 1 }];
      }

      updateLocalStorage(cartItemsChange);
      return {
        ...state,
        cartItems: cartItemsChange,
      };
    case CART_ACTION_TYPES.REMOVE_TO_CART:
      const { id: removeId } = payload;
      const existItemRemove = cartItems.find((item) => item.id === removeId);

      if (existItemRemove.quantity === 1) {
        return {
          ...state,
          cartItems: cartItems.filter((cartItem) => cartItem.id !== removeId),
        };
      }

      return {
        ...state,
        cartItems: cartItems.map((cartItem) => {
          return cartItem?.id === removeId
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              }
            : cartItem;
        }),
      };
    case CART_ACTION_TYPES.DELETE_TO_CART:
      const { id: deleteId } = payload;
      return {
        ...state,
        cartItems: cartItems.filter((cartItem) => cartItem.id !== deleteId),
      };
    default:
      return state;
  }
};
