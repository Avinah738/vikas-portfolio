import './Skills.css'
import { profile } from '../../data/profile'
import { useI18n } from '../../i18n.jsx'

export default function Skills(){
    const { t, lang } = useI18n()
    const list = (lang === 'hi' && Array.isArray(profile.skillsHi) && profile.skillsHi.length)
        ? profile.skillsHi
        : profile.skills

    return (
        <div>
            <h2 className="section__title">{t('skills')}</h2>
            <div className="skills card">
                <div className="skills__icon-wrapper">
                    <svg className="skills__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 17 12 22 22 17"></polyline>
                        <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                </div>
                <div className="skills__grid">
                    {list.map((s,i)=>(
                        <span className="skills__pill" key={i}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}