import { Link } from "react-router-dom";
import Container from "../../components/Container";
import useGame from "../../hooks/useGame";
import { ROUTES } from "../../constants/ROUTES";
import Button from "../../components/Button";

export default function GameLoadState() {
  const { error, refresh, isRefreshing } = useGame();

  if (!error || isRefreshing) {
    return (
      <Container>
        <p className="text-neutral-500">Loading game...</p>
      </Container>
    );
  }

  const notFound = error.status === 404;

  return (
    <Container>
      <div role="alert" className="space-y-2">
        <p className="font-medium text-red-700">{error.message}</p>
        <p className="text-sm text-neutral-500">
          {notFound
            ? "Check the game code and try again."
            : "Try again in a moment."}
        </p>
        <div className="flex items-center gap-4 pt-1">
          {!notFound && (
            <Button small onClick={() => refresh()}>
              Try again
            </Button>
          )}
          <Link to={ROUTES.start} className="text-sm underline">
            Back to Start
          </Link>
        </div>
      </div>
    </Container>
  );
}
