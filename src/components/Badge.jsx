const TONES = {
  neutral: "badge-neutral",
  gray: "badge-gray",
  amber: "badge-amber",
  green: "badge-green",
  blue: "badge-blue",
};

const SIZES = {
  xs: "badge-xs",
  sm: "badge-sm",
  md: "badge-md",
  lg: "badge-lg",
};

export default function Badge({
  children,
  tone = "neutral",
  size = "sm",
  className = "",
}) {
  return (
    <span className={`badge ${TONES[tone]} ${SIZES[size]} ${className}`}>
      {children}
    </span>
  );
}
