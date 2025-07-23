import { useState, useEffect } from "react";
import { FavoriteContext } from "./FavoriteContext"; // adjust the path as needed

export const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState(() => {
    const storedFavorites = localStorage.getItem("favoriteItems");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const addToFavorites = (product) => {
    const exists = favoriteItems.some(
      (item) =>
        item.flavor === product.flavor &&
        item.addedFlavor === product.addedFlavor
    );
    if (!exists) {
      setFavoriteItems((prev) => [...prev, product]);
    }
  };

  const removeFromFavorites = (product) => {
    setFavoriteItems((prev) =>
      prev.filter(
        (item) =>
          item.flavor !== product.flavor ||
          item.addedFlavor !== product.addedFlavor
      )
    );
  };

  return (
    <FavoriteContext.Provider
      value={{ favoriteItems, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
