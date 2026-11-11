import useGame from "../../hooks/useGame";
import SeatRow from "./SeatRow";

export default function PlayerList() {
  const { game } = useGame();

  return (
    <section>
      <h2 className="mb-1 text-sm font-medium text-neutral-500">Players</h2>
      <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
        {game.seats.map((seat) => (
          <SeatRow key={seat.seat} seat={seat} />
        ))}
      </ul>
    </section>
  );
}
