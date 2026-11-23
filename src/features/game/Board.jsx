import useFlipCard from "../../hooks/useFlipCard";
import useEndTurn from "../../hooks/useEndTurn";
import useGame from "../../hooks/useGame";
import useSpin from "../../hooks/useSpin";
import Button from "../../components/Button";
import GameCard from "./GameCard";

export default function Board() {
  const { board, game, you, isActing } = useGame();
  const flipCard = useFlipCard();
  const endTurn = useEndTurn();
  const spin = useSpin();
  const faceUpCount = board.filter(
    (slot) => slot.isFaceUp && !slot.isMatched,
  ).length;
  const canFlip =
    you?.isYourTurn && game.spin != null && faceUpCount < 2 && !isActing;

  return (
    <section aria-label="Game board">
      <div className="inline-actions-spread">
        {you?.isYourTurn && (
          <Button onClick={spin} disabled={isActing || game.spin !== null}>
            {game.spin === null ? "Spin" : "Waiting turn"}
          </Button>
        )}
        {you?.isYourTurn && faceUpCount === 2 && (
          <Button variant="warning" onClick={endTurn} disabled={isActing}>
            End my turn
          </Button>
        )}
      </div>
      <p>
        {game.spin == null
          ? "Spin to start your turn, then choose a card."
          : faceUpCount === 2
            ? "Both cards are revealed. End your turn to check for a match."
            : "Choose cards to reveal them."}
      </p>
      <div className="game-board-grid">
        {board.map((slot) => (
          <GameCard
            key={slot.slot}
            slot={slot}
            canFlip={canFlip}
            onFlip={flipCard}
          />
        ))}
      </div>
    </section>
  );
}
