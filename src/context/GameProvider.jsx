import { useState, useMemo, useRef, useCallback } from "react";
import useLoadGame from "../hooks/useLoadGame";
import GameContext from "./GameContext";

const normalize = (data) => ({ board: [], ...data });

export default function GameProvider({ gameCode, children }) {
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);
  const [actionError, setActionError] = useState(null);
  const [isActing, setIsActing] = useState(false);

  const version = useRef(0);

  const saveLoadGame = useCallback((data) => {
    setState(normalize(data));
    setError(null);
  }, []);

  const saveLoadError = useCallback((err) => setError(err), []);

  const { refresh, isRefreshing } = useLoadGame({
    gameCode,
    version,
    onState: saveLoadGame,
    onError: saveLoadError,
  });

  const runAction = useCallback(async (request) => {
    setIsActing(true);
    setActionError(null);

    try {
      const data = await request();
      version.current += 1;
      setState(normalize(data));
      setError(null);
      return data;
    } catch (error) {
      setActionError(error);
      return null;
    } finally {
      setIsActing(false);
    }
  }, []);

  const clearActionError = useCallback(() => setActionError(null), []);

  const value = useMemo(
    () => ({
      gameCode,
      state,
      game: state?.game ?? null,
      you: state?.you ?? null,
      board: state?.board ?? [],
      isLoading: state === null && error === null,
      error,
      actionError,
      isActing,
      isRefreshing,
      refresh,
      runAction,
      clearActionError,
    }),
    [
      gameCode,
      state,
      error,
      actionError,
      isActing,
      isRefreshing,
      refresh,
      runAction,
      clearActionError,
    ],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
