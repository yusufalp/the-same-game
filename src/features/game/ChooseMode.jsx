import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Tooltip from "../../components/Tooltip";
import { ROUTES } from "../../constants/routes";

export default function ChooseMode() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>What would you like to do?</h1>
      <Tooltip content="Choose how many people play, then share a link.">
        <Button variant="secondary" onClick={() => navigate(ROUTES.host)}>
          Host a game
        </Button>
      </Tooltip>
      <Tooltip content="Enter the code a host gave you.">
        <Button variant="secondary" onClick={() => navigate(ROUTES.join)}>
          Join a game
        </Button>
      </Tooltip>
    </div>
  );
}
