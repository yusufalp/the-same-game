import { useId } from "react";

export default function TextField({
  label,
  hint,
  id,
  inputClassName = "",
  children,
  ...inputProps
}) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div>
      <label htmlFor={inputId} className="mb-1 block text-sm text-neutral-500">
        {label}
      </label>
      <div className="flex gap-2">
        <input
          id={inputId}
          className={`
            min-w-0 flex-1 rounded border border-neutral-300 
            bg-white px-3 py-2 text-sm 
            focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 
            ${inputClassName}
          `}
          {...inputProps}
        />
        {children}
      </div>
      {hint && <p className="mt-1 text-sm text-neutral-500">{hint}</p>}
    </div>
  );
}
