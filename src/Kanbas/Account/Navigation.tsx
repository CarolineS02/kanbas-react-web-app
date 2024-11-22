import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <NavLink to={`/Kanbas/Account/${link}`} id={`wd-${link}-link`}
          className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : 'bg-white text-danger'}`}>
          <span>{link}</span>
        </NavLink>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link to={`/Kanbas/Account/Users`} className={`list-group-item border border-0 ${active("Users")}`}> Users </Link>)}
    </div>
  );
}
