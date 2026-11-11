const TONES = {
  neutral: "bg-neutral-100 text-neutral-600",
  gray: "bg-neutral-200 text-neutral-700",
  amber: "bg-amber-100 text-amber-800",
  green: "bg-green-100 text-green-800",
  blue: "bg-blue-100 text-blue-800",
};

const SIZES = {
  sm: "rounded px-1.5 py-0.5 text-xs",
  md: "rounded-full px-3 py-1 text-sm font-medium",
};

export default function Badge({
  children,
  tone = "neutral",
  size = "sm",
  className = "",
}) {
  return (
    <span className={`${SIZES[size]} ${TONES[tone]} ${className}`}>
      {children}
    </span>
  );
}
