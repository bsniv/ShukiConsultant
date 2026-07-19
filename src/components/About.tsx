import React from 'react';
import { GraduationCap, BadgeCheck, Building2 } from 'lucide-react';
import styles from './About.module.css';

const credentials = [
  {
    icon: <GraduationCap size={22} />,
    text: 'תואר ראשון (B.Sc) בהנדסת תעשייה וניהול ותואר שני (MBA) מאוניברסיטת בן גוריון',
  },
  {
    icon: <BadgeCheck size={22} />,
    text: 'יועץ מורשה של משרד הכלכלה (הסוכנות לעסקים קטנים ובינוניים), משרד הקליטה, ההסתדרות הציונית והסוכנות היהודית',
  },
  {
    icon: <Building2 size={22} />,
    text: '14 שנים מנכ"ל מט"י אשדוד ו-9 שנים מנכ"ל היחידה לפיתוח כלכלי ומט"י קריית מלאכי, קריית גת והמועצות האזוריות',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.image}>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
            alt="ייעוץ וליווי עסקי"
            loading="lazy"
          />
          <div className={styles.badge}>
            <strong>שוקי בן שבת</strong>
            <span>מייסד ומנכ"ל</span>
          </div>
        </div>
        <div className={styles.content}>
          <span className="kicker">אודותינו</span>
          <h2 className={styles.title}>מעל 40 שנות ניסיון בצד שלך</h2>
          <p className={styles.description}>
            <strong>שוקי יועצים בע"מ</strong> היא חברת ייעוץ המעניקה מענה מערכתי, המשלב חשיבה
            עסקית וטכנולוגית לשם קבלת תוצאות בעלות ערך משמעותי לעסקים, חברות וארגונים.
          </p>
          <p className={styles.description}>
            החברה מובלת על ידי <strong>שוקי בן שבת</strong>, בעל ניסיון של מעל 40 שנה בניהול
            וייעוץ במגוון רחב של תחומים בענפי התעשייה, המסחר, השירותים והתיירות — ומי שסייע
            בהקמתם של למעלה מ-4,000 עסקים חדשים.
          </p>
          <ul className={styles.credentials}>
            {credentials.map((c, i) => (
              <li key={i}>
                <span className={styles.credIcon}>{c.icon}</span>
                <span>{c.text}</span>
              </li>
            ))}
          </ul>
          <ul className={styles.stats}>
            <li>
              <strong>40+</strong>
              <span>שנות ניסיון</span>
            </li>
            <li>
              <strong>4,000+</strong>
              <span>עסקים שהוקמו</span>
            </li>
            <li>
              <strong>מורשה</strong>
              <span>משרדי הממשלה</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
