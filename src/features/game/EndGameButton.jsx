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
      <Button variant="secondary" small onClick={() => setConfirming(true)}>
        End this game
      </Button>
    );
  }

  const handleEnd = async () => {
    console.log("handleEnd");
    await endGame();
    setConfirming(false);
  };

  return (
    <span className="flex items-center gap-2">
      <span className="text-sm text-neutral-600">End this game?</span>
      <Button small disabled={isActing} onClick={handleEnd}>
        Yes, end it
      </Button>
      <Button
        variant="secondary"
        small
        disabled={isActing}
        onClick={() => setConfirming(false)}
      >
        Cancel
      </Button>
    </span>
  );
}
