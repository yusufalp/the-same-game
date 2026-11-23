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

const ALIGNMENTS = {
  left: "badge-align-left",
  right: "badge-align-right",
  center: "badge-align-center",
};

export default function Badge({
  children,
  tone = "neutral",
  size = "sm",
  width,
  align = "left",
  className = "",
}) {
  const alignmentClass = width == null ? "" : ALIGNMENTS[align];

  return (
    <span
      className={`badge ${TONES[tone]} ${SIZES[size]} ${alignmentClass} ${className}`}
      style={width == null ? undefined : { width }}
    >
      {children}
    </span>
  );
}
