import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import logo from '../assets/ShukiConsultantLogo.png';

const stats = [
  { value: '40+', label: 'שנות ניסיון' },
  { value: '4,000+', label: 'עסקים שהוקמו' },
  { value: '35+', label: 'שנות ניהול לו"ז לפרויקטים' },
];

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <span className={`kicker ${styles.kicker}`}>ייעוץ · אסטרטגיה · פיתוח עסקי</span>
          <h1 className={styles.title}>
            ההצלחה שלך <br />היא <span className={styles.accent}>העסק שלנו</span>
          </h1>
          <p className={styles.subtitle}>
            חברת ייעוץ המעניקה מענה מערכתי, המשלב חשיבה עסקית וטכנולוגית — לשם קבלת
            תוצאות בעלות ערך משמעותי לעסקים, חברות וארגונים.
          </p>
          <div className={styles.actions}>
            <Link to="/#contact" className={styles.ctaButton}>לתיאום ייעוץ ראשוני</Link>
            <Link to="/#services" className={styles.secondaryButton}>לשירותים שלנו</Link>
          </div>
          <ul className={styles.stats}>
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.logoCard}>
            <img src={logo} alt="" className={styles.logoImg} />
          </div>
          <div className={`${styles.floatCard} ${styles.floatOne}`}>
            <span className={styles.dot} />
            ניהול לוחות זמנים ובקרת תקציבית
          </div>
          <div className={`${styles.floatCard} ${styles.floatTwo}`}>
            <span className={styles.dot} />
            תוכניות עסקיות והפניה לבקשות להלוואות
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
