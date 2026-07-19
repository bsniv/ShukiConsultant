import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import styles from './Footer.module.css';
import logo from '../assets/ShukiConsultantLogo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <div className={styles.brandTop}>
            <img src={logo} alt="" className={styles.logo} width={48} height={48} />
            <h2>שוקי יועצים בע"מ</h2>
          </div>
          <p>מענה מערכתי המשלב חשיבה עסקית וטכנולוגית — לתוצאות בעלות ערך משמעותי לעסקים, חברות וארגונים.</p>
        </div>

        <div className={styles.links}>
          <h3>ניווט מהיר</h3>
          <ul>
            <li><Link to="/">בית</Link></li>
            <li><Link to="/#services">שירותים</Link></li>
            <li><Link to="/#insights">מרכז ידע</Link></li>
            <li><Link to="/#about">אודות</Link></li>
            <li><Link to="/#clients">לקוחות</Link></li>
            <li><Link to="/accessibility" className={styles.accLink}>הצהרת נגישות</Link></li>
          </ul>
        </div>

        <div className={styles.links}>
          <h3>צור קשר</h3>
          <ul>
            <li><a href="tel:08-8643633"><Phone size={16} /> 08-8643-633</a></li>
            <li><a href="mailto:shuki@shuki-consultant.com"><Mail size={16} /> shuki@shuki-consultant.com</a></li>
            <li className={styles.address}><MapPin size={16} /> אלברט קמי 7, אשדוד</li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className="container">
          <p>© {currentYear} שוקי יועצים בע"מ. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
