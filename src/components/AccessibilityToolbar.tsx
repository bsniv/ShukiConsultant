import React, { useState, useEffect } from 'react';
import { Accessibility, X, Sun, Contrast, Type } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './AccessibilityToolbar.module.css';

const AccessibilityToolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    if (contrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [contrast]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  return (
    <div className={styles.wrapper}>
      <button 
        className={styles.toggleBtn} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="תפריט נגישות"
        aria-expanded={isOpen}
      >
        <Accessibility size={24} />
      </button>

      {isOpen && (
        <div className={styles.menu} role="dialog" aria-modal="true">
          <div className={styles.header}>
            <h3>נגישות</h3>
            <button onClick={() => setIsOpen(false)} aria-label="סגור תפריט"><X size={20} /></button>
          </div>
          <div className={styles.options}>
            <button onClick={() => setContrast(!contrast)}>
              <Contrast size={20} aria-hidden="true" />
              {contrast ? 'ביטול ניגודיות' : 'ניגודיות גבוהה'}
            </button>
            <button onClick={() => setFontSize(fontSize + 10)}>
              <Type size={20} aria-hidden="true" />
              הגדלת טקסט
            </button>
            <button onClick={() => setFontSize(100)}>
              <Sun size={20} aria-hidden="true" />
              איפוס תצוגה
            </button>
          </div>
          <div className={styles.footer}>
            <Link to="/accessibility" onClick={() => setIsOpen(false)}>הצהרת נגישות</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityToolbar;
