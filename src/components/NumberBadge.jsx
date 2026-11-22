export default function NumberBadge({ number, active = false }) {
  return (
    <span className={`number-badge ${active ? "number-badge-active" : ""}`}>
      {number}
    </span>
  );
}
