import Button from "../../components/Button";
import useGame from "../../hooks/useGame";
import useStartGame from "../../hooks/useStartGame";

export default function StartButton() {
  const { you, isActing } = useGame();
  const startGame = useStartGame();

  if (!you?.canStart) return null;

  return (
    <Button disabled={isActing} onClick={() => startGame()}>
      Start Game
    </Button>
  );
}
