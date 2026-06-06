import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <h2>שוקי יועצים בע"מ</h2>
          <p>מובילים את העסק שלך לעצמאות כלכלית</p>
        </div>
        <div className={styles.links}>
          <h3>ניווט מהיר</h3>
          <ul>
            <li><a href="#home">בית</a></li>
            <li><a href="#services">שירותים</a></li>
            <li><a href="#about">אודות</a></li>
            <li><a href="#clients">לקוחות</a></li>
            <li><a href="#contact">צור קשר</a></li>
          </ul>
        </div>
        <div className={styles.copyright}>
          <p>© {currentYear} שוקי יועצים בע"מ. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
