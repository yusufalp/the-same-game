import { Link, Outlet } from "react-router-dom";

import PageContainer from "../components/PageContainer";
import { ROUTES } from "../constants/routes";

export default function StartLayout() {
  return (
    <PageContainer>
      <header>
        <Link to={ROUTES.start}>The Same Game</Link>
      </header>
      <Outlet />
    </PageContainer>
  );
}
