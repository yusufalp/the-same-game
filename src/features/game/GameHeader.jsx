import useGame from "../../hooks/useGame";
import StatusBadge from "./StatusBadge";

export default function GameHeader() {
  const { game } = useGame();

  return (
    <header className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm text-neutral-500">Game code</p>
        <h1 className="font-mono text-4xl font-semibold tracking-widest">
          {game.gameCode}
        </h1>
      </div>
      <StatusBadge status={game.status} />
    </header>
  );
}
