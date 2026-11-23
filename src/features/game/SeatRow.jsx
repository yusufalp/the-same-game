import Badge from "../../components/Badge";
import useGame from "../../hooks/useGame";
import AddComputerButton from "./AddComputerButton";

const ordinal = (n) => ["1st", "2nd", "3rd", "4th"][n - 1] ?? `${n}th`;

export default function SeatRow({ seat }) {
  const { game, you } = useGame();
  const player = seat.player;

  if (!player) {
    return (
      <li className="player-row">
        <Badge tone="gray" className="number-badge">
          {seat.seat}
        </Badge>
        <span className="text-text-muted">Open seat</span>
        <span>
          <AddComputerButton />
        </span>
      </li>
    );
  }

  const isYou = you?.playerId === player.id;
  const isCurrent =
    game.status === "playing" && game.currentPlayerId === player.id;
  const points = `${player.score} ${player.score === 1 ? "point" : "points"}`;

  return (
    <li className="inline-actions-spread">
      <div className="player-row">
        <Badge
          tone="gray"
          className={`number-badge ${isCurrent ? "number-badge-active" : ""}`}
        >
          {seat.seat}
        </Badge>
        <span>{player.displayName}</span>
        {isYou && <Badge>You</Badge>}
        {player.isHost && <Badge>Host</Badge>}
        {player.isAi && <Badge>Computer</Badge>}
      </div>
      <div>
        {game.status === "playing" && <span>{points}</span>}
        {game.status === "finished" && (
          <div className="inline-actions">
            <span>{points}</span>
            {player.placement >= 1 && player.placement <= 3 && (
              <Badge
                width="3rem"
                align="center"
                className={`placement-${player.placement}`}
              >
                {ordinal(player.placement)}
              </Badge>
            )}
          </div>
        )}
      </div>
    </li>
  );
}
