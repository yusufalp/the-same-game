import Alert from "../../components/Alert";
import OptionLink from "../../components/OptionLink";
import { ROUTES } from "../../constants/ROUTES";
import useGame from "../../hooks/useGame";
import getStatusMessage from "../../utils/getStatusMessage";
import EndGameButton from "./EndGameButton";
// import JoinButton from "./JoinButton";
// import RefreshButton from "./RefreshButton";
import StartButton from "./StartButton";

export default function GameStatus() {
  const { game, you, actionError } = useGame();

  return (
    <div className="space-y-3">
      <p className="text-neutral-700">{getStatusMessage(game, you)}</p>

      <div className="flex flex-wrap items-center gap-2">
        <StartButton />
        <EndGameButton />
        {game.status === "finished" && (
          <OptionLink to={ROUTES.start} title="Back to Start" />
        )}
        {/* <JoinButton /> */}
        {/* <RefreshButton /> */}
      </div>

      {actionError && <Alert>{actionError.message}</Alert>}
    </div>
  );
}
