import { useId } from "react";

export default function SegmentedControl({ label, options, value, onChange }) {
  const name = useId();

  return (
    <fieldset>
      <legend className="mb-1 text-sm text-neutral-500">{label}</legend>
      <div className="inline-flex divide-x divide-neutral-300 overflow-hidden rounded border border-neutral-300">
        {options.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="peer sr-only"
            />
            <span
              className="block cursor-pointer px-5 py-2 
            text-sm text-neutral-700 hover:text-neutral-700 hover:bg-neutral-200 peer-checked:bg-neutral-900 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-inset peer-focus-visible:ring-neutral-900"
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
