import PageContainer from "../../components/PageContainer";
import useComputerAutoplay from "../../hooks/useComputerAutoplay";

import useGame from "../../hooks/useGame";
import GameHeader from "./GameHeader";
import GameLoadState from "./GameLoadState";
import GameStatus from "./GameStatus";
import PlayerList from "./PlayerList";
import TurnInfo from "./TurnInfo";
import Board from "./Board";
import getStatusMessage from "../../utils/getStatusMessage";

export default function CurrentGame() {
  const { game, you } = useGame();

  useComputerAutoplay();

  if (!game) return <GameLoadState />;

  return (
    <PageContainer>
      <GameHeader />

      {game.status === "playing" && <TurnInfo />}

      <p className="text-neutral-700">{getStatusMessage(game, you)}</p>

      {game.status === "playing" && <Board />}

      <PlayerList />

      <GameStatus />
    </PageContainer>
  );
}
