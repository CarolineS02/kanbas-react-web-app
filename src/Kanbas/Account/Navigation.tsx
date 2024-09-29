import { Link, NavLink } from "react-router-dom";
export default function AccountNavigation() {
  return (
<div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
        <NavLink to="/Kanbas/Account/Signin" id="wd-sign-in-link"
          className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : 'bg-white text-danger'}`}>
          <span>Sign in</span>
        </NavLink>
        <NavLink to="/Kanbas/Account/Signup" id="wd-sign-up-link"
          className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : 'bg-white text-danger'}`}>
          <span>Sign up</span>
        </NavLink>
        <NavLink to="/Kanbas/Account/Profile" id="wd-profile-link"
          className={({ isActive }) => `list-group-item border border-0 ${isActive ? 'active' : 'bg-white text-danger'}`}>
          <span>Profile</span>
        </NavLink>
    </div>
  );
}
