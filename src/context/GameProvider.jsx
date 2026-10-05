import { useState, useMemo } from "react";
import { GameContext } from "./GameContext"; // Import from your new file

export function GameProvider({ children }) {
  const [game, setGame] = useState(null);
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetGame = () => {
    setGame(null);
    setPlayers([]);
    setCurrentPlayer(null);
    setIsLoading(false);
    setError(null);
  };

  const value = useMemo(() => ({
    game,
    setGame,
    players,
    setPlayers,
    currentPlayer,
    setCurrentPlayer,
    isLoading,
    setIsLoading,
    error,
    setError,
    resetGame,
  }), [game, players, currentPlayer, isLoading, error]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
