import { Link, Outlet } from "react-router-dom";

import PageContainer from "../components/PageContainer";
import { ROUTES } from "../constants/routes";

export default function StartLayout() {
  return (
    <PageContainer>
      <h1 className="h1">
        <Link to={ROUTES.start}>The Same Game</Link>
      </h1>
      <Outlet />
    </PageContainer>
  );
}
