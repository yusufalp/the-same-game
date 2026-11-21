import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../services/apiClient";
import { ROUTES } from "../constants/routes";

// Runs a 409 ("already done") answer as success: the step had already happened,
// for example when its answer was lost the first time.
async function allowConflict(request) {
  try {
    await request;
  } catch (error) {
    if (error.status !== 409) throw error;
  }
}

// Starts a game in one go, for the new-game screen (outside any game):
//   1 player   create the game, then start it
//   2 players  create the game, add the computer opponent, then start it
// Then it opens the game page, which is already being played.
//
// If a step fails, calling startNewGame again carries on from that step with
// the same game instead of creating another one.
//   const { startNewGame, isStarting, error } = useStartNewGame();
//   startNewGame({ maxPlayers: 2 });
export default function useStartNewGame() {
  const navigate = useNavigate();
  const [isStarting, setIsStarting] = useState(false);
  const [error, setError] = useState(null);

  const progress = useRef(null);

  const startNewGame = useCallback(
    async ({ maxPlayers }) => {
      setIsStarting(true);
      setError(null);

      try {
        if (progress.current?.maxPlayers !== maxPlayers)
          progress.current = null;

        if (!progress.current) {
          const data = await apiRequest(`/api/games`, {
            method: "POST",
            body: { maxPlayers },
          });

          progress.current = {
            gameCode: data.game.gameCode,
            maxPlayers,
            computerAdded: false,
          };
        }

        const { gameCode } = progress.current;

        if (maxPlayers === 2 && !progress.current.computerAdded) {
          await allowConflict(() =>
            apiRequest(`/api/games/${gameCode}/computers`, { method: "POST" }),
          );
        }
        progress.current.computerAdded = true;

        await allowConflict(() =>
          apiRequest(`/api/games/${gameCode}/start`, { method: "POST" }),
        );

        progress.current = null;
        navigate(ROUTES.game(gameCode));
      } catch (error) {
        setError(error);
      } finally {
        setIsStarting(false);
      }
    },
    [navigate],
  );

  return { startNewGame, isStarting, error };
}
