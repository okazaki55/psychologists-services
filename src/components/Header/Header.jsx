import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal.jsx";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <>
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
              isActive
                ? `${styles.navLink} ${styles.activeLink}`
                : styles.navLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/psychologists"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeLink}`
                : styles.navLink
            }
          >
            Psychologists
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeLink}`
                : styles.navLink
            }
          >
            Favorites
          </NavLink>
        </nav>

        <div className={styles.authButtons}>
          <button
            className={styles.loginBtn}
            onClick={() => setIsLoginOpen(true)}
          >
            Log In
          </button>
          <button
            className={styles.regBtn}
            onClick={() => setIsRegisterOpen(true)}
          >
            Registration
          </button>
        </div>
      </header>

      {/* Giriş Modalı */}
      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <h2>Log In</h2>
        <p>Giriş formu buraya gelecek...</p>
      </Modal>

      {/* Kayıt Modalı */}
      <Modal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)}>
        <h2>Registration</h2>
        <p>Kayıt formu buraya gelecek...</p>
      </Modal>
    </>
  );
};

export default Header;
