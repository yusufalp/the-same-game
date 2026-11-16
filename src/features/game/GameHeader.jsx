import useGame from "../../hooks/useGame";
import StatusBadge from "./StatusBadge";

export default function GameHeader() {
  const { game } = useGame();

  const title =
    game.status === "waiting"
      ? "New game"
      : game.maxPlayers === 1
        ? "Solo game"
        : "Against the computer";

  return (
    <header className="flex items-start justify-between gap-4">
      <h1 className="font-mono text-3xl font-semibold tracking-widest">
        {title}
      </h1>
      <StatusBadge status={game.status} />
    </header>
  );
}
