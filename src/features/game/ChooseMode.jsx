import OptionLink from "../../components/OptionLink";
import { ROUTES } from "../../constants/routes";

export default function ChooseMode() {
  return (
    <div>
      <h1>What would you like to do?</h1>
      <OptionLink
        to={ROUTES.host}
        title="Host a game"
        description="Choose how many people play, then share a link."
      />
      <OptionLink
        to={ROUTES.join}
        title="Join a game"
        description="Enter the code a host gave you."
      />
    </div>
  );
}
