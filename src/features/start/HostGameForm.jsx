import { useState } from "react";
import useHostGame from "../../hooks/useHostGame";
import SegmentedControl from "../../components/SegmentedControl";
import Alert from "../../components/Alert";
import Button from "../../components/Button";

const PLAYER_OPTIONS = [1, 2, 3, 4].map((n) => ({
  value: n,
  label: String(n),
}));

export default function HostGameForm() {
  const { hostGame, isHosting, error } = useHostGame();
  const [maxPlayers, setMaxPlayers] = useState(2);

  const handleSubmit = (event) => {
    event.preventDefault();
    hostGame({ maxPlayers });
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
          ? "A solo game: you play on your own."
          : "You will get a link to share. Open seats can be filled with computer players."}
      </p>

      {error && <Alert>{error.message}</Alert>}

      <Button type="submit" disabled={isHosting}>
        {isHosting ? "Creating game..." : "Create Game"}
      </Button>
    </form>
  );
}
