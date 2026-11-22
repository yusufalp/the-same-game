import Alert from "../../components/Alert";
import OptionLink from "../../components/OptionLink";
import { ROUTES } from "../../constants/routes";
import useGame from "../../hooks/useGame";
import EndGameButton from "./EndGameButton";
// import JoinButton from "./JoinButton";
// import RefreshButton from "./RefreshButton";
import StartButton from "./StartButton";

export default function GameStatus() {
  const { game, actionError } = useGame();

  return (
    <div>
      <div>
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
