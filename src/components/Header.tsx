import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <h1>שוקי יועצים בע"מ</h1>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#home">בית</a></li>
            <li><a href="#services">שירותים</a></li>
            <li><a href="#about">אודות</a></li>
            <li><a href="#clients">לקוחות</a></li>
            <li><a href="#contact">צור קשר</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
