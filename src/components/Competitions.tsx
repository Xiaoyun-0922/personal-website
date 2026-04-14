'use client';
import styles from './Competitions.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Competitions() {
  const { t } = useLanguage();
  const competitions = t.competitions.items;

  return (
    <section id="competitions" className={styles.compSection}>
      <div className={`container ${styles.compContainer}`}>
        <div className={styles.header}>
          <h2 className={`${styles.sectionTitle} animate-fade-in delay-100`}>{t.competitions.title}</h2>
          <p className={`${styles.sectionText} animate-fade-in delay-200`}>
            {t.competitions.subtitle}
          </p>
        </div>
        
        <div className={styles.grid}>
          {competitions.map((comp, idx) => (
            <div key={idx} className={`${styles.card} glass-panel animate-fade-in delay-${(idx + 3) * 100}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.compTitle}>{comp.title}</h3>
                
                <a href={comp.url} target="_blank" rel="noopener noreferrer" className={styles.awardBadgeBtn}>
                  {idx === 0 ? t.competitions.linkTextAsc : t.competitions.linkTextIgem} - {comp.award}
                </a>

              </div>
              <div className={styles.year}>{comp.year}</div>
              <p className={styles.compDesc}>{comp.description}</p>
              
              <div className={styles.skills}>
                {comp.skills.map((skill, sIdx) => (
                   <span key={sIdx} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
