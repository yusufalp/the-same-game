import { useCallback } from "react";
import { apiRequest } from "../services/apiClient";
import useGame from "./useGame";

// POST /api/games/:gameCode/start (host only): shuffle the cards and begin.
// Works once every seat is filled (you.canStart is true).
export default function useStartGame() {
  const { gameCode, runAction } = useGame();

  return useCallback(
    () =>
      runAction(() =>
        apiRequest(`/api/games/${gameCode}/start`, { method: "POST" }),
      ),
    [gameCode, runAction],
  );
}
