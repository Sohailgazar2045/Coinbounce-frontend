import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { signout } from "../../api/internal";
import { useDispatch } from "react-redux";
import { resetUser } from "../../store/userSlice";

function Navbar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.auth);
  const handleSignout = async () => {
    await signout();
    dispatch(resetUser());
  };
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/" className={`${styles.logo} ${styles.inActiveStyle}`}>
          Coin Bounce
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Home
        </NavLink>
        <NavLink
          to="crypto"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Crypto Currancy
        </NavLink>
        <NavLink
          to="blogs"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="submit"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Submit a blog
        </NavLink>
        {isAuthenticated ? (
          <div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.activeStyle : styles.inActiveStyle
              }
            >
              <button className={styles.signOutButton} onClick={handleSignout}>
                Sign Out
              </button>
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink
              to="log-in"
              className={({ isActive }) =>
                isActive ? styles.activeStyle : styles.inActiveStyle
              }
            >
              <button className={styles.logInButton}>Log In</button>
            </NavLink>
            <NavLink
              to="sign-up"
              className={({ isActive }) =>
                isActive ? styles.activeStyle : styles.inActiveStyle
              }
            >
              <button className={styles.signUpButton}>Sign Up</button>
            </NavLink>
          </div>
        )}
      </nav>
      <div className={styles.separator}></div>
    </>
  );
}

export default Navbar;
