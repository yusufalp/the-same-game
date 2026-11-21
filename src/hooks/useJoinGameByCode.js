import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../services/apiClient";
import { ROUTES } from "../constants/routes";

export default function useJoinGameByCode() {
  const navigate = useNavigate();
  const [isJoining, setIsJoining] = useState(false);
  const [error, setError] = useState(null);

  const joinGameByCode = useCallback(
    async (gameCode) => {
      setIsJoining(true);
      setError(null);

      try {
        const data = await apiRequest(`/api/games/${gameCode}/join`, {
          method: "POST",
        });
        navigate(ROUTES.game(data.game.gameCode));
        return data;
      } catch (error) {
        setError(error);
        return null;
      } finally {
        setIsJoining(false);
      }
    },
    [navigate],
  );

  return { joinGameByCode, isJoining, error };
}
