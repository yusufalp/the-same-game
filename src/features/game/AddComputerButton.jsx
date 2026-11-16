import Button from "../../components/Button";
import useAddComputers from "../../hooks/useAddComputers";
import useGame from "../../hooks/useGame";

export default function AddComputerButton() {
  const { game, you, isActing } = useGame();
  const addComputers = useAddComputers();

  if (!you?.isHost || game.status !== "waiting") return null;

  return (
    <Button
      variant="secondary"
      disabled={isActing}
      onClick={() => addComputers(1)}
    >
      Add computer
    </Button>
  );
}
