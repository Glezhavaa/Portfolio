import * as styles from "./header.module.css";
import ROUTES from "../../config/Routes";
import { NavLink } from "react-router-dom";
import MobileNava from "../mobileNav/MobileNav";

function Header() {
  return (
    <header>
      <nav>
        <div className={styles.container}>
          <div className={styles.author}>
            <p>Giorgi Lezhava</p>
          </div>
          <div className={styles.navigation}>
            <ul className={styles.navLinks}>
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
            <div className={styles.burgerIcon}>
              <MobileNava />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
