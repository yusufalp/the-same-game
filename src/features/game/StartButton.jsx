import Button from "../../components/Button";
import useGame from "../../hooks/useGame";
import useStartGame from "../../hooks/useStartGame";

export default function StartButton() {
  const { game, you, isActing } = useGame();
  const startGame = useStartGame();
  const canStart =
    you?.isHost &&
    (game.status === "waiting" || game.status === "ready") &&
    you.canStart;

  return (
    <Button disabled={isActing || !canStart} onClick={() => startGame()}>
      Start Game
    </Button>
  );
}
