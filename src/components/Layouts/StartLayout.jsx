import { Link, Outlet } from "react-router-dom";
import { ROUTES } from "../../constants/ROUTES";
import Container from "../Container";

export default function StartLayout() {
  return (
    <Container>
      <header className="flex items-baseline justify-between">
        <Link to={ROUTES.start} className="font-semibold">
          The Same Game
        </Link>
      </header>
      <Outlet />
    </Container>
  );
}
