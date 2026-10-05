const API_BASE = "http://localhost:5151";

export async function hostGame({ maxPlayers, anonymousUserId }) {
  const response = await fetch(`${API_BASE}/games`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      max_players: maxPlayers,
      anonymous_user_id: anonymousUserId,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.message || "Failed to host game");
  }

  return response.json();
}
