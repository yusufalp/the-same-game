import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function JoinGame() {
  const [gameId, setGameId] = useState("");

  return (
    <div>
      <h1>Join Game</h1>

      <label htmlFor="gameId">Enter game code provided by host</label>
      <input
        type="text"
        name="gameId"
        id="gameId"
        value={gameId}
        onChange={(e) => setGameId(e.target.value)}
      />

      <Outlet />
    </div>
  );
}
