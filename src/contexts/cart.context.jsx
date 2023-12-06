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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const deleteItemToCart = (productToDelete) => {
    setCartItems(deleteItem(cartItems, productToDelete));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemToCart, deleteItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
