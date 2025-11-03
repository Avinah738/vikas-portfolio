import './Experience.css'
import { profile } from '../../data/profile'
import { useI18n } from '../../i18n.jsx'

export default function Experience(){
    const { t, lang } = useI18n()
    // Prefer Hindi experience block when lang is 'hi' and experienceHi exists/falls back to English otherwise
    const expList = (lang === 'hi' && profile.experienceHi) ? profile.experienceHi : profile.experience
    const exp = expList[0]

    return (
        <div className="experience-section">
            <h2 className="section__title">{t('experience')}</h2>
            <div className="card exp">
                <div className="exp__timeline">
                    <div className="exp__timeline-dot"></div>
                    <div className="exp__timeline-line"></div>
                </div>
                <div className="exp__content">
                    <div className="exp__header">
                        <div className="exp__header-main">
                            <h3 className="exp__role">{exp.role}</h3>
                            <div className="exp__meta">
                                <span className="exp__company">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                    </svg>
                                    {exp.company}
                                </span>
                                <span className="exp__separator">•</span>
                                <span className="exp__period">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    {exp.period}
                                </span>
                            </div>
                        </div>
                    </div>
                    <ul className="clean exp__list">
                        {exp.bullets.map((b, idx) => (
                            <li key={idx} className="exp__item">
                                <div className="exp__bullet-icon">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}