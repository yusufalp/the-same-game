import { Link, Outlet } from "react-router-dom";

import { ROUTES } from "../constants/routes";
import PageContainer from "../components/PageContainer";

export default function StartLayout() {
  return (
    <PageContainer>
      <header className="flex items-baseline justify-between">
        <Link to={ROUTES.start} className="font-semibold">
          The Same Game
        </Link>
      </header>
      <Outlet />
    </PageContainer>
  );
}
