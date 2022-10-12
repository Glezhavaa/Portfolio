import * as styles from "./header.module.css";
import ROUTES from "../../config/Routes";
import { NavLink } from "react-router-dom";

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
          </div>
          <div className={styles.burgerIcon}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
