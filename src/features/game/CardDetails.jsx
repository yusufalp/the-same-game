export default function CardDetails({ card }) {
  if (!card) return <span>Revealing…</span>;
  if (typeof card !== "object") return <span>{String(card)}</span>;

  return (
    <dl>
      <p>{`${card.number} ${card.color} ${card.name}`}</p>
      <p>{card.category}</p>
    </dl>
  );
}
