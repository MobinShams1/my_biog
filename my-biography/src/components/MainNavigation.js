import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li className={classes.list}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.avtive : undefined
              }
            >
              صفحه اصلی
            </NavLink>
          </li>
          <li className={classes.list}>
            <NavLink
              to="/relate"
              className={({ isActive }) =>
                isActive ? classes.avtive : undefined
              }
            >
              ارتباط با ما
            </NavLink>
          </li>
          <li className={classes.list}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.avtive : undefined
              }
            >
              My Biography
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
