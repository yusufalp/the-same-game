import Button from "../../components/Button";
import useGame from "../../hooks/useGame";
import useJoinGame from "../../hooks/useJoinGame";

export default function JoinButton() {
  const { game, you, isActing } = useGame();
  const joinGame = useJoinGame();

  if (you || game.status !== "waiting") return null;

  return (
    <Button disabled={isActing} onClick={() => joinGame()}>
      Join Game
    </Button>
  );
}
