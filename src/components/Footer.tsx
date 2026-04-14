'use client';
import styles from './Footer.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          <div className={styles.brand}>
            <span className={styles.name}>Xiaoyun Liu</span>
            <span className={styles.dot}>.</span>
          </div>
          <p className={styles.tagline}>
            {t.footer.tagline}
          </p>
        </div>
        
        <div className={styles.footerLinks}>
          <a href="https://github.com/Xiaoyun-0922" target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
          <a href="mailto:liuxy@stu.ouc.edu.cn" className={styles.link}>
            {t.footer.contact}
          </a>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">
          <p className={styles.copyright}>
            &copy; {currentYear} Xiaoyun Liu. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
