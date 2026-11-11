import Badge from "../../components/Badge";

const TONES = {
  waiting: "amber",
  ready: "green",
  playing: "blue",
  finished: "gray",
};

export default function StatusBadge({ status }) {
  return (
    <Badge tone={TONES[status] ?? "gray"} size="md" className="capitalize">
      {status}
    </Badge>
  );
}
