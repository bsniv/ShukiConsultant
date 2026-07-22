import React from 'react';
import styles from './Clients.module.css';

// Bundle every customer logo. Vite resolves the (Hebrew) filenames to hashed URLs.
const logoModules = import.meta.glob('../assets/logos/*.{jpg,jpeg,png,gif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

// Map file stem -> resolved URL
const byStem: Record<string, string> = {};
for (const [path, src] of Object.entries(logoModules)) {
  const stem = path.split('/').pop()!.replace(/\.[^.]+$/, '');
  byStem[stem] = src;
}

// Nicer Hebrew display names for accessibility / hover captions.
const names: Record<string, string> = {
  agrigo: 'אגריגו',
  apa: 'אפא חשמלאים',
  arta: 'אתראן',
  'ashdodo muni': 'עיריית אשדוד',
  baladi: 'בלאדי',
  'elitar system': 'אליטר סיסטם',
  haargaz: 'הארגז',
  'hahari cake': 'ההרי קייק',
  'keryat malache': 'עיריית קריית מלאכי',
  ledico: 'לדיקו',
  'mafe france': 'מאפה פראנס',
  'megvan 2002': 'מגוון 2002',
  neto: 'נטו',
  'new logo1 galnor': 'גלנור',
  omer: 'עומר הנדסה',
  rahat: 'עיריית רהט',
  ramet: 'רמט',
  risco: 'Risco',
  seari: 'סרי מתכת',
  shahaf: 'צבי — תשלובת תעשיות דפוס',
  walter: 'וולט שינקמן',
  yoaav: 'מועצה אזורית יואב',
  'zehava kohen': 'זהבה כהן רישוי גנים',
  'אל מור': 'אל מור',
  'אלישר הנדסה אזרחית': 'אלישר הנדסה אזרחית',
  גלים: 'גלים',
  'גן רוחלה': 'גן רוחלה',
  'דוד זכריה ובניו': 'דוד זכריה ובניו',
  'די גי טל אס טי': 'דיגיטל אס.טי',
  'ח.מ.ל תשתיות ופרויקטים': 'ח.מ.ל תשתיות ופרויקטים',
  'טר ארמה בעמ': 'טר ארמה',
  'י א עבודות חשמל': 'י.א עבודות חשמל',
  'י מ כרסום': 'י.מ כרסום',
  'י.ד. עשוש': 'י.ד. עשוש',
  'לוגו עוז הדרום': 'עוז הדרום',
  'מימלן פרספורט': 'מימלן פרספורט',
  'מתב ריילס': 'מתב ריילס',
  'ע.ל.גיבור': 'ע.ל. גיבור',
  'עמותת אנוש': 'עמותת אנוש',
  'ציפי דבש': 'ציפי דבש',
  'קידוחי סי אפ איי': 'קידוחי CPI',
  'רשת גני מנדי': 'רשת גני מנדי',
  'שיש דנור': 'שיש דנור',
};

// Industry groupings, based on the representative client list.
const categories: { label: string; stems: string[] }[] = [
  {
    label: 'היי-טק וסטארט-אפ',
    stems: ['risco', 'די גי טל אס טי', 'elitar system'],
  },
  {
    label: 'מזון והסעדה',
    stems: ['baladi', 'neto', 'hahari cake', 'mafe france'],
  },
  {
    label: 'בנייה, תשתיות והנדסה',
    stems: [
      'omer',
      'ramet',
      'new logo1 galnor',
      'walter',
      'אלישר הנדסה אזרחית',
      'ח.מ.ל תשתיות ופרויקטים',
      'מתב ריילס',
      'קידוחי סי אפ איי',
      'שיש דנור',
      'אל מור',
      'דוד זכריה ובניו',
      'טר ארמה בעמ',
      'י.ד. עשוש',
      'לוגו עוז הדרום',
      'ע.ל.גיבור',
      'arta',
    ],
  },
  {
    label: 'מתכות, אלומיניום וחשמל',
    stems: ['haargaz', 'seari', 'apa', 'ledico', 'י א עבודות חשמל', 'י מ כרסום'],
  },
  {
    label: 'דפוס ונייר',
    stems: ['megvan 2002', 'מימלן פרספורט', 'shahaf'],
  },
  {
    label: 'חקלאות',
    stems: ['agrigo'],
  },
  {
    label: 'מוניציפאלי וציבורי',
    stems: ['ashdodo muni', 'keryat malache', 'rahat', 'yoaav'],
  },
  {
    label: 'שירותים, חינוך וקהילה',
    stems: ['zehava kohen', 'גן רוחלה', 'רשת גני מנדי', 'עמותת אנוש', 'ציפי דבש', 'גלים'],
  },
  {
    // Safety net: any logo not explicitly placed above lands here.
    label: 'לקוחות נוספים',
    stems: [],
  },
];

// Safety net: any logo not explicitly placed falls into "לקוחות נוספים".
const placed = new Set(categories.flatMap((c) => c.stems));
const leftovers = Object.keys(byStem).filter((s) => !placed.has(s));
if (leftovers.length) {
  const other = categories.find((c) => c.label === 'לקוחות נוספים')!;
  other.stems.push(...leftovers);
}

const LogoTile: React.FC<{ stem: string }> = ({ stem }) => {
  const src = byStem[stem];
  if (!src) return null;
  const name = names[stem] ?? stem;
  return (
    <div className={styles.logoItem} title={name}>
      <img src={src} alt={name} loading="lazy" />
    </div>
  );
};

const Clients: React.FC = () => {
  return (
    <section id="clients" className={styles.clients}>
      <div className="container">
        <div className={styles.header}>
          <span className="kicker">הלקוחות שלנו</span>
          <h2 className={styles.title}>מאות עסקים, חברות וארגונים בחרו בנו</h2>
          <p className={styles.subtitle}>
            מהיי-טק והתעשייה ועד למגזר הציבורי, החקלאות והשירותים — רשימה מייצגת של לקוחות
            שליווינו לאורך השנים, מחולקת לפי תחומי פעילות.
          </p>
        </div>

        <div className={styles.categories}>
          {categories
            .filter((cat) => cat.stems.some((s) => byStem[s]))
            .map((cat) => (
              <div key={cat.label} className={styles.category}>
                <h3 className={styles.categoryLabel}>{cat.label}</h3>
                <div className={styles.logoGrid}>
                  {cat.stems.map((stem) => (
                    <LogoTile key={stem} stem={stem} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
