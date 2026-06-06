import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>ההצלחה שלך היא העסק שלנו</h1>
          <p className={styles.subtitle}>מובילים את העסק שלך לעצמאות כלכלית</p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.ctaButton}>ייעוץ ראשוני חינם</a>
            <a href="#services" className={styles.secondaryButton}>למידה נוספת</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
