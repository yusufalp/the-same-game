import Stat from "../../components/Stat";
import useGame from "../../hooks/useGame";

export default function TurnInfo() {
  const { game, you } = useGame();

  const currentPlayer = game.seats.find(
    (seat) => seat.player?.id === game.currentPlayerId,
  )?.player;

  return (
    <dl className="grid grid-cols-3 gap-4 text-sm">
      <Stat
        label="Turn"
        value={you?.isYourTurn ? "You" : (currentPlayer?.displayName ?? "None")}
      />
      <Stat label="Spinner" value={game.spin ?? "Not spun"} />
      <Stat label="Cards left" value={game.cardsLeft} />
    </dl>
  );
}
