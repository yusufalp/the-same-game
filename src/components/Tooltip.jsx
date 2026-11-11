import { cloneElement, useId } from "react";

// Shows `content` in a small bubble under its child while the pointer is over
// it or it has keyboard focus. Pure CSS, so there is no state to manage.
//
// `children` must be a single element that passes extra props through to the
// DOM (a Link, button or input), because it is given aria-describedby so screen
// readers read the tooltip text as that element's description.
export default function Tooltip({ content, children }) {
  const id = useId();

  return (
    <div className="group relative">
      {cloneElement(children, { "aria-describedby": id })}
      <span
        id={id}
        role="tooltip"
        className="pointer-events-none invisible absolute left-0 top-full z-10 mt-2 w-max max-w-xs rounded bg-neutral-900 px-3 py-2 text-sm text-white opacity-0 shadow transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100"
      >
        {content}
      </span>
    </div>
  );
}
