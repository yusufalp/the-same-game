import { useState } from "react";
import useStartNewGame from "../../hooks/useStartNewGame";

import SegmentedControl from "../../components/SegmentedControl";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import { PLAYER_OPTIONS } from "../../constants/playerOptions";

export default function HostGameForm() {
  const { startNewGame, isStarting, error } = useStartNewGame();
  const [maxPlayers, setMaxPlayers] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    startNewGame({ maxPlayers });
  };

  return (
    <form onSubmit={handleSubmit} className="flex-row space-y-9">
      <div>
        <SegmentedControl
          label="Game mode"
          options={PLAYER_OPTIONS}
          value={maxPlayers}
          onChange={setMaxPlayers}
        />

        <p className="caption">
          {maxPlayers === 1
            ? "You play on your own."
            : "Play against a computer."}
        </p>
      </div>

      {error && <Alert>{error.message}</Alert>}

      <Button type="submit" disabled={isStarting}>
        {isStarting ? "Creating game..." : "Create Game"}
      </Button>
    </form>
  );
}
