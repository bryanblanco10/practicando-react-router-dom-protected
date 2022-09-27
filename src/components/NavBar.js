import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const activeLink = (isActive) => {
    return isActive ? "active" : "blue";
  };
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/landing"
            className={({ isActive }) => activeLink(isActive)}
          >
            Landing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => activeLink(isActive)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => activeLink(isActive)}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analytic"
            className={({ isActive }) => activeLink(isActive)}
          >
            Analytic
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin"
            className={({ isActive }) => activeLink(isActive)}
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
