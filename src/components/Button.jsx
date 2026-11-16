const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "border border-neutral-300 text-neutral-700 hover:bg-neutral-100",
  success: "bg-emerald-600 text-white hover:bg-emerald-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  warning: "bg-amber-500 text-neutral-950 hover:bg-amber-600",
  info: "bg-sky-600 text-white hover:bg-sky-700",
};

const sizes = {
  xs: "px-2.5 py-1 text-xs rounded",
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-4 py-2 text-sm rounded-md",
  lg: "px-5 py-2.5 text-base rounded-lg",
  xl: "px-6 py-3 text-base rounded-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "sm",
  type = "button",
  className = "",
  ...props
}) {

  return (
    <button
      type={type}
      className={`
        rounded font-medium text-sm
        focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50 hover:cursor-pointer
        ${sizes[size]} ${variants[variant]} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
