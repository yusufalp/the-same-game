import { createContext, useContext } from "react";

export const GameContext = createContext(null);

export function useGameContext() {
  const context = useContext(GameContext);
  console.log(context)

  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }

  return context;
}
