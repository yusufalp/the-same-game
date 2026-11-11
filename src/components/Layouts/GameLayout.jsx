import { Outlet, useParams } from "react-router-dom";
import GameProvider from "../../context/GameProvider";

export default function GameLayout() {
  const { gameCode } = useParams();

  return (
    <GameProvider key={gameCode} gameCode={gameCode}>
      <Outlet />
    </GameProvider>
  );
}
