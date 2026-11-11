import Button from "../../components/Button";
import useGame from "../../hooks/useGame";

export default function RefreshButton() {
  const { refresh, isRefreshing, isActing } = useGame();

  return (
    <Button
      variant="secondary"
      small
      disabled={isRefreshing || isActing}
      onClick={() => refresh()}
    >
      {isRefreshing ? "Refreshing..." : "Refresh"}
    </Button>
  );
}
