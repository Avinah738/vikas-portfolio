import './Projects.css'
import { projects, projectsHi } from '../../data/projects'
import { useI18n } from '../../i18n.jsx'

export default function Projects(){
    const { t, lang } = useI18n()

    // Use Hindi list when lang is 'hi' and projectsHi exists; otherwise fall back to English
    const list = (lang === 'hi' && Array.isArray(projectsHi) && projectsHi.length)
        ? projectsHi
        : projects

    return (
        <div>
            <h2 className="section__title">{t('projects')}</h2>
            <div className="projects">
                {list.map((p,i)=>(
                    <article className="project card" key={i}>
                        <div className="project__header">
                            <div className="project__header-content">
                                <h3 className="project__title">{p.title}</h3>
                                <div className="project__period">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    {p.period}
                                </div>
                            </div>
                        </div>
                        <p className="project__summary">{p.summary}</p>
                        <ul className="clean project__highlights">
                            {p.highlights.map((h,idx)=> (
                                <li key={idx} className="project__highlight-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span>{h}</span>
                                </li>
                            ))}
                        </ul>
                        {p.videoId ? (
                            <div className="project__video">
                                <div className="project__video-wrapper">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${p.videoId}`}
                                        title={p.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        ) : null}
                        <div className="project__tags">
                            {p.tags.map((tg,idx)=> (
                                <span className="tag" key={idx}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                        <line x1="7" y1="7" x2="7.01" y2="7"></line>
                                    </svg>
                                    {tg}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}