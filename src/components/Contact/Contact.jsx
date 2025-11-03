import './Contact.css'
import { profile } from '../../data/profile'
import { useState } from 'react'
import { useI18n } from '../../i18n.jsx'

export default function Contact(){
    const { t } = useI18n()
    const [status, setStatus] = useState(null)

    const onSubmit = async (e)=>{
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        try{
            // Replace with your Formspree endpoint
            const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: data
            })
            if(res.ok){ setStatus('SUCCESS'); e.currentTarget.reset() }
            else setStatus('ERROR')
        }catch{ setStatus('ERROR') }
    }

    return (
        <div>
            <h2 className="section__title">{t('contact')}</h2>
            <div className="contact">
                <div className="contact__info card">
                    <div className="contact__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </div>
                    <div className="contact__intro">
                        <h3 className="contact__subtitle">{t('contactNote')}</h3>
                        <p className="contact__text">Feel free to reach out through any of these channels or use the form below.</p>
                    </div>
                    <div className="contact__methods">
                        <a href={`mailto:${profile.email}`} className="contact__method">
                            <div className="contact__method-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div className="contact__method-content">
                                <span className="contact__method-label">Email</span>
                                <span className="contact__method-value">{profile.email}</span>
                            </div>
                            <svg className="contact__method-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </a>
                        <a href={profile.linkedIn} target="_blank" rel="noreferrer" className="contact__method">
                            <div className="contact__method-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </div>
                            <div className="contact__method-content">
                                <span className="contact__method-label">LinkedIn</span>
                                <span className="contact__method-value">Connect with me</span>
                            </div>
                            <svg className="contact__method-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="contact__form-wrapper card">
                    <div className="contact__form-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </div>
                    <h3 className="contact__form-title">Send a Message</h3>
                    <form className="contact__form" onSubmit={onSubmit}>
                        <div className="contact__row">
                            <div className="contact__field">
                                <label htmlFor="name" className="contact__label">Name</label>
                                <input
                                    id="name"
                                    required
                                    name="name"
                                    placeholder="Your name"
                                    className="contact__input"
                                />
                            </div>
                            <div className="contact__field">
                                <label htmlFor="email" className="contact__label">Email</label>
                                <input
                                    id="email"
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="contact__input"
                                />
                            </div>
                        </div>
                        <div className="contact__field">
                            <label htmlFor="subject" className="contact__label">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                placeholder="What's this about?"
                                className="contact__input"
                            />
                        </div>
                        <div className="contact__field">
                            <label htmlFor="message" className="contact__label">Message</label>
                            <textarea
                                id="message"
                                required
                                name="message"
                                rows="5"
                                placeholder="Your message..."
                                className="contact__textarea"
                            ></textarea>
                        </div>
                        <button className="contact__submit btn" type="submit">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                            Send Message
                        </button>
                        {status==='SUCCESS' && (
                            <div className="contact__message contact__message--success">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                Thanks! I'll reply soon.
                            </div>
                        )}
                        {status==='ERROR' && (
                            <div className="contact__message contact__message--error">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                                Something went wrong. Please email me directly.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}