import { useId } from "react";

export default function SegmentedControl({ label, options, value, onChange }) {
  const name = useId();

  return (
    <fieldset className="segmented-fieldset">
      <legend className="segmented-label">{label}</legend>
      <div className="segmented-control">
        {options.map((option) => (
          <label key={option.value} className="label">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="input"
            />
            <span className="segmented-option">{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
