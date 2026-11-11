export default function Button({
  children,
  variant = "primary",
  small = false,
  type = "button",
  className = "",
  ...props
}) {
  const look =
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-700"
      : "border border-neutral-300 text-neutral-700 hover:bg-neutral-50";
  const size = small ? "px-3 py-1" : "px-4 py-2";

  return (
    <button
      type={type}
      className={`
        rounded font-medium text-sm
        focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50 
        ${size} ${look} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
