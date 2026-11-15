import HostGameForm from "../start/HostGameForm";

export default function HostGame() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">New Game</h1>
      <HostGameForm />
    </div>
  );
}
