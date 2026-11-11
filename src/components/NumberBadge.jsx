export default function NumberBadge({ number, active = false }) {
  return (
    <span
      className={`
        flex h-6 w-6 shrink-0 items-center justify-center 
        rounded-full text-xs font-medium 
        ${active ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600"} 
      `}
    >
      {number}
    </span>
  );
}
