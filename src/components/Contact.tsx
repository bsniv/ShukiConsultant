import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className={styles.title}>צור קשר</h2>
        <div className={styles.contactGrid}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>פרטי התקשרות</h3>
            <div className={styles.infoItem}>
              <Phone className={styles.icon} />
              <div>
                <strong>טלפון</strong>
                <p>08-8643-633</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <Mail className={styles.icon} />
              <div>
                <strong>אימייל</strong>
                <p>shuki@shuki-consultant.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <MapPin className={styles.icon} />
              <div>
                <strong>כתובת</strong>
                <p>ישראל (ניתן לתאם פגישות בבית העסק)</p>
              </div>
            </div>
          </div>
          
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">שם מלא</label>
              <input type="text" id="name" name="name" required placeholder="הכנס את שמך" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">דואר אלקטרוני</label>
              <input type="email" id="email" name="email" required placeholder="example@mail.com" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">הודעה</label>
              <textarea id="message" name="message" rows={5} required placeholder="איך נוכל לעזור לך?"></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>שלח הודעה</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
