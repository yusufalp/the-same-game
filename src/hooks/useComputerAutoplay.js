import { useEffect } from "react";
import useComputerMove from "./useComputerMove";
import useGame from "./useGame";

// Not an API call itself: plays the computers' turns for the host.
// While a computer is up, it asks the server for one step every `delayMs`.
// Only the host's browser does this, so steps are not sent twice.
// Call it once, in the game screen.
export default function useComputerAutoplay(delayMs = 3000) {
  const { game, you, board, isActing } = useGame();
  const computerMove = useComputerMove();

  const currentPlayer = game?.seats.find(
    (seat) => seat.player?.id === game.currentPlayerId,
  )?.player;

  const shouldPlay = Boolean(
    game?.status === "playing" &&
    you?.isHost &&
    currentPlayer?.isAi &&
    !isActing,
  );

  const faceUp = board.filter(
    (card) => card.isFaceUp && !card.isMatched,
  ).length;

  const stepKey = [
    game?.currentPlayerId,
    game?.spin,
    game?.cardsLeft,
    faceUp,
  ].join("|");

  useEffect(() => {
    if (!shouldPlay) return;
    const timer = setTimeout(computerMove, delayMs);
    return () => clearTimeout(timer);
  }, [shouldPlay, stepKey, computerMove, delayMs]);
}
