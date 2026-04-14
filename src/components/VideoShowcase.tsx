'use client';
import styles from './VideoShowcase.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function VideoShowcase() {
  const { t } = useLanguage();

  return (
    <section id="demo" className={styles.videoSection}>
      <div className={`container ${styles.videoContainer}`}>
        <div className={styles.header}>
          <h2 className={`${styles.sectionTitle} animate-fade-in delay-100`}>
            {t.videoShowcase.title}
          </h2>
          <p className={`${styles.sectionText} animate-fade-in delay-200`}>
             {t.videoShowcase.subtitle}
          </p>
        </div>
        
        <div className={`${styles.videoPlaceholder} glass-panel animate-fade-in delay-300`}>
           <div className={styles.placeholderContent}>
              <span className={styles.playIcon}>▶</span>
              <p className={styles.placeholderText}>{t.videoShowcase.placeholder}</p>
           </div>
        </div>
      </div>
    </section>
  );
}
