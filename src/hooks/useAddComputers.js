import { useCallback } from "react";
import { apiRequest } from "../services/apiClient";
import useGame from "./useGame";

// POST /api/games/:gameCode/computers (host only): fill open seats with computer players.
//   const addComputers = useAddComputers();
//   addComputers(1)   adds one;   addComputers()   fills every open seat
export default function useAddComputers() {
  const { gameCode, runAction } = useGame();

  return useCallback(
    (count) =>
      runAction(() =>
        apiRequest(`/api/games/${gameCode}/computers`, {
          method: "POST",
          body: { count: typeof count === "number" ? count : undefined },
        }),
      ),
    [gameCode, runAction],
  );
}
