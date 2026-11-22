import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import useGame from "../../hooks/useGame";
import { ROUTES } from "../../constants/routes";
import Button from "../../components/Button";

export default function GameLoadState() {
  const { error, refresh, isRefreshing } = useGame();

  if (!error || isRefreshing) {
    return (
      <PageContainer>
        <p>Loading game...</p>
      </PageContainer>
    );
  }

  const notFound = error.status === 404;

  return (
    <PageContainer>
      <div role="alert">
        <p>{error.message}</p>
        <p>
          {notFound
            ? "Check the game code and try again."
            : "Try again in a moment."}
        </p>
        <div>
          {!notFound && <Button onClick={() => refresh()}>Try again</Button>}
          <Link to={ROUTES.start}>Back to Start</Link>
        </div>
      </div>
    </PageContainer>
  );
}
