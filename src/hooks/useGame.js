import { useContext } from "react";
import GameContext from "../context/GameContext";

// Read the current game from any component under <GameProvider>.
//   const { game, you, board, isLoading, error, isActing } = useGame();
export default function useGame() {
  const context = useContext(GameContext);

  if (!context)
    throw new Error("useGame must be used inside a <GameProvider>.");

  return context;
}
