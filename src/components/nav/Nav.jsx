import { useEffect, useState } from "react";
import styles from "./nav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <div
        className={styles.navInner}
        style={isMobile ? { width: "100%" } : { maxWidth: "1140px", padding: "0 1rem" }}
      >
        <NavLink
          style={{ paddingLeft: isMobile && "10px" }}
          onClick={() => setIsOpen(false)}
          to={"/"}
        >
          Home
        </NavLink>
        <div
          className={`${isMobile ? styles.linksMobile : styles.links}`}
          style={{ display: isMobile && !isOpen ? "none" : isOpen ? "grid" : !isMobile && "flex" }}
        >
          {isMobile && isOpen && (
            <NavLink onClick={() => setIsOpen(false)} to={"/"}>
              Home
            </NavLink>
          )}
          <NavLink onClick={() => setIsOpen(false)} to={"/products"}>
            Produkter
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} to={"/about"}>
            Om
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} to={"/contact"}>
            Kontakt
          </NavLink>
        </div>
        {isMobile && !isOpen ? (
          <GiHamburgerMenu className={styles.burgerBtn} onClick={() => setIsOpen(true)} />
        ) : (
          isOpen && <IoClose className={styles.burgerBtn} onClick={() => setIsOpen(false)} />
        )}
      </div>
    </nav>
  );
}

export default Nav;
