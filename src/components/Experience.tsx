'use client';
import styles from './Experience.module.css';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function Experience() {
  const { t } = useLanguage();
  const experiences = t.experience.items;
  const personalProjects = t.experience.personalProjects;

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={`container ${styles.expContainer}`}>
        <h2 className={`${styles.sectionTitle} animate-fade-in`}>{t.experience.title}</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={`${styles.timelineItem} animate-fade-in delay-${(index + 1) * 100}`}>
              <div className={`${styles.innerCard} glass-panel`}>
                <div className={styles.timelineContent}>
                <h3 className={styles.expTitle}>{exp.title}</h3>
                <div className={styles.expMeta}>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.date}>{exp.date}</span>
                </div>
                <p className={styles.expDesc}>{exp.description}</p>
                <div className={styles.tagsGroup}>
                  {exp.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                
                {exp.image && (
                  <div className={styles.imageWrapper}>
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      width={800}
                      height={400}
                      className={styles.projectImage}
                      unoptimized={true}
                    />
                  </div>
                )}

                {/* Sub-item rendered inside the same card */}
                {(exp as any).subItem && (
                  <div className={styles.subItemBlock}>
                    <div className={styles.subItemDivider} />
                    <h4 className={styles.subItemTitle}>{(exp as any).subItem.title}</h4>
                    <div className={styles.expMeta}>
                      <span className={styles.company}>{(exp as any).subItem.company}</span>
                      <span className={styles.date}>{(exp as any).subItem.date}</span>
                    </div>
                    <p className={styles.expDesc}>{(exp as any).subItem.description}</p>
                    <div className={styles.tagsGroup}>
                      {(exp as any).subItem.tags.map((tag: string, tagIndex: number) => (
                        <span key={tagIndex} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          ))}
        </div>
        
        <h3 className={`${styles.subSectionTitle} animate-fade-in delay-400`}>{t.experience.projectsTitle}</h3>
        <div className={`${styles.projectsGrid} animate-fade-in delay-500`}>
           {personalProjects.map((proj, idx) => {
              const cardContent = (
                 <>
                   <h4 className={styles.projectTitle}>{proj.title}</h4>
                   <p className={styles.projectDesc}>{proj.desc}</p>
                   {proj.github ? (
                     <span className={styles.githubLink}>{t.experience.githubLink} &rarr;</span>
                   ) : (
                     <span className={styles.closedSourceBadge}>{t.experience.closedSource}</span>
                   )}
                 </>
              );

              return proj.github ? (
                <a href="https://github.com/Xiaoyun-0922" target="_blank" rel="noopener noreferrer" key={idx} className={`${styles.projectCard} glass-panel`}>
                  {cardContent}
                </a>
              ) : (
                <div key={idx} className={`${styles.projectCard} glass-panel`}>
                  {cardContent}
                </div>
              );
           })}
        </div>
      </div>
    </section>
  );
}
