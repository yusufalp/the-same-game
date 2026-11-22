import useFlipCard from "../../hooks/useFlipCard";
import useEndTurn from "../../hooks/useEndTurn";
import useGame from "../../hooks/useGame";
import useSpin from "../../hooks/useSpin";
import Button from "../../components/Button";
import { CARD_ICONS } from "../../constants/cardIcons";

function CardDetails({ card }) {
  if (!card)
    return <span className="text-sm text-neutral-500">Revealing…</span>;
  if (typeof card !== "object")
    return <span className="font-medium">{String(card)}</span>;

  return (
    <dl className="mt-2 w-full space-y-1 text-left text-xs flex flex-col">
      <p>{`${card.number} ${card.color} ${card.name}`}</p>
      <p>{card.category}</p>
    </dl>
  );
}

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
    <section className="space-y-3" aria-label="Game board">
      <h2 className="text-lg font-semibold text-neutral-900">Board</h2>
      <div className="flex flex-wrap items-center justify-between gap-2">
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
      <p className="text-sm text-neutral-600">
        {game.spin == null
          ? "Spin to start your turn, then choose a card."
          : faceUpCount === 2
            ? "Both cards are revealed. End your turn to check for a match."
            : "Choose cards to reveal them."}
      </p>
      <div
        className="game-board-grid"
        style={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}
      >
        {board.map((slot) => {
          const revealed = slot.isFaceUp || slot.isMatched;
          return (
            <button
              key={slot.slot}
              type="button"
              onClick={() => flipCard(slot.slot)}
              disabled={!canFlip || revealed}
              aria-label={
                revealed
                  ? `Card ${slot.slot}, revealed`
                  : `Flip card ${slot.slot}`
              }
              className={`game-card disabled:cursor-not-allowed ${revealed ? "game-card-revealed" : "game-card-hidden"}`}
            >
              {revealed ? (
                <CardDetails card={slot.card} />
              ) : (
                <span aria-hidden="true" className="game-card-icon">
                  {CARD_ICONS[(slot.slot * 7) % CARD_ICONS.length]}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
