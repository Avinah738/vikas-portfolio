import './Hero.css'
import { profile } from '../../data/profile'
import { useI18n } from '../../i18n.jsx'

export default function Hero(){
    const { t } = useI18n()
    return (
        <section className="hero">
            <div className="container hero__inner">
                <div className="hero__content">
                    <div className="hero__badge-wrapper">
                        <span className="badge hero__badge">
                            {/*<span className="badge__pulse"></span>*/}
                            {t('available For Collaborations') || 'Available for collaborations & brand partnerships'}
                        </span>
                    </div>
                    <h1 className="hero__title">
                        <span className="hero__title-text">{profile.name}</span>
                    </h1>
                    <p className="hero__subtitle">{profile.title}</p>
                    <div className="hero__cta">
                        <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            {t('emailMe')}
                        </a>
                        <a className="hero__link" href={profile.linkedIn} target="_blank" rel="noreferrer">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                            {t('linkedIn')}
                        </a>
                    </div>
                </div>
                <div className="hero__decoration">
                    <div className="hero__circle hero__circle--1"></div>
                    <div className="hero__circle hero__circle--2"></div>
                    <div className="hero__circle hero__circle--3"></div>
                </div>
            </div>
        </section>
    )
}