import { Link, Outlet, useMatch } from "react-router-dom";
import { ROUTES } from "../../constants/ROUTES";
import Container from "../Container";

export default function StartLayout() {
  const isFirstScreen = useMatch(ROUTES.start);

  return (
    <Container>
      <header className="flex items-baseline justify-between">
        <Link to={ROUTES.start} className="font-semibold">
          The Same Game
        </Link>
        {!isFirstScreen && (
          <Link
            to={ROUTES.start}
            className="text-sm text-neutral-500 hover:text-neutral-900"
          >
            Back
          </Link>
        )}
      </header>
      <Outlet />
    </Container>
  );
}
