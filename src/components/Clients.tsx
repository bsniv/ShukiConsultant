import React from 'react';
import styles from './Clients.module.css';

const publicSector = [
  'משרד התיירות', 'משרד הכלכלה (תמ"ת)', 'עיריית אשדוד', 'קריית מלאכי', 'מועצה אזורית יואב', 'מועצה מקומית עומר'
];

const privateSector = [
  'Risco', 'קבוצת הארגז', 'Computest', 'Lima', 'Agrigo', 'Digitalist', 'אנוש', 'ציפי דבש', 'גלנור', 'עטרה דיזיין'
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className={styles.clients}>
      <div className="container">
        <h2 className={styles.title}>לקוחותינו</h2>
        
        <div className={styles.category}>
          <h3 className={styles.subtitle}>המגזר הציבורי</h3>
          <div className={styles.logoGrid}>
            {publicSector.map((client, index) => (
              <div key={index} className={styles.clientItem}>
                {client}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.category}>
          <h3 className={styles.subtitle}>המגזר הפרטי</h3>
          <div className={styles.logoGrid}>
            {privateSector.map((client, index) => (
              <div key={index} className={styles.clientItem}>
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
