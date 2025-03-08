import React from "react";
import styles from "./HomeHeader.module.css";
import { CgMenuRight } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const HomeHeader = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <img
            src="/images/white-logo.svg"
            alt="DJI Logo"
            className={styles.logo}
          />
          <ul className={styles.navLinks}>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="explore">Explore</a>
            </li>
            <li>
              <a href="/suport">Support</a>
            </li>
          </ul>
          <CgMenuRight className={styles.menu} />
          <div className={styles.icons}>
            <Link to="/login" className={styles.icon}>
              <FaUserCircle />
            </Link>
            <Link to="/cart" className={styles.icon}>
              <FaShoppingCart />
            </Link>
          </div>
        </nav>
        <div className={styles.hero}>
          <h1 className={styles.title}>DJI AIR 3</h1>
          <img
            src="/images/dji-air-3s.png"
            alt="DJI Air 3"
            className={styles.drone}
          />
          <h2 className={styles.subtitle}>DOUBLE UP</h2>
          <button className={styles.buyButton}>Buy Now</button>
        </div>
      </header>
    </div>
  );
};

export default HomeHeader;
