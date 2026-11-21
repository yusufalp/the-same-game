import { useState } from "react";
import Button from "../components/Button";

export default function HostGameRules() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div>
      <Button variant="info" onClick={() => setIsCollapsed((prev) => !prev)}>
        {isCollapsed ? "Show" : "Hide"} Rules
      </Button>

      {!isCollapsed && (
        <p>
          You can invite others to join or play against AI. If you select 1 as
          number of player, you will be playing solo. ff you choose more than
          one players, you can either invite someone via code provided once you
          start or add AI to play against. You can add up to 3 AI players to
          your game.
        </p>
      )}
    </div>
  );
}
