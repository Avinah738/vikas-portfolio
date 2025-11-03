import './About.css'
import { profile } from '../../data/profile'
import { useI18n } from '../../i18n.jsx'

export default function About(){
    const { t, lang } = useI18n()
    const text = lang==='hi' ? profile.summaryHi : profile.summary
    return (
        <div className="about card">
            <div className="about__header">
                <h2 className="section__title">{t('about')}</h2>
            </div>
            <p className="about__text">{text}</p>
            {/*<div className="about__divider"></div>*/}
            {/*<ul className="about__inline">*/}
            {/*    <li className="about__item">*/}
            {/*        <svg className="about__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">*/}
            {/*            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>*/}
            {/*            <polyline points="22,6 12,13 2,6"></polyline>*/}
            {/*        </svg>*/}
            {/*        <div className="about__item-content">*/}
            {/*            <strong className="about__label">Email</strong>*/}
            {/*            <a className="about__link link" href={`mailto:${profile.email}`}>{profile.email}</a>*/}
            {/*        </div>*/}
            {/*    </li>*/}
            {/*    <li className="about__item">*/}
            {/*        <svg className="about__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">*/}
            {/*            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>*/}
            {/*            <rect x="2" y="9" width="4" height="12"></rect>*/}
            {/*            <circle cx="4" cy="4" r="2"></circle>*/}
            {/*        </svg>*/}
            {/*        <div className="about__item-content">*/}
            {/*            <strong className="about__label">LinkedIn</strong>*/}
            {/*            <a className="about__link link" href={profile.linkedIn} target="_blank" rel="noreferrer">{t('linkedIn')}</a>*/}
            {/*        </div>*/}
            {/*    </li>*/}
            {/*</ul>*/}
        </div>
    )
}