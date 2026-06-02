import { NavLink, useLocation } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import bioData from "../data/BioData";
function MainNavigation() {

  const location = useLocation();
  const isAboutPage = location.pathname === "/relate";

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li className={classes.list}>
            <NavLink
              to="/relate"
              className={({ isActive }) =>
                isActive ? classes.avtive : undefined
              }
            >
             درباره ی من
            </NavLink>
          </li>
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
            {isAboutPage ? <a>{bioData.name}</a> : <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.avtive : undefined
              }
            >
              My Biography
            </NavLink>} 
            
            
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
