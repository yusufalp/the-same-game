import useGame from "../../hooks/useGame";
import SeatRow from "./SeatRow";

export default function PlayerList() {
  const { game } = useGame();

  return (
    <section>
      <h2>Players</h2>
      <ul>
        {game.seats.map((seat) => (
          <SeatRow key={seat.seat} seat={seat} />
        ))}
      </ul>
    </section>
  );
}
