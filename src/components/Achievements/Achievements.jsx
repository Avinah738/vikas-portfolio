import './Achievements.css'
import { achievements, achievementsHi } from '../../data/achievements'
import { useI18n } from '../../i18n.jsx'

export default function Achievements(){
    const { t, lang } = useI18n()
    const list = (lang === 'hi' && Array.isArray(achievementsHi) && achievementsHi.length)
        ? achievementsHi
        : achievements

    return (
        <div>
            <h2 className="section__title">{t('achievements')}</h2>
            <div className="achv">
                {list.map((a,idx)=>(
                    <div className="achv__item card" key={idx}>
                        <div className="achv__icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="8" r="7"></circle>
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                            </svg>
                        </div>
                        <div className="achv__content">
                            <h3 className="achv__title">{a.title}</h3>
                            <p className="achv__detail">{a.detail}</p>
                        </div>
                        <div className="achv__decoration"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}