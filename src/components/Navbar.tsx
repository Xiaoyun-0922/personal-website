'use client';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoName}>Xiaoyun Liu</span>
          <span className={styles.logoDot}>.</span>
        </a>
        <nav className={styles.navLinks}>
          <a href="#about" className={styles.navLink}>{t.nav.about}</a>
          <a href="#experience" className={styles.navLink}>{t.nav.experience}</a>
          <a href="#competitions" className={styles.navLink}>{t.nav.competitions}</a>
          <a href="#vision" className={styles.navLink}>{t.nav.vision}</a>
          
          <button onClick={toggleLanguage} className={styles.langToggle}>
             {language === 'en' ? '中' : 'EN'}
          </button>
        </nav>
      </div>
    </header>
  );
}
