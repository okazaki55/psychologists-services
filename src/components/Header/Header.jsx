import LoginForm from "../LoginForm/LoginForm.jsx";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal.jsx";
import RegisterForm from "../RegisterForm/RegisterForm.jsx";
import { useAuth } from "../../context/AuthContext.jsx";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const { currentUser, logout } = useAuth();

  const changeTheme = (themeName) => {
    document.documentElement.setAttribute("data-theme", themeName);
    localStorage.setItem("app-theme", themeName);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") || "blue";
    if (savedTheme !== "blue") {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      console.log("Çıkış yapıldı.");
    } catch (error) {
      console.error("Çıkış hatası", error);
    }
  };

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
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/psychologists"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Psychologists
          </NavLink>

          {currentUser && (
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Favorites
            </NavLink>
          )}
        </nav>

        {currentUser ? (
          <div className={styles.userInfo}>
            <span className={styles.userName}>
              {currentUser.displayName || currentUser.email}
            </span>
            <button className={styles.logoutBtn} onClick={handleLogout}>
              Log Out
            </button>
          </div>
        ) : (
          <div className={styles.authButtons}>
            <div className={styles.themeSwitcher}>
              <button
                onClick={() => changeTheme("blue")}
                className={`${styles.themeBtn} ${styles.blueBtn}`}
                title="Blue Theme"
              ></button>
              <button
                onClick={() => changeTheme("green")}
                className={`${styles.themeBtn} ${styles.greenBtn}`}
                title="Green Theme"
              ></button>
              <button
                onClick={() => changeTheme("orange")}
                className={`${styles.themeBtn} ${styles.orangeBtn}`}
                title="Orange Theme"
              ></button>
            </div>
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
        )}
      </header>

      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <h2>Log In</h2>
        <p style={{ color: "#8a8a89", marginTop: "14px" }}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>

        <LoginForm onClose={() => setIsLoginOpen(false)} />
      </Modal>

      <Modal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)}>
        <h2>Registration</h2>
        <p style={{ color: "#8a8a89", marginTop: "14px" }}>
          Thank you for your interest in our platform! In order to register,
          please fill in the fields below.
        </p>

        <RegisterForm onClose={() => setIsRegisterOpen(false)} />
      </Modal>
    </>
  );
};

export default Header;
