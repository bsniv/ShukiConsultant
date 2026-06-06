import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.image}>
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="שוקי יועצים" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>אודות שוקי יועצים</h2>
          <p className={styles.description}>
            שוקי יועצים בע"מ היא חברת ייעוץ מובילה המתמחה בליווי עסקי ופיננסי ליזמים ובעלי עסקים. 
            אנו מאמינים שכל עסק, קטן כגדול, זכאי לליווי מקצועי שיוביל אותו לעצמאות כלכלית ולצמיחה מתמדת.
          </p>
          <p className={styles.description}>
            עם ניסיון רב שנים בעבודה מול המגזר הציבורי והפרטי, אנו מביאים איתנו ארגז כלים רחב הכולל בניית תוכניות עסקיות, 
            גיוס אשראי, ניהול פרויקטים ובקרת תקציב. הגישה שלנו מבוססת על שותפות אמיתית והבנה עמוקה של צרכי הלקוח.
          </p>
          <ul className={styles.stats}>
            <li>
              <strong>15+</strong>
              <span>שנות ניסיון</span>
            </li>
            <li>
              <strong>500+</strong>
              <span>לקוחות מרוצים</span>
            </li>
            <li>
              <strong>100%</strong>
              <span>מחויבות להצלחה</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
