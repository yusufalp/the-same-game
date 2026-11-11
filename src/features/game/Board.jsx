import useFlipCard from "../../hooks/useFlipCard";
import useEndTurn from "../../hooks/useEndTurn";
import useGame from "../../hooks/useGame";
import useSpin from "../../hooks/useSpin";

const icons = ["✦", "●", "▲", "◆", "☀", "♫", "♣", "✿", "⬟", "☾", "♥", "✚"];

function CardDetails({ card }) {
  if (!card) return <span className="text-sm text-neutral-500">Revealing…</span>;
  if (typeof card !== "object") return <span className="font-medium">{String(card)}</span>;

  return (
    <dl className="mt-2 w-full space-y-1 text-left text-xs">
      {Object.entries(card).map(([key, value]) => (
        <div key={key} className="flex justify-between gap-2">
          <dt className="text-neutral-500">{key}</dt>
          <dd className="truncate font-medium text-neutral-800">{String(value)}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function Board() {
  const { board, game, you, isActing } = useGame();
  const flipCard = useFlipCard();
  const endTurn = useEndTurn();
  const spin = useSpin();
  const faceUpCount = board.filter((slot) => slot.isFaceUp && !slot.isMatched).length;
  const canFlip = you?.isYourTurn && game.spin != null && faceUpCount < 2 && !isActing;

  return (
    <section className="space-y-3" aria-label="Game board">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-neutral-900">Board</h2>
        {you?.isYourTurn && (
          <button
            type="button"
            onClick={spin}
            disabled={isActing || game.spin != null}
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {game.spin == null ? "Spin" : `Spin: ${game.spin}`}
          </button>
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
        className="grid w-full gap-2 sm:gap-3"
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
              aria-label={revealed ? `Card ${slot.slot}, revealed` : `Flip card ${slot.slot}`}
              className={`flex aspect-square min-w-0 flex-col items-center justify-center overflow-hidden rounded-xl border p-1 transition sm:rounded-2xl sm:p-2 ${
                revealed
                  ? "border-amber-200 bg-amber-50"
                  : "border-neutral-200 bg-white text-neutral-400 shadow-sm hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow"
              } disabled:cursor-default disabled:hover:translate-y-0`}
            >
              {revealed ? (
                <CardDetails card={slot.card} />
              ) : (
                <span aria-hidden="true" className="text-xl sm:text-2xl">
                  {icons[(slot.slot * 7) % icons.length]}
                </span>
              )}
            </button>
          );
        })}
      </div>
      {you?.isYourTurn && faceUpCount === 2 && (
        <button
          type="button"
          onClick={endTurn}
          disabled={isActing}
          className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-amber-400 disabled:cursor-wait disabled:opacity-60"
        >
          End my turn
        </button>
      )}
    </section>
  );
}
