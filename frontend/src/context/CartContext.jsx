import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addCart = (product, variants, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.findIndex((item) => item.id === product.id && JSON.stringify(item.variants) === JSON.stringify(variants));

      if (existingItem >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItem].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, variants, quantity: quantity || 1 }];
      }
    });
  };

  const removeCart = (id, variant = null) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === id && (variant ? item.variant === variant : true))));
  };

  const updateQuantity = (id, quantity, variant = null) => {
    if (quantity <= 0) {
      removeCart(id, variant);
      return;
    }

    setCart((prevCart) => prevCart.map((item) => (item.id === id && (variant ? item.variant === variant : true) ? { ...item, quantity } : item)));
  };

  const updatedVariant = (id, newVariant) => {
    setCart((prevCart) => prevCart.map((item) => (item.id === id ? { ...item, variant: newVariant } : item)));
  };

  const getTotalPrice = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return <CartContext.Provider value={{ cart, addCart, removeCart, updateQuantity, updatedVariant, getTotalPrice, clearCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
