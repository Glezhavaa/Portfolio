import React, { useState } from "react";
import MobileNavList from "../mobileNavList/MobileNavList";
import * as styles from "./MobileNav.module.css";

function MobileNav() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const handleToggle = () => {
    setNavIsOpen((navIsOpen) => !navIsOpen);
  };
  return (
    <>
      <MobileNavList visible={navIsOpen} />
      <button className={styles.navIcon} onClick={handleToggle}>
        {navIsOpen ? (
          <ion-icon name="close"></ion-icon>
        ) : (
          <ion-icon name="menu-sharp"></ion-icon>
        )}
      </button>
    </>
  );
}

export default MobileNav;
