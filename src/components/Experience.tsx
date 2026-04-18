'use client';
import styles from './Experience.module.css';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Experience() {
  const { t } = useLanguage();
  const experiences = t.experience.items;
  const personalProjects = t.experience.personalProjects;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [stars, setStars] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch('https://api.github.com/repos/Xiaoyun-0922/sshops')
      .then(res => {
        if (!res.ok) throw new Error('rate limited');
        return res.json();
      })
      .then(data => {
        if (typeof data.stargazers_count === 'number') {
          setStars({ 'Xiaoyun-0922/sshops': data.stargazers_count });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={`container ${styles.expContainer}`}>
        <h2 className={`${styles.sectionTitle} animate-fade-in`}>{t.experience.title}</h2>

        {/* Completed / Patent items */}
        <div className={styles.timeline}>
          {experiences.slice(0, 2).map((exp, index) => (
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
                  <div className={styles.imageWrapper} onClick={() => setSelectedImage(exp.image)}>
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
              </div>
            </div>
          </div>
          ))}
        </div>

        {/* Ongoing Research divider */}
        <h3 className={`${styles.subSectionTitle} animate-fade-in`}>{(t.experience as any).ongoingTitle}</h3>

        {/* Ongoing items */}
        <div className={styles.timeline}>
          {experiences.slice(2).map((exp, index) => (
            <div key={index} className={`${styles.timelineItem} animate-fade-in delay-100`}>
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
           {personalProjects.map((proj: any, idx: number) => {
              const repoStars = proj.repo && stars[proj.repo] !== undefined ? stars[proj.repo] : proj.defaultStars;
              const cardContent = (
                 <>
                   <div className={styles.projectCardHeader}>
                     <h4 className={styles.projectTitle}>{proj.title}</h4>
                     {repoStars !== undefined && (
                       <span className={styles.starBadge}>
                         <svg height="14" width="14" viewBox="0 0 16 16" fill="currentColor" style={{verticalAlign: 'middle'}}>
                           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                         </svg>
                         ★ {repoStars}
                       </span>
                     )}
                   </div>
                   <p className={styles.projectDesc}>{proj.desc}</p>
                   {proj.github ? (
                     <span className={styles.githubLink}>{t.experience.githubLink} &rarr;</span>
                   ) : (
                     <span className={styles.closedSourceBadge}>{t.experience.closedSource}</span>
                   )}
                 </>
              );

              const url = proj.githubUrl || "https://github.com/Xiaoyun-0922";

              return proj.github ? (
                <a href={url} target="_blank" rel="noopener noreferrer" key={idx} className={`${styles.projectCard} glass-panel`}>
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

      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <div className={styles.lightboxContent}>
            <Image 
              src={selectedImage} 
              alt="Expanded view" 
              fill 
              style={{ objectFit: 'contain' }} 
              unoptimized={true} 
            />
          </div>
        </div>
      )}
    </section>
  );
}
