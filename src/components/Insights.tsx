import React from 'react';
import { ShieldCheck, LifeBuoy, BarChart3, Scale } from 'lucide-react';
import styles from './Insights.module.css';

const insights = [
  {
    title: 'הערכת סיכונים',
    description: 'זיהוי, הערכה ומזעור סיכונים עסקיים ופרויקטליים — להגנה על השקעות ולשיפור תהליכי קבלת החלטות.',
    icon: <ShieldCheck size={32} />,
    tag: 'יציבות',
  },
  {
    title: 'תוכניות הבראה',
    description: 'אסטרטגיות לעסקים במשבר: טיפול בגורמים פנימיים וחיצוניים והחזרת העסק למסלול של צמיחה ורווחיות.',
    icon: <LifeBuoy size={32} />,
    tag: 'צמיחה',
  },
  {
    title: 'ניהול תזרים מזומנים',
    description: 'תכנון פיננסי, תקצוב ומרכזי רווח — כלים חיוניים לשמירה על נזילות ולעמידה בהתחייבויות העסק.',
    icon: <BarChart3 size={32} />,
    tag: 'פיננסים',
  },
  {
    title: 'הערכת שווי וחוות דעת',
    description: 'הערכת שווי חברה וחוות דעת כלכליות לבתי משפט ולחברות — ניתוח מקצועי, אובייקטיבי ומבוסס נתונים.',
    icon: <Scale size={32} />,
    tag: 'מומחיות',
  },
];

const Insights: React.FC = () => {
  return (
    <section id="insights" className={styles.insights}>
      <div className="container">
        <div className={styles.header}>
          <span className="kicker">מרכז ידע</span>
          <h2 className={styles.title}>תחומי מומחיות ותובנות</h2>
          <p className={styles.subtitle}>המומחיות שלנו היא היתרון שלך. ריכזנו עבורך את התחומים בהם אנו מלווים עסקים לאורך השנים.</p>
        </div>
        <div className={styles.grid}>
          {insights.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.tag}>{item.tag}</span>
                <div className={styles.iconWrapper} aria-hidden="true">{item.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
