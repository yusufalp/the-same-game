import CopyField from "../../components/CopyField";
import useGame from "../../hooks/useGame";

export default function InviteLink() {
  const { game } = useGame();

  return <CopyField label="Invite link" value={game.joinUrl} />;
}
