import React, {createContext, useContext, useEffect, useState} from 'react'

const dict = {
    en: {
        about: "About",
        highlights: "Highlights",
        experience: "Experience",
        channels: "Channels",
        projects: "Projects / Case Studies",
        achievements: "Achievements",
        blog: "Blog / Insights",
        skills: "Skills",
        strengths: "Strengths",
        education: "Education & Languages",
        contact: "Contact",
        media: "Resume & Media Kit",
        emailMe: "Email Me",
        linkedIn: "LinkedIn",
        readMore: "Read more",
        readLess: "Read less",
        downloadResume: "Download Resume",
        downloadMediaKit: "Download Media Kit",
        printPdf: "Print as PDF",
        contactNote: "For collaborations, partnerships, or channel management opportunities, drop a line:"
    },
    hi: {
        about: "परिचय",
        highlights: "मुख्य उपलब्धियाँ",
        experience: "अनुभव",
        channels: "चैनल",
        projects: "प्रोजेक्ट्स / केस स्टडी",
        achievements: "उपलब्धियाँ",
        blog: "ब्लॉग / इनसाइट्स",
        skills: "कौशल",
        strengths: "ताकत",
        education: "शिक्षा व भाषाएँ",
        contact: "संपर्क",
        media: "रिज़्यूमे व मीडिया किट",
        emailMe: "ईमेल करें",
        linkedIn: "लिंक्डइन",
        readMore: "और पढ़ें",
        readLess: "कम दिखाएँ",
        downloadResume: "रिज़्यूमे डाउनलोड करें",
        downloadMediaKit: "मीडिया किट डाउनलोड करें",
        printPdf: "पीडीएफ के रूप में प्रिंट",
        contactNote: "कोलैब, पार्टनरशिप या चैनल मैनेजमेंट के लिए संपर्क करें:"
    }
}

const I18nContext = createContext({ lang: 'en', setLang: ()=>{}, t: (k)=>k })

export function I18nProvider({children}){
    const [lang, setLang] = useState(localStorage.getItem('lang') || 'en')
    useEffect(()=> localStorage.setItem('lang', lang), [lang])
    const t = (key)=> (dict[lang] && dict[lang][key]) || dict.en[key] || key
    return <I18nContext.Provider value={{lang, setLang, t}}>{children}</I18nContext.Provider>
}
export const useI18n = ()=> useContext(I18nContext)
