import { useState } from "react";
import styles from "./nav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <NavLink onClick={() => setIsOpen(false)} to={"/"}>
          Logo
        </NavLink>
        <div className={styles.links}>
          <NavLink onClick={() => setIsOpen(false)} to={"/"}>
            Home
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} to={"/products"}>
            Produkter
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} to={"/about"}>
            Om
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} to={"/contact"}>
            Kontakt
          </NavLink>
          <div className={styles.burgerContainer} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoClose className={styles.burgerBtn} />
            ) : (
              <GiHamburgerMenu className={styles.burgerBtn} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
