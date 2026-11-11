import { useCallback } from "react";
import { apiRequest } from "../services/apiClient";
import useGame from "./useGame";

// POST /api/games/:gameCode/end-turn: after the second flip. A match is taken and you
// spin again; a miss turns both cards back over and passes the turn.
// Call it after a short pause so everyone can see both cards.
export default function useEndTurn() {
  const { gameCode, runAction } = useGame();

  return useCallback(
    () =>
      runAction(() =>
        apiRequest(`/api/games/${gameCode}/end-turn`, { method: "POST" }),
      ),
    [gameCode, runAction],
  );
}
