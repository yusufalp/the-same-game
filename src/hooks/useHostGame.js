import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../services/apiClient";
import { ROUTES } from "../constants/routes";

// POST /api/games: create a game, then open its page.
// Used on host screen, which is outside any game, so it does not use the context.
//   const { hostGame, isHosting, error } = useHostGame();
//   hostGame({ maxPlayers: 3 });
export default function useHostGame() {
  const navigate = useNavigate();
  const [isHosting, setIsHosting] = useState(false);
  const [error, setError] = useState(null);

  const hostGame = useCallback(
    async ({ maxPlayers, name } = {}) => {
      setIsHosting(true);
      setError(null);

      try {
        const data = await apiRequest("/api/games", {
          method: "POST",
          body: { maxPlayers, name },
        });
        navigate(ROUTES.game(data.game.gameCode));
        return data;
      } catch (error) {
        setError(error);
        return null;
      } finally {
        setIsHosting(false);
      }
    },
    [navigate],
  );

  return { hostGame, isHosting, error };
}
