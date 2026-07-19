import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/ShukiConsultantLogo.png';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link to="/" className={styles.logo} aria-label="שוקי יועצים - דף הבית">
          <img src={logo} alt="" className={styles.logoMark} width={44} height={44} />
          <span className={styles.logoText}>
            שוקי יועצים <span className={styles.logoLtd}>בע"מ</span>
          </span>
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/">בית</Link></li>
            <li><Link to="/#services">שירותים</Link></li>
            <li><Link to="/#insights">מרכז ידע</Link></li>
            <li><Link to="/#about">אודות</Link></li>
            <li><Link to="/#clients">לקוחות</Link></li>
            <li><Link to="/#contact" className={styles.contactCta}>צור קשר</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
