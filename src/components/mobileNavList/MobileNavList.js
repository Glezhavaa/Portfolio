import * as styles from "./MobileNavList.module.css";
import ROUTES from "../../config/Routes";
import { NavLink } from "react-router-dom";

function MobileNavList({ visible }) {
  return (
    <nav
      className={styles.navList}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <ul>
        <li>
          <NavLink to={ROUTES.HOME}>Home</NavLink>
        </li>
        <li>
          <NavLink to={`/${ROUTES.ABOUT}`}>About</NavLink>
        </li>
        <li>
          <NavLink to={`/${ROUTES.PROJECTS}`}>Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNavList;
