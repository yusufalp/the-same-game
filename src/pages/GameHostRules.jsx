import { useState } from "react";

export default function GameHostRules() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div>
      <button onClick={() => setIsCollapsed((prev) => !prev)}>
        {isCollapsed ? "Show" : "Hide"} Rules
      </button>
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
