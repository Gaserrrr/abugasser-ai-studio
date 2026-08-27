import React from 'react'
import { useLanguage } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'

const SKILLS = {
  ar: ['توليد الصور', 'هندسة البرومبتات', 'هويات بصرية', 'موشن بالذكاء الاصطناعي', 'فوتوشوب + AI', 'تحريك الفيديو', 'إعلانات رقمية', 'استشارات'],
  en: ['Image Generation', 'Prompt Engineering', 'Visual Identities', 'AI Motion', 'Photoshop + AI', 'Video Generation', 'Digital Ads', 'Consulting'],
}

export default function About() {
  const { t, lang } = useLanguage()
  const [ref, shown] = useReveal()
  const [ref2, shown2] = useReveal()

  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className={`about-visual reveal ${shown ? 'in' : ''}`} ref={ref}>
          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=900&auto=format&fit=crop" alt="AI creative" />
        </div>
        <div className={`about-text reveal ${shown2 ? 'in' : ''}`} ref={ref2}>
          <span className="eyebrow">{t('about.title')}</span>
          <h3>{lang === 'ar' ? 'مبدع ذكاء اصطناعي بشغف بالتفاصيل' : 'An AI creative obsessed with detail'}</h3>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <div className="skills">
            {SKILLS[lang].map((s) => <span key={s} className="skill">{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
