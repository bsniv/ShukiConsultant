import React from 'react';
import { Briefcase, TrendingUp, Landmark, FileText, Calendar, PieChart } from 'lucide-react';
import styles from './Services.module.css';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'ייעוץ וליווי עסקי',
    description: 'ליווי אישי משלב הרעיון דרך ההקמה, ההתרחבות והתייצבות של עסקים קיימים.',
    icon: <Briefcase size={40} />,
  },
  {
    title: 'בדיקת כדאיות כלכלית',
    description: 'ניתוח מעמיק של המצב הפיננסי והפוטנציאל העסקי לפני קבלת החלטות הרות גורל.',
    icon: <TrendingUp size={40} />,
  },
  {
    title: 'הלוואות ומימון',
    description: 'סיוע בגיוס הלוואות מבנקים ומגופים אחרים, ובניית תוכניות מימון מתאימות.',
    icon: <Landmark size={40} />,
  },
  {
    title: 'תוכניות עסקיות',
    description: 'בניית תוכניות עסקיות מותאמות אישית לצרכי הלקוח ולתמיכה בצמיחה העסקית.',
    icon: <FileText size={40} />,
  },
  {
    title: 'ניהול לוחות זמנים (MS Project)',
    description: 'בניית תוכניות עבודה ו"מפות" להבטחת סיום מוצלח של פרויקטים בזמן.',
    icon: <Calendar size={40} />,
  },
  {
    title: 'בקרת תקציב וניהול סיכונים',
    description: 'זיהוי והערכת סיכונים לשיפור תהליכים ומזעור נזקים פוטנציאליים.',
    icon: <PieChart size={40} />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <h2 className={styles.sectionTitle}>השירותים שלנו</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
