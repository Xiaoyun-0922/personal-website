'use client';
import styles from './Skills.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();
  const categories = (t as any).skills.categories;

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={`container ${styles.skillsContainer}`}>
        <div className={styles.header}>
          <h2 className={`${styles.sectionTitle} animate-fade-in delay-100`}>{(t as any).skills.title}</h2>
          <p className={`${styles.sectionText} animate-fade-in delay-200`}>{(t as any).skills.subtitle}</p>
        </div>

        <div className={`${styles.skillsGrid} animate-fade-in delay-300`}>
          {categories.map((cat: any, idx: number) => (
            <div key={idx} className={`${styles.skillCategory} glass-panel`}>
              <h3 className={styles.categoryName}><span className={styles.bracket}>[</span> {cat.name} <span className={styles.bracket}>]</span></h3>
              <div className={styles.tagsContainer}>
                {cat.items.map((item: string, i: number) => (
                  <span key={i} className={styles.skillTag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
