'use client';
import styles from './Publications.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Publications() {
  const { t } = useLanguage();
  const pubs = t.publications.items;

  return (
    <section id="publications" className={styles.pubSection}>
      <div className={`container ${styles.pubContainer}`}>
        <div className={styles.header}>
          <h2 className={`${styles.sectionTitle} animate-fade-in delay-100`}>{t.publications.title}</h2>
          <p className={`${styles.sectionText} animate-fade-in delay-200`}>{t.publications.subtitle}</p>
        </div>

        <div className={styles.pubList}>
          {pubs.map((pub, idx) => (
            <div key={idx} className={`${styles.pubCard} glass-panel animate-fade-in delay-${(idx + 3) * 100}`}>
              <div className={styles.pubHeader}>
                <span className={`${styles.statusBadge} ${pub.status === 'Published' || pub.status === '已发表' ? styles.published : styles.preprint}`}>
                  {pub.status}
                </span>
                <span className={styles.pubYear}>{pub.year}</span>
              </div>
              <h3 className={styles.pubTitle}>{pub.title}</h3>
              <p className={styles.pubAuthors}>{pub.authors}</p>
              {(pub as any).contribution && (
                <p className={styles.pubContribution}>{(pub as any).contribution}</p>
              )}
              <div className={styles.pubMeta}>
                <span className={styles.journal}>{pub.journal}</span>
                {(pub as any).doi && (
                  <a href={(pub as any).doi} target="_blank" rel="noopener noreferrer" className={styles.doiLink}>
                    DOI ↗
                  </a>
                )}
              </div>
              <div className={styles.pubTags}>
                {pub.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={styles.pubTag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
