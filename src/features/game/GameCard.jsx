import { CARD_ICONS } from "../../constants/cardIcons";
import CardDetails from "./CardDetails";

export default function GameCard({ slot, canFlip, onFlip }) {
  const revealed = slot.isFaceUp || slot.isMatched;

  return (
    <button
      type="button"
      onClick={() => onFlip(slot.slot)}
      disabled={!canFlip || revealed}
      aria-label={
        revealed ? `Card ${slot.slot}, revealed` : `Flip card ${slot.slot}`
      }
    >
      {revealed ? (
        <CardDetails card={slot.card} />
      ) : (
        <span aria-hidden="true">
          {CARD_ICONS[(slot.slot * 7) % CARD_ICONS.length]}
        </span>
      )}
    </button>
  );
}
