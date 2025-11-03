import './Header.css'
import { profile } from '../../data/profile'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { useI18n } from '../../i18n.jsx'
import useScrollSpy from '../../lib/useScrollSpy'
import { useState } from 'react'

export default function Header(){
    const { t, lang, setLang } = useI18n()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const sections = ['#about','#metrics','#experience','#channels','#projects','#achievements','#blog','#skills','#strengths','#education','#media','#contact']
    const active = useScrollSpy(sections)

    const nav = [
        { href: '#about', label: t('about') },
        // { href: '#metrics', label: t('highlights') },
        { href: '#experience', label: t('experience') },
        { href: '#channels', label: t('channels') },
        // { href: '#projects', label: t('projects') },
        // { href: '#achievements', label: t('achievements') },
        { href: '#blog', label: t('blog') },
        // { href: '#skills', label: t('skills') },
        { href: '#strengths', label: t('strengths') },
        // { href: '#education', label: t('education') },
        // { href: '#media', label: t('media') },
        { href: '#contact', label: t('contact') }
    ]

    const handleNavClick = () => {
        setMobileMenuOpen(false)
    }

    return (
        <header className="header">
            <div className="container header__inner">
                <div className="header__brand">
                    <span className="brand__name">{profile.name}</span>
                    <span className="brand__title">{profile.title}</span>
                </div>

                <button
                    className="header__mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${mobileMenuOpen ? 'is-active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                <nav className={`header__nav ${mobileMenuOpen ? 'is-open' : ''}`}>
                    <div className="header__nav-inner">
                        {nav.map(item => (
                            <a
                                className={`header__link ${active===item.href ? 'is-active':''}`}
                                href={item.href}
                                key={item.href}
                                onClick={handleNavClick}
                            >{item.label}</a>
                        ))}
                    </div>
                </nav>

                <div className="header__actions">
                    <ThemeToggle />
                    <select
                        aria-label="Language"
                        className="header__lang"
                        value={lang}
                        onChange={e=>setLang(e.target.value)}
                    >
                        <option value="en">EN</option>
                        <option value="hi">हिं</option>
                    </select>
                </div>
            </div>
        </header>
    )
}