import { Link } from "react-router-dom";
import Tooltip from "./Tooltip";

export default function OptionLink({ to, title, description }) {
  const link = (
    <Link
      to={to}
      className="block rounded border border-neutral-300 px-5 py-4 text-lg font-medium hover:border-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
    >
      {title}
    </Link>
  );

  return description ? <Tooltip content={description}>{link}</Tooltip> : link;
}
