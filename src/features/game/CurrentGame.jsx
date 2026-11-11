import Alert from "../../components/Alert";
import Container from "../../components/Container";
import JsonViewer from "../../components/JsonViewer";
import useComputerAutoplay from "../../hooks/useComputerAutoplay";

import useGame from "../../hooks/useGame";
import GameHeader from "./GameHeader";
import GameLoadState from "./GameLoadState";
import GameStatus from "./GameStatus";
import InviteLink from "./InviteLink";
import PlayerList from "./PlayerList";
import TurnInfo from "./TurnInfo";
import Board from "./Board";

export default function CurrentGame() {
  const { state, game, error } = useGame();

  useComputerAutoplay();

  if (!game) return <GameLoadState />;

  return (
    <Container>
      {error && <Alert>{error.message} Trying again.</Alert>}

      <GameHeader />
      <GameStatus />

      {game.status === "waiting" && <InviteLink />}
      {game.status === "playing" && <TurnInfo />}

      {game.status === "playing" && <Board />}

      <PlayerList />

      <JsonViewer data={state} />
    </Container>
  );
}
