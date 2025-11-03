import './Footer.css'
import { profile } from '../../data/profile'
import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()

    const socials = [
        {
            show: Boolean(profile.email),
            href: `mailto:${profile.email}`,
            label: 'Email',
            icon: (
                <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            ),
        },
        {
            show: Boolean(profile.linkedIn),
            href: profile.linkedIn || '#',
            label: 'LinkedIn',
            icon: (
                <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            ),
        },
        {
            show: Boolean(profile.github),
            href: profile.github || '#',
            label: 'GitHub',
            icon: (
                <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            ),
        },
    ]

    return (
        <footer className="footer" role="contentinfo">
            <div className="container footer__inner">
                <div className="footer__content">
                    <div className="footer__icon" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>

                    <div className="footer__text">
                        <p className="footer__copyright">
                            © {year} {profile?.name}
                        </p>
                        <p className="footer__subtitle">All rights reserved</p>
                    </div>
                </div>

                <div className="footer__divider" aria-hidden="true"></div>

                <nav className="footer__links" aria-label="Social links">
                    {socials
                        .filter((s) => s.show)
                        .map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                                rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                className="footer__link"
                                aria-label={s.label}
                                data-tooltip={s.label}
                                title={s.label}
                            >
                                {s.icon}
                                <span className="sr-only">{s.label}</span>
                            </a>
                        ))}
                </nav>

                <div className="footer__accent" aria-hidden="true">
                    <div className="footer__accent-bar"></div>
                    <div className="footer__accent-dot"></div>
                </div>
            </div>
        </footer>
    )
}
