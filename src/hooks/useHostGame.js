import { hostGame } from "../api/gameApi";
import { useGameContext } from "../context/GameContext";
import { useAnonymousUser } from "./useAnonymousUser";

export function useHostGame() {
  const { setGame, setPlayers, setCurrentPlayer, setIsLoading, setError } =
    useGameContext();

  const anonymousUserId = useAnonymousUser();

  const handleHostGame = async (maxPlayers) => {
    if (!anonymousUserId) return;

    setIsLoading(true);
    setError(null);

    try {
      const data = await hostGame({ maxPlayers, anonymousUserId });

      setGame(data.game);
      setPlayers(data.players);
      setCurrentPlayer(data.current_player);

      return data;
    } catch (error) {
      setError(error.message || "Something went wrong");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { hostGame: handleHostGame };
}
