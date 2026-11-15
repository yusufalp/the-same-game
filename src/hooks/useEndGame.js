import { useCallback } from "react";
import useGame from "./useGame";
import { apiRequest } from "../services/apiClient";

// POST /api/games/:gameCode/end (host only): finish the game now.
// The scores so far decide the placements. The response is the finished game.
//   const endGame = useEndGame();
//   <button onClick={() => endGame()}>
export default function useEndGame() {
  const { gameCode, runAction } = useGame();

  return useCallback(
    () =>
      runAction(() =>
        apiRequest(`/api/games/${gameCode}/end`, { method: "POST" }),
      ),
    [gameCode, runAction],
  );
}
