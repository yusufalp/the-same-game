import { useCallback, useEffect, useRef, useState } from "react";
import { apiRequest } from "../services/apiClient";

// GET /api/games/:gameCode: load the game once when the page opens, and again
// whenever you call `refresh()` (the Refresh and Try again buttons).
// There is no polling and no automatic retry: nothing is requested unless you ask.
// Used by GameProvider (it is not meant to be called elsewhere).
export default function useLoadGame({ gameCode, version, onState, onError }) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const inFlight = useRef(0);

  const loadGame = useCallback(
    async (signal) => {
      if (!gameCode) return;

      const startedAt = version.current;
      inFlight.current += 1;
      setIsRefreshing(true);

      try {
        const data = await apiRequest(`/api/games/${gameCode}`, { signal });

        if (version.current !== startedAt) return;

        onState(data);
      } catch (error) {
        if (error.name === "AbortError") return;
        onError(error);
      } finally {
        inFlight.current -= 1;
        setIsRefreshing(inFlight.current > 0);
      }
    },
    [gameCode, version, onState, onError],
  );

  useEffect(() => {
    const controller = new AbortController();
    loadGame(controller.signal);
    return () => controller.abort();
  }, [loadGame]);

  const refresh = useCallback(() => loadGame(), [loadGame]);

  return { refresh, isRefreshing };
}
