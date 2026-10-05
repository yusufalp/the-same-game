import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import NotFoundPage from "../pages/NotFoundPage";
import AuthLayout from "../components/Layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CurrentGame from "../features/game/CurrentGame";
import GameLayout from "../components/Layouts/GameLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="games" element={<GameLayout />}>
        <Route path=":gameId" element={<CurrentGame />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
