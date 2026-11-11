import Alert from "../../components/Alert";
import useGame from "../../hooks/useGame";
import getStatusMessage from "../../utils/getStatusMessage";
import JoinButton from "./JoinButton";
import RefreshButton from "./RefreshButton";
import StartButton from "./StartButton";

export default function GameStatus() {
  const { game, you, actionError } = useGame();

  return (
    <div className="space-y-3">
      <p className="text-neutral-700">{getStatusMessage(game, you)}</p>

      <div className="flex flex-wrap items-center gap-2">
        <JoinButton />
        <StartButton />
        <RefreshButton />
      </div>

      {actionError && <Alert>{actionError.message}</Alert>}
    </div>
  );
}
