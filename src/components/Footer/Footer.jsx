import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.separator}></div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col}>
              <h5>About</h5>
              <p>
                Welcome to our website, where we explore the fascinating world
                of cryptocurrency and provide insightful blogs.
              </p>
            </div>
            <div className={styles.col}>
              <h5>Contact</h5>
              <p>
                <a href="/">123 Main Street</a>
                <br />
                <a href="/">123-456-7890</a>
                <br />
                <a href="/">info@example.com</a>
              </p>
            </div>
            <div className={styles.col}>
              <h5>Social Media</h5>
              <ul className={styles["social-media-list"]}>
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <p className={styles.copyRight}>
                &copy; {new Date().getFullYear()} CoinBounce
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
