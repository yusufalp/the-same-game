import { useState } from "react";
import useGame from "../../hooks/useGame";
import Button from "../../components/Button";
import useEndGame from "../../hooks/useEndGame";

export default function EndGameButton() {
  const { game, you, isActing } = useGame();

  const endGame = useEndGame();

  const [confirming, setConfirming] = useState(false);

  if (!you?.isHost || game.status === "finished") return null;

  if (!confirming) {
    return (
      <Button variant="danger" small onClick={() => setConfirming(true)}>
        End this game
      </Button>
    );
  }

  const handleEnd = async () => {
    await endGame();
    setConfirming(false);
  };

  return (
    <span>
      <span>End this game?</span>
      <Button disabled={isActing} onClick={handleEnd}>
        Yes, end it
      </Button>
      <Button
        variant="secondary"
        disabled={isActing}
        onClick={() => setConfirming(false)}
      >
        Cancel
      </Button>
    </span>
  );
}
