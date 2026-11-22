import Badge from "../../components/Badge";
import NumberBadge from "../../components/NumberBadge";
import useGame from "../../hooks/useGame";
import AddComputerButton from "./AddComputerButton";

const ordinal = (n) => ["1st", "2nd", "3rd", "4th"][n - 1] ?? `${n}th`;

export default function SeatRow({ seat }) {
  const { game, you } = useGame();
  const player = seat.player;

  if (!player) {
    return (
      <li>
        <NumberBadge number={seat.seat} />
        <span>Open seat</span>
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
    <li>
      <NumberBadge number={seat.seat} active={isCurrent} />
      <span>{player.displayName}</span>
      {isYou && <Badge>You</Badge>}
      {player.isHost && <Badge>Host</Badge>}
      {player.isAi && <Badge>Computer</Badge>}

      {game.status === "playing" && (
        <span>
          {points}
        </span>
      )}
      {game.status === "finished" && (
        <span>
          {points}, {ordinal(player.placement)}
        </span>
      )}
    </li>
  );
}
