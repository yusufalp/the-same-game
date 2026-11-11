import { useCallback } from "react";
import { apiRequest } from "../services/apiClient";
import useGame from "./useGame";

// POST /api/games/:gameCode/spin: once per turn. The server picks the attribute;
// read it afterwards from game.spin ("number", "color" or "category").
export default function useSpin() {
  const { gameCode, runAction } = useGame();

  return useCallback(
    () =>
      runAction(() =>
        apiRequest(`/api/games/${gameCode}/spin`, { method: "POST" }),
      ),
    [gameCode, runAction],
  );
}
