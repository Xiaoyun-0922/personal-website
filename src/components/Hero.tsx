'use client';
import styles from './Hero.module.css';
import { useLanguage } from '@/context/LanguageContext';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="about" className={styles.heroSection}>
      <div className={styles.backgroundGlow} />
      <ParticleBackground />
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={`${styles.badge} animate-fade-in`}>
            {t.hero.badge}
          </div>
          <h1 className={`${styles.title} animate-fade-in delay-100`}>
            {t.hero.greeting} <span className={styles.highlight}>{t.hero.name}</span>.
          </h1>
          <p className={`${styles.subtitle} animate-fade-in delay-200`}>
            {t.hero.university}
          </p>
          <p className={`${styles.description} animate-fade-in delay-300`}>
            {t.hero.description}
          </p>
          

          
          <div className={`${styles.actions} animate-fade-in delay-300`}>
            <a href="#experience" className={styles.primaryButton}>{t.hero.btnPrimary}</a>
            <a href="mailto:liuxy@stu.ouc.edu.cn" className={styles.secondaryButton}>{t.hero.email}</a>
            <a href="https://github.com/Xiaoyun-0922" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>{t.hero.btnSecondary}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
