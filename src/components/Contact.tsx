import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.header}>
          <span className="kicker">צור אתנו קשר</span>
          <h2 className={styles.title}>נשמח ללוות גם את העסק שלך</h2>
          <p className={styles.subtitle}>השאירו פרטים או התקשרו — ונקבע פגישת ייעוץ ראשונית להכיר את הצרכים שלכם.</p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.info}>
            <a href="tel:08-8643633" className={styles.infoItem}>
              <span className={styles.iconWrap}><Phone className={styles.icon} /></span>
              <div>
                <strong>טלפון</strong>
                <p>08-8643-633</p>
              </div>
            </a>
            <a href="mailto:shuki@shuki-consultant.com" className={styles.infoItem}>
              <span className={styles.iconWrap}><Mail className={styles.icon} /></span>
              <div>
                <strong>אימייל</strong>
                <p>shuki@shuki-consultant.com</p>
              </div>
            </a>
            <div className={styles.infoItem}>
              <span className={styles.iconWrap}><MapPin className={styles.icon} /></span>
              <div>
                <strong>כתובת</strong>
                <p>אלברט קמי 7, אשדוד, ישראל</p>
              </div>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              title="מיקום המשרד על מפת Google"
              src="https://maps.google.com/maps?q=%D7%90%D7%9C%D7%91%D7%A8%D7%98%20%D7%A7%D7%9E%D7%99%207%2C%20%D7%90%D7%A9%D7%93%D7%95%D7%93%2C%20%D7%99%D7%A9%D7%A8%D7%90%D7%9C&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
