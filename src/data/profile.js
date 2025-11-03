// profile.js
// Rich, bilingual profile object with detailed narratives and measurable outcomes.
// Structure preserved to avoid breaking existing imports.

export const profile = {
    name: "Vikas Raghuvanshi",
    title: "Content Creator • Channel Manager",
    email: "vikaskidea@gmail.com",
    linkedIn: "https://www.linkedin.com/in/vikas-raghuvanshi-490a6b38a",
    youtube: {
        channels: [
            { name: "RV World", subscribers: "190K+", url: "https://youtube.com/@rvworldoriginal?si=S6oNq41ubtKnkBkR" },
            { name: "Vikas k Idea", subscribers: "160K+", url: "https://youtube.com/@vikaskidea?si=O9LYPL001O0WPXRe" }
        ],
        totalSubscribers: "330K+",
        totalViews: "100M+"
    },

    // EN — Expanded summary with concrete emphasis on outcomes and stack
    summary: `YouTube Creator and Channel Manager with 5+ years of hands-on experience building,
optimizing, and scaling Art & Craft channels from zero to sustained reach and revenue.
Full-stack creator across concept development, scripting, production (camera, lighting, audio),
retention-oriented editing, and platform SEO. Adept at translating audience research and analytics
(CTR, AVD, RPM, view velocity) into repeatable editorial calendars and brand-safe content franchises.
Consistently monetizes via AdSense, affiliate integrations, and sponsor partnerships while preserving
audience trust with value-first content. Comfortable leading collabs, working with designers for
high-performing thumbnails, and running A/B tests to compound growth.`,

    // HI — Expanded Hindi summary
    summaryHi: `5+ वर्षों के अनुभव वाले YouTube क्रिएटर और चैनल मैनेजर—आर्ट एवं क्राफ्ट निच में शून्य से
चैनल बनाकर स्थायी ग्रोथ और राजस्व तक पहुँचाने का सिद्ध अनुभव। कॉन्सेप्ट, स्क्रिप्टिंग, प्रोडक्शन
(कैमरा, लाइटिंग, ऑडियो), रिटेंशन-फोकस्ड एडिटिंग और प्लेटफॉर्म SEO में दक्ष। ऑडियंस रिसर्च और
एनालिटिक्स (CTR, AVD, RPM, व्यू वेलोसिटी) के आधार पर एडिटोरियल कैलेंडर व कंटेंट फ्रैंचाइज़ बनाना,
AdSense/स्पॉन्सरशिप/अफिलिएट के माध्यम से मोनेटाइज़ करना, और वैल्यू-फर्स्ट वीडियो से ऑडियंस का विश्वास
बनाए रखना—ये मेरी मुख्य ताकतें हैं।`,

    mediaKitUrl: "/media-kit.pdf",

    // EN — Experience with more granular, outcome-driven bullets
    experience: [
        {
            role: "Content Creator & Channel Manager",
            company: "RV World & Vikas k Idea (Self-Employed)",
            period: "2019 – Present · Remote",
            bullets: [
                "Built two Art & Craft channels from scratch to a combined 330K+ subscribers and 100M+ lifetime views with consistent weekly publishing and evergreen series.",
                "Implemented a measurable SEO pipeline: audience keyword mapping → title/thumbnail hypotheses → upload checklist → 72-hour view-velocity audit → iteration.",
                "Lifted CTR from ~3% to ~7% on key videos by aligning promise–proof in title/thumbnail pairs and by designing ‘visual payoffs’ in the first 30 seconds.",
                "Pushed Average View Duration (AVD) beyond 50% on multiple tutorials by tightening pacing, adding micro-payoffs every 15–25s, and maintaining narrative stakes.",
                "Designed a repeatable content calendar around seasonal spikes (festivals, school projects), resulting in +35–60% MoM view surges during peak periods.",
                "Standardized a post-production template in DaVinci Resolve including color, EQ, compression, and subtitles for accessibility and retention.",
                "Negotiated and delivered sponsor integrations with brand-safe segments, transparent disclosures, and measurable campaign KPIs (CTR to landing, code redemptions).",
                "Built community trust with comments moderation, pinned FAQs, chapters/timestamps, and community posts; improved return viewers and session time."
            ]
        }
    ],

    // HI — Experience (detailed Hindi bullets)
    experienceHi: [
        {
            role: "कॉन्टेंट क्रिएटर एवं चैनल मैनेजर",
            company: "RV World एवं Vikas k Idea (स्वरोज़गार)",
            period: "2019 – वर्तमान · रिमोट",
            bullets: [
                "दो आर्ट-एंड-क्राफ्ट चैनल शून्य से बनाकर 330K+ सब्सक्राइबर्स और 100M+ लाइफ़टाइम व्यूज़ तक पहुँचाए—नियमित अपलोड और एवरग्रीन सीरीज़ के साथ।",
                "SEO प्रक्रिया स्थापित की: कीवर्ड मैपिंग → टाइटल/थंबनेल हाइपोथेसिस → अपलोड चेकलिस्ट → 72 घंटे का व्यू-वेलोसिटी ऑडिट → इटरेशन।",
                "टाइटल-थंबनेल में प्रॉमिस-प्रूफ अलाइनमेंट और पहले 30 सेकंड में ‘विज़ुअल पे-ऑफ’ दिखाकर कई वीडियो में CTR ~3% से ~7% तक बढ़ाया।",
                "पेसिंग टाइट करने, हर 15–25 सेकंड पर माइक्रो पे-ऑफ देने और नैरेटिव स्टेक्स बनाए रखने से कई ट्यूटोरियल्स में AVD 50%+ तक पहुँचा।",
                "त्योहारों/स्कूल प्रोजेक्ट्स जैसे सीज़नल स्पाइक्स पर आधारित कंटेंट कैलेंडर बनाकर पीक पीरियड्स में 35–60% MoM व्यू ग्रोथ प्राप्त की।",
                "DaVinci Resolve में कलर/ऑडियो प्रीसेट और सबटाइटल्स सहित पोस्ट-प्रोडक्शन टेम्पलेट स्टैंडर्डाइज़ किया—क्वालिटी और रिटेंशन में सुधार हुआ।",
                "ब्रांड-सेफ़ स्पॉन्सर इंटीग्रेशन्स, डिस्क्लोज़र और स्पष्ट KPI (लैंडिंग CTR, कूपन रिडेम्प्शन) के साथ सफल कैंपेन्स डिलीवर किए।",
                "कम्युनिटी पोस्ट्स, पिन किए गए FAQs, चैप्टर्स/टाइमस्टैम्प्स और मॉडरेशन से रिटर्न व्यूअर्स और सेशन टाइम में सुधार किया।"
            ]
        }
    ],

    // EN — Skills (expanded)
    skills: [
        "YouTube Channel Management",
        "Content Strategy & Development",
        "Editorial Calendar Design",
        "YouTube SEO (titles, tags, metadata)",
        "Thumbnail Strategy & Direction",
        "Video Production (camera, lighting, audio)",
        "Video Shooting (top-down craft, multi-angle)",
        "Video Editing (DaVinci Resolve)",
        "Retention-Focused Storycraft",
        "YouTube Analytics (CTR, AVD, RPM, velocity)",
        "Keyword Research & Topic Validation",
        "Scripting & Storytelling",
        "Community Engagement & Moderation",
        "Brand Development & Positioning",
        "Sponsorship & Affiliate Integrations",
        "A/B Testing (titles/thumbnails/hooks)"
    ],

    // HI — Skills (expanded)
    skillsHi: [
        "YouTube चैनल मैनेजमेंट",
        "कॉन्टेंट स्ट्रैटेजी एवं डेवलपमेंट",
        "एडिटोरियल कैलेंडर डिजाइन",
        "YouTube SEO (टाइटल, टैग्स, मेटाडेटा)",
        "थंबनेल स्ट्रैटेजी व डायरेक्शन",
        "वीडियो प्रोडक्शन (कैमरा, लाइटिंग, ऑडियो)",
        "वीडियो शूटिंग (टॉप-डाउन, मल्टी-एंगल)",
        "वीडियो एडिटिंग (DaVinci Resolve)",
        "रिटेंशन-फोकस्ड स्टोरीटेलिंग",
        "YouTube एनालिटिक्स (CTR, AVD, RPM, वेलोसिटी)",
        "कीवर्ड रिसर्च व टॉपिक वैलिडेशन",
        "स्क्रिप्टिंग एवं स्टोरीटेलिंग",
        "कम्युनिटी एंगेजमेंट व मॉडरेशन",
        "ब्रांड डेवलपमेंट व पोज़िशनिंग",
        "स्पॉन्सरशिप/अफिलिएट इंटीग्रेशन",
        "A/B टेस्टिंग (टाइटल/थंबनेल/हुक)"
    ],

    // EN — Strengths (more descriptive)
    strengths: [
        {
            title: "Strategic Audience Growth & Engagement",
            text: "Defines a clear ICP per series, builds repeatable formats, and nurtures community behavior (comments, shares, watch sessions) that compounds reach over time."
        },
        {
            title: "Data-Driven SEO & Algorithm Understanding",
            text: "Uses search demand, browse features, and suggested surfaces as distinct entry paths; aligns metadata and early-video payoffs to each path for higher conversion."
        },
        {
            title: "End-to-End Production Management",
            text: "Runs a reliable pipeline from ideation to publish, with templates for lighting, audio, color, motion, captions, and QC so output stays consistent at scale."
        }
    ],

    // HI — Strengths (more descriptive)
    strengthsHi: [
        {
            title: "रणनीतिक ऑडियंस ग्रोथ एवं एंगेजमेंट",
            text: "प्रत्येक सीरीज़ के लिए स्पष्ट ICP तय करके रिपीटेबल फॉर्मेट बनाता हूँ; कम्युनिटी बिहेवियर (कमेंट्स, शेयर, वॉच सेशंस) को बढ़ाकर ऑर्गैनिक रीच बढ़ाता हूँ।"
        },
        {
            title: "डेटा-ड्रिवन SEO एवं एल्गोरिद्म समझ",
            text: "सर्च, ब्राउज़ और सजेस्टेड—इन तीनों एंट्री पाथ्स के अनुसार मेटाडेटा और शुरुआती विज़ुअल पे-ऑफ अलाइन करता हूँ ताकि क्लिक-टू-वॉच कन्वर्ज़न बेहतर हो।"
        },
        {
            title: "एंड-टू-एंड प्रोडक्शन मैनेजमेंट",
            text: "आइडिया से पब्लिश तक की पाइपलाइन टेम्पलेट्स के साथ चलाता हूँ—लाइट/ऑडियो/कलर/मोशन/कैप्शंस/QC—जिससे बड़े पैमाने पर भी क्वालिटी स्थिर रहती है।"
        }
    ],

    // EN — Education (unchanged structure, clarified labels)
    education: [
        { level: "BSc", school: "RGNP Degree College", place: "Raja-Ka-Tajpur, Bijnor", period: "2019 – 2022" },
        { level: "12th", school: "SVM Inter College", place: "Noorpur, Bijnor", period: "2018 – 2019" },
        { level: "10th", school: "KKMHS High School", place: "Raja-Ka-Tajpur, Bijnor", period: "2016 – 2017" }
    ],

    // HI — Education
    educationHi: [
        { level: "बीएससी (BSc)", school: "RGNP डिग्री कॉलेज", place: "राजा-का-ताजपुर, बिजनौर", period: "2019 – 2022" },
        { level: "इंटरमीडिएट (12वीं)", school: "SVM इंटर कॉलेज", place: "नूरपुर, बिजनौर", period: "2018 – 2019" },
        { level: "हाई स्कूल (10वीं)", school: "KKMHS हाई स्कूल", place: "राजा-का-ताजपुर, बिजनौर", period: "2016 – 2017" }
    ],

    // EN — Languages
    languages: [
        { name: "Hindi", level: "Native" },
        { name: "English", level: "Intermediate" }
    ],

    // HI — Languages
    languagesHi: [
        { name: "हिन्दी", level: "मातृभाषा" },
        { name: "अंग्रेज़ी", level: "मध्यम" }
    ]
};
