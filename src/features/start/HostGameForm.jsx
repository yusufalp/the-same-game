import { useState } from "react";
import useStartNewGame from "../../hooks/useStartNewGame";

import SegmentedControl from "../../components/SegmentedControl";
import Alert from "../../components/Alert";
import Button from "../../components/Button";

const PLAYER_OPTIONS = [
  { value: 1, label: "1 player" },
  { value: 2, label: "2 players" },
];

export default function HostGameForm() {
  const { startNewGame, isStarting, error } = useStartNewGame();
  const [maxPlayers, setMaxPlayers] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    startNewGame({ maxPlayers });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <SegmentedControl
        label="Number of players"
        options={PLAYER_OPTIONS}
        value={maxPlayers}
        onChange={setMaxPlayers}
      />

      <p className="text-sm text-neutral-500">
        {maxPlayers === 1
          ? "You play on your own."
          : "Play against a computer."}
      </p>

      {error && <Alert>{error.message}</Alert>}

      <Button type="submit" disabled={isStarting}>
        {isStarting ? "Creating game..." : "Create Game"}
      </Button>
    </form>
  );
}
