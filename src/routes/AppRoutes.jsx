import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
// import AuthLayout from "../components/Layouts/AuthLayout";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
import GameLayout from "../components/Layouts/GameLayout";
import HostGame from "../features/game/HostGame";
import JoinGame from "../features/game/JoinGame";
import CurrentGame from "../features/game/CurrentGame";
import NotFoundPage from "../pages/NotFoundPage";
// import GameHostRules from "../pages/GameHostRules";
// import GameJoinRules from "../pages/GameJoinRules";
import StartLayout from "../components/Layouts/StartLayout";
import ChooseMode from "../features/game/ChooseMode";

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
          <Route index element={<ChooseMode />} />
          <Route path="new" element={<HostGame />} />
          <Route path="join" element={<JoinGame />} />
        </Route>
        <Route path=":gameCode" element={<GameLayout />}>
          <Route index element={<CurrentGame />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
