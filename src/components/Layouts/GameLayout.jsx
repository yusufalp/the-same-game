import { Outlet } from "react-router-dom";

export default function GameLayout() {
  return (
    <div>
      <h1>Game</h1>
      <Outlet />
    </div>
  );
}
