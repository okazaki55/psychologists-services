import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoSpan}>Psychologists</span>.services
        </Link>
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/psychologists"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
          }
        >
          Psychologists
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
          }
        >
          Favorites
        </NavLink>
      </nav>

      <div className={styles.authButtons}>
        <button className={styles.loginBtn}>Log In</button>
        <button className={styles.regBtn}>Registration</button>
      </div>
    </header>
  );
};

export default Header;
