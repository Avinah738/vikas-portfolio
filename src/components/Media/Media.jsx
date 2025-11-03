import './Media.css'
import { profile } from '../../data/profile'
import { useI18n } from '../../i18n.jsx'

export default function Media(){
    const { t } = useI18n()
    const printPdf = ()=> window.print()

    return (
        <div>
            <h2 className="section__title">{t('media')}</h2>
            <div className="media card">
                <div className="media__icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                </div>
                <div className="media__content">
                    <h3 className="media__heading">Download Resources</h3>
                    <p className="media__description">Get a quick snapshot for brands and partners.</p>
                    <div className="media__actions">
                        <a className="btn media__btn" href="/resume.pdf" download>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            {t('downloadResume')}
                        </a>
                        <a className="btn media__btn" href={profile.mediaKitUrl} download>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            {t('downloadMediaKit')}
                        </a>
                        <button className="btn media__btn" onClick={printPdf}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                                <rect x="6" y="14" width="12" height="8"></rect>
                            </svg>
                            {t('printPdf')}
                        </button>
                    </div>
                    {/*<div className="media__hint">*/}
                    {/*    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">*/}
                    {/*        <circle cx="12" cy="12" r="10"></circle>*/}
                    {/*        <line x1="12" y1="16" x2="12" y2="12"></line>*/}
                    {/*        <line x1="12" y1="8" x2="12.01" y2="8"></line>*/}
                    {/*    </svg>*/}
                    {/*    <span>*/}
                    {/*        Place <code>resume.pdf</code> and <code>media-kit.pdf</code> in the project <code>public/</code> folder.*/}
                    {/*    </span>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}