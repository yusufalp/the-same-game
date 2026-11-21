import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import GameLayout from "../layouts/GameLayout";
import HostGame from "../features/start/HostGame";
import CurrentGame from "../features/game/CurrentGame";
import NotFoundPage from "../pages/NotFoundPage";
import StartLayout from "../layouts/StartLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      {/* <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route> */}

      <Route path="games">
        <Route element={<StartLayout />}>
          <Route index element={<HostGame />} />
          {/* <Route index element={<ChooseMode />} />
          <Route path="new" element={<HostGame />} />
          <Route path="join" element={<JoinGame />} /> */}
        </Route>
        <Route path=":gameCode" element={<GameLayout />}>
          <Route index element={<CurrentGame />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
