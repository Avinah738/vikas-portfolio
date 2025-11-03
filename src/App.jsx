import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Metrics from './components/Metrics/Metrics'
import Experience from './components/Experience/Experience'
import Channels from './components/Channels/Channels'
import Projects from './components/Projects/Projects'
import Achievements from './components/Achievements/Achievements'
import Blog from './components/Blog/Blog'
import Skills from './components/Skills/Skills'
import Strengths from './components/Strengths/Strengths'
import Education from './components/Education/Education'
import Media from './components/Media/Media'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import BackToTop from './components/BackToTop/BackToTop'
import { I18nProvider } from './i18n.jsx'

export default function App() {
    // ✅ Reveal animation hook (instead of inline script)
    useEffect(() => {
        const els = document.querySelectorAll('.reveal')
        const io = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        io.unobserve(entry.target) // stops observing once visible
                    }
                })
            },
            { threshold: 0.15 }
        )

        els.forEach(el => io.observe(el))

        // Cleanup observer when component unmounts
        return () => io.disconnect()
    }, [])

    return (
        <I18nProvider>
            <Header />
            <main>
                <Hero />

                <section id="about" className="section section--muted reveal">
                    <div className="container"><About /></div>
                </section>

                {/*<section id="metrics" className="section reveal">*/}
                {/*    <div className="container"><Metrics /></div>*/}
                {/*</section>*/}

                <section id="experience" className="section section--muted reveal">
                    <div className="container"><Experience /></div>
                </section>

                <section id="channels" className="section reveal">
                    <div className="container"><Channels /></div>
                </section>

                <section id="projects" className="section section--muted reveal">
                    <div className="container"><Projects /></div>
                </section>

                <section id="achievements" className="section reveal">
                    <div className="container"><Achievements /></div>
                </section>

                <section id="blog" className="section section--muted reveal">
                    <div className="container"><Blog /></div>
                </section>

                <section id="skills" className="section reveal">
                    <div className="container"><Skills /></div>
                </section>

                <section id="strengths" className="section section--muted reveal">
                    <div className="container"><Strengths /></div>
                </section>

                {/*<section id="education" className="section reveal">*/}
                {/*    <div className="container"><Education /></div>*/}
                {/*</section>*/}

                <section id="media" className="section section--muted reveal">
                    <div className="container"><Media /></div>
                </section>

                <section id="contact" className="section reveal">
                    <div className="container"><Contact /></div>
                </section>
            </main>
            <Footer />
            <BackToTop />
        </I18nProvider>
    )
}
