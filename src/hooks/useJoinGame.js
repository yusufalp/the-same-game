import { useCallback } from "react";
import useGame from "./useGame";
import { apiRequest } from "../services/apiClient";

// POST /api/games/:gameCode/join: take the next open seat.
//   const joinGame = useJoinGame();
//   <button onClick={() => joinGame()}>   (pass a name to choose one: joinGame("Ana"))
export default function useJoinGame() {
  const { gameCode, runAction } = useGame();

  return useCallback(
    (name) =>
      runAction(() =>
        apiRequest(`/api/games/${gameCode}/join`, {
          method: "POST",
          body: { name: typeof name === "string" ? name : undefined },
        }),
      ),
    [gameCode, runAction],
  );
}
