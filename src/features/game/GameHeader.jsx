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
    <header className="game-header">
      <h1 className="h1">
        {title}
      </h1>
      <StatusBadge status={game.status} />
    </header>
  );
}
