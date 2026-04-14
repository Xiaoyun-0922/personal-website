'use client';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoName}>Xiaoyun Liu</span>
          <span className={styles.logoDot}>.</span>
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
          <a href="#about" className={styles.navLink} onClick={handleLinkClick}>{t.nav.about}</a>
          <a href="#experience" className={styles.navLink} onClick={handleLinkClick}>{t.nav.experience}</a>
          <a href="#competitions" className={styles.navLink} onClick={handleLinkClick}>{t.nav.competitions}</a>
          <a href="#vision" className={styles.navLink} onClick={handleLinkClick}>{t.nav.vision}</a>
          
          <button onClick={() => { toggleLanguage(); handleLinkClick(); }} className={styles.langToggle}>
             {language === 'en' ? '中' : 'EN'}
          </button>
        </nav>
      </div>
    </header>
  );
}
