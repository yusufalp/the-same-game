export default function getStatusMessage(game, you) {
  if (!you && game.status !== "waiting")
    return "You are not a player in this game.";

  switch (game.status) {
    case "waiting":
      return `${game.spotsLeft} ${game.spotsLeft === 1 ? "seat is" : "seats are"} open. Share the link to invite players.`;
    case "ready":
      return you?.canStart
        ? "Everyone is here. You can start the game."
        : "Everyone is here. Waiting for host to start the game.";
    case "playing":
      return you?.isYourTurn
        ? "It's your turn."
        : "Waiting for the current player.";
    default:
      return "The game is over.";
  }
}
