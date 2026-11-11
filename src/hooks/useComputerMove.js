import { useCallback } from "react";
import { apiRequest } from "../services/apiClient";
import useGame from "./useGame";

// POST /api/games/:gameCode/computer-move (host only): ONE step for the computer
// whose turn it is (spin, flip, flip, or end turn). You rarely call this
// yourself: useComputerAutoplay does it for you.
export default function useComputerMove() {
  const { gameCode, runAction } = useGame();

  return useCallback(
    () =>
      runAction(() =>
        apiRequest(`/api/games/${gameCode}/computer-move`, { method: "POST" }),
      ),
    [gameCode, runAction],
  );
}
