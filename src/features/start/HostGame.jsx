import HostGameForm from "./HostGameForm";

export default function HostGame() {
  return (
    <div className="flex-row space-y-3">
      <h2 className="h2">New Game</h2>
      <HostGameForm />
    </div>
  );
}
