import { useParams } from "react-router-dom";

export default function CurrentGame() {
  const { gameId } = useParams();

  return <div>Current game id: {gameId}</div>;
}
