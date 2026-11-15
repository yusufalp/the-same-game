import Container from "../../components/Container";
import JsonViewer from "../../components/JsonViewer";
import useComputerAutoplay from "../../hooks/useComputerAutoplay";

import useGame from "../../hooks/useGame";
import GameHeader from "./GameHeader";
import GameLoadState from "./GameLoadState";
import GameStatus from "./GameStatus";
import PlayerList from "./PlayerList";
import TurnInfo from "./TurnInfo";
import Board from "./Board";

export default function CurrentGame() {
  const { state, game } = useGame();

  useComputerAutoplay();

  if (!game) return <GameLoadState />;

  return (
    <Container>
      <GameHeader />
      <GameStatus />

      {game.status === "playing" && <TurnInfo />}

      {game.status === "playing" && <Board />}

      <PlayerList />

      <JsonViewer data={state} />
    </Container>
  );
}
