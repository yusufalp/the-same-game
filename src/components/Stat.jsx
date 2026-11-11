export default function Stat({ label, value }) {
  return (
    <div>
      <dt className="text-neutral-500">{label}</dt>
      <dd className="font-medium capitalize">{value}</dd>
    </div>
  );
}
