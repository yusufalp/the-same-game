export const GAME_CODE_LENGTH = 6;

export function formatGameCode(value) {
  return value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, GAME_CODE_LENGTH);
}
