import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useHostGame } from "../../hooks/useHostGame";
import { useGameContext } from "../../context/GameContext";

export default function HostGame() {
  const [maxPlayers, setMaxPlayers] = useState(1);
  const { hostGame } = useHostGame();
  const { isLoading, error } = useGameContext();
  const navigate = useNavigate();

  const isValidNumberOfPlayers =
    maxPlayers && maxPlayers >= 1 && maxPlayers <= 4;

  const handleGameStart = async (e) => {
    e.preventDefault();

    if (!isValidNumberOfPlayers) return;

    console.log("Game Started", maxPlayers);

    try {
      const data = await hostGame(maxPlayers);

      navigate(`/games/${data.game.game_id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Host Game</h1>
      <p>How many players? (1-4)</p>

      <form>
        <label htmlFor="maxPlayers">Number of players</label>
        <input
          type="number"
          name="maxPlayers"
          id="maxPlayers"
          min={1}
          max={4}
          defaultValue={maxPlayers}
          onChange={(e) => setMaxPlayers(parseInt(e.target.value))}
        />

        <button
          type="submit"
          onClick={handleGameStart}
          disabled={!isValidNumberOfPlayers || isLoading}
        >
          {isLoading ? "Starting..." : "Start Game"}
        </button>

        {error && <p>{error}</p>}
      </form>

      <Outlet />
    </div>
  );
}
