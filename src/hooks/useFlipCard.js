import { useCallback } from "react";
import { apiRequest } from "../services/apiClient";
import useGame from "./useGame";

// POST /api/games/:gameCode/flip: turn one card face up (needs a spin first).
// The response carries that card's details, which is how you learn what it is.
//   const flipCard = useFlipCard();
//   <button onClick={() => flipCard(slot.slot)}>
export default function useFlipCard() {
  const { gameCode, runAction } = useGame();

  return useCallback(
    (slot) =>
      runAction(() =>
        apiRequest(`/api/games/${gameCode}/flip`, {
          method: "POST",
          body: { slot },
        }),
      ),
    [gameCode, runAction],
  );
}
