import './Channels.css'
import { profile } from '../../data/profile'
import { useI18n } from '../../i18n.jsx'

export default function Channels(){
    const { t, lang } = useI18n()

    const subsLabel = lang === 'hi' ? 'सब्सक्राइबर्स' : 'subscribers'
    const visitLabel = lang === 'hi' ? 'चैनल देखें' : 'Visit Channel'
    const missingUrlNote = lang === 'hi' ? 'चैनल URL बाद में जोड़ें' : 'Add channel URL later'

    return (
        <div>
            <h2 className="section__title">{t('channels')}</h2>
            <div className="channels">
                {profile.youtube.channels.map((ch,i)=>(
                    <article key={i} className="channel card">
                        <div className="channel__icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </div>
                        <div className="channel__content">
                            <h3 className="channel__name">{ch.name}</h3>
                            <div className="channel__stats">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                <span className="channel__subs">{ch.subscribers} {subsLabel}</span>
                            </div>
                        </div>
                        {ch.url ? (
                            <a className="btn channel__btn" href={ch.url} target="_blank" rel="noreferrer">
                                <span>{visitLabel}</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        ) : (
                            <span className="channel__note">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg>
                                {missingUrlNote}
                            </span>
                        )}
                    </article>
                ))}
            </div>
        </div>
    )
}