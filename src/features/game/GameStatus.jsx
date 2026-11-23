import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import { ROUTES } from "../../constants/routes";
import useGame from "../../hooks/useGame";
import EndGameButton from "./EndGameButton";
// import JoinButton from "./JoinButton";
// import RefreshButton from "./RefreshButton";
import StartButton from "./StartButton";

export default function GameStatus() {
  const { game, actionError } = useGame();
  const navigate = useNavigate();

  return (
    <div>
      <div className="inline-actions-spread">
        <StartButton />
        <EndGameButton />

        {game.status === "finished" && (
          <Button variant="secondary" onClick={() => navigate(ROUTES.start)}>
            Back to Start
          </Button>
        )}

        {/* <JoinButton /> */}
        {/* <RefreshButton /> */}
      </div>

      {actionError && <Alert>{actionError.message}</Alert>}
    </div>
  );
}
