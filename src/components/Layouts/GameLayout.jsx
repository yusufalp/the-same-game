import { Link, Outlet } from "react-router-dom";

export default function GameLayout() {
  return (
    <div>
      <h1>What would you like to do?</h1>

      <Link to="host">Host a game</Link>
      <Link to="join">Join a game</Link>

      <Outlet />
    </div>
  );
}
