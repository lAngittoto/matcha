import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import {
  ClassicPurePrice,
  DessertInspiredPrice,
  FlavoredMatchaPrice,
} from "../Price/PriceMatcha";
const getPrice = (product) => {
  const flavor = product.flavor?.toLowerCase() || "";
if (
  flavor.includes("ceremonial") ||
  flavor.includes("culinary") ||
  flavor.includes("roasted")
)
  return ClassicPurePrice;


if (
  flavor.includes("ice cream") ||
  flavor.includes("cheesecake") ||
  flavor.includes("brownies") 
)
  return DessertInspiredPrice;


if (
  flavor.includes("vanilla") ||
  flavor.includes("lavender") ||
  flavor.includes("mint") ||
  flavor.includes("chai") ||
  flavor.includes("strawberry") ||
  flavor.includes("ginger") ||
  flavor.includes("coconut") ||
  flavor.includes("lemon") ||
  flavor.includes("mango")
)
  return FlavoredMatchaPrice;

return 0;
}
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (!storedCart) return [];

    const parsedCart = JSON.parse(storedCart);
    return parsedCart.map((item) => ({
      ...item,
      price: item.price || getPrice(item),
    }));
  });

  const addToCart = (product) => {
    const price = getPrice(product);

    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.flavor === product.flavor &&
          item.addedFlavor === product.addedFlavor
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.flavor === product.flavor &&
          item.addedFlavor === product.addedFlavor
            ? { ...item, quantity: (item.quantity || 1) + 1, price }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1, price }];
      }
    });
  };

  const increaseQuantity = (product) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.flavor === product.flavor &&
        item.addedFlavor === product.addedFlavor
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (product) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.flavor === product.flavor &&
        item.addedFlavor === product.addedFlavor
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
