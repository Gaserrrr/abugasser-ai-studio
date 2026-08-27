import React from 'react'
import { useLanguage } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'

const ICONS = ['🖼️', '🎯', '✍️', '📣', '🛠️', '🎓']

export default function Services() {
  const { t } = useLanguage()
  const items = t('services.items')
  const [ref, shown] = useReveal()

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t('services.title')}</span>
          <h2 className="section-title gradient-text">{t('services.sub')}</h2>
        </div>
        <div className={`cards reveal ${shown ? 'in' : ''}`} ref={ref}>
          {items.map((it, i) => (
            <div className="card" key={i}>
              <div className="ico">{ICONS[i % ICONS.length]}</div>
              <h4>{it.title}</h4>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
