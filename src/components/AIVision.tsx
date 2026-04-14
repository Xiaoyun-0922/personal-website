'use client';
import styles from './AIVision.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function AIVision() {
  const { t } = useLanguage();

  return (
    <section id="vision" className={styles.visionSection}>
      <div className={`container ${styles.visionContainer}`}>
        <div className={styles.visionContent}>
          <div className={`${styles.iconWrapper} animate-fade-in delay-100`}>
            ✨
          </div>
          <h2 className={`${styles.title} animate-fade-in delay-200`}>
            {t.vision.title}<span className={styles.highlight}>{t.vision.highlight}</span>{t.vision.titleEnd}
          </h2>
          
          <div className={styles.textStack}>
            <p className={`${styles.textBlock} animate-fade-in delay-300`}>
              {t.vision.p1}
            </p>
            <p className={`${styles.textBlock} animate-fade-in delay-400`}>
              {t.vision.p2}
            </p>
            <p className={`${styles.textBlock} animate-fade-in delay-500`}>
              {t.vision.p3}
            </p>
          </div>
          
          <div className={`${styles.quoteCard} glass-panel animate-fade-in delay-600`}>
            {t.vision.quote}
          </div>
        </div>
      </div>
    </section>
  );
}
