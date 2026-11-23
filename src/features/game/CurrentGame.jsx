import PageContainer from "../../components/PageContainer";
import useComputerAutoplay from "../../hooks/useComputerAutoplay";

import useGame from "../../hooks/useGame";
import GameHeader from "./GameHeader";
import GameLoadState from "./GameLoadState";
import GameStatus from "./GameStatus";
import PlayerList from "./PlayerList";
import TurnInfo from "./TurnInfo";
import Board from "./Board";

export default function CurrentGame() {
  const { game } = useGame();

  useComputerAutoplay();

  if (!game) return <GameLoadState />;

  return (
    <PageContainer>
      <GameHeader />

      {game.status === "playing" && <TurnInfo />}
      {game.status === "playing" && <Board />}

      <PlayerList />

      <GameStatus />
    </PageContainer>
  );
}
