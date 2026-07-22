import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, FileText, Calendar, PieChart } from 'lucide-react';
import styles from './Services.module.css';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 'business-consulting',
    title: 'ייעוץ וליווי עסקי',
    description: 'ניסיון של מעל 35 שנה בייעוץ כלכלי ופיתוח עסקי — אבחון, גיבוש הרעיון, בניית מודל עסקי וליווי פיננסי, ארגוני ותפעולי.',
    icon: <Briefcase size={40} />,
  },
  {
    id: 'business-plans',
    title: 'תוכניות עסקיות והפניה לבקשות להלוואות',
    description: 'כתיבת עשרות תוכניות עסקיות: אשראי ובנקים, מרכז השקעות ומפעל מאושר, הקצאת קרקע, המדען הראשי ותנופה.',
    icon: <FileText size={40} />,
  },
  {
    id: 'ms-project',
    title: 'בניית לוחות זמנים לפרויקטים',
    description: 'תכנון וניהול לוחות זמנים (לו"ז) לפרויקטים מובילים בבנייה ובתשתיות — התוכנית, המפה, הדרך והמצפן לסיום מוצלח.',
    icon: <Calendar size={40} />,
  },
  {
    id: 'budget-control',
    title: 'בקרת תקציב לפרויקטים',
    description: 'בניית תקציב מפורט, מעקב תכנון מול ביצוע, חיזוי תזרים מזומנים וזיהוי חריגות בזמן אמת לאורך כל הפרויקט.',
    icon: <PieChart size={40} />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <span className="kicker">מה אנחנו עושים</span>
          <h2 className={styles.sectionTitle}>שירותי החברה</h2>
          <p className={styles.sectionIntro}>
            פתרונות מקיפים החל משלב האבחון המוקדם, דרך אפיון תהליכים ותכנון מפורט,
            ועד ליישום והטמעה — המשלבים חשיבה עסקית וטכנולוגית.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <Link to={`/service/${service.id}`} key={service.id} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <span className={styles.learnMore}>למידע נוסף ←</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
