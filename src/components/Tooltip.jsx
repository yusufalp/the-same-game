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
    <div className="group tooltip-anchor">
      {cloneElement(children, { "aria-describedby": id })}
      <span
        id={id}
        role="tooltip"
        className="tooltip"
      >
        {content}
      </span>
    </div>
  );
}
