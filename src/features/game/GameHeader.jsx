import useGame from "../../hooks/useGame";
import StatusBadge from "./StatusBadge";

export default function GameHeader() {
  const { game } = useGame();

  const hasComputer = game.seats.some((seat) => seat.player?.isAi);
  const title =
    game.maxPlayers === 1
      ? "Solo game"
      : hasComputer
        ? "Against the computer"
        : "New game";

  return (
    <header className="flex items-start justify-between gap-4">
      <h1 className="font-mono text-4xl font-semibold tracking-widest">
        {title}
      </h1>
      <StatusBadge status={game.status} />
    </header>
  );
}
