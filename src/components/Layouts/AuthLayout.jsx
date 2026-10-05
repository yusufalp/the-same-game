import { Link, Outlet, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const location = useLocation();
  
  const linkTo = location.pathname.includes("register") ? "login" : "register";

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to={linkTo}>
        {linkTo.charAt(0).toUpperCase() + linkTo.slice(1)}
      </Link>
      <Outlet />
    </div>
  );
}
