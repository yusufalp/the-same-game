export default function getStatusMessage(game, you) {
  if (!you) return "You are not a player in this game.";

  switch (game.status) {
    case "waiting":
      return `The computer is not added yet. Add it to continue.`;
    case "ready":
      return "Ready to play. You can start the game.";
    case "playing":
      return you?.isYourTurn ? "It's your turn." : "Waiting for computer.";
    default:
      return "The game is over.";
  }
}
