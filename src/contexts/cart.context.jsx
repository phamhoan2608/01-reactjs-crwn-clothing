import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existCartItem = cartItems.find((cartItem) => cartItem?.id === productToAdd?.id);

  if (existCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem?.id === productToAdd?.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existCartItem = cartItems.find((cartItem) => cartItem?.id === productToRemove?.id);

  if (existCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) => {
    return cartItem?.id === productToRemove?.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem;
  });
};

const deleteItem = (cartItems, productToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  deleteItemToCart: () => {},
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in useReducer`);
  }
};

// const AddToCartAction = (itemToAdd) => {
//   dispatch({ type: "ADD_TO_CART", payload: itemToAdd });
// };

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);

    updateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);

    updateCartItemsReducer(newCartItems);
  };

  const deleteItemToCart = (productToDelete) => {
    const newCartItems = deleteItem(cartItems, productToDelete);

    updateCartItemsReducer(newCartItems);
  };

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

    const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

    /**
     * generate newCartTotal
     *
     * generate newCartCount
     *
     *
     * dispatch new action with payload == {
     * newCartItem
     * newCartTotal,
     * newCartCount
     * }
     *
     */
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemToCart, deleteItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
