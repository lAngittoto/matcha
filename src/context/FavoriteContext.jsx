import { createContext, useContext } from "react";

// Create context
export const FavoriteContext = createContext();

// Custom hook
export const useFavorite = () => useContext(FavoriteContext);
