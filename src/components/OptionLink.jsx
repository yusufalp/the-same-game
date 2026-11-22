import { Link } from "react-router-dom";
import Tooltip from "./Tooltip";

export default function OptionLink({ to, title, description }) {
  const link = (
    <Link to={to} className="option-link">
      {title}
    </Link>
  );

  return description ? <Tooltip content={description}>{link}</Tooltip> : link;
}
