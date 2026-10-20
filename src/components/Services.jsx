import React from 'react'
import { useLanguage } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'
import SectionHead from './SectionHead.jsx'

const ICONS = ['🖼️', '🎯', '✍️', '📣', '🛠️', '🎓']

export default function Services() {
  const { t } = useLanguage()
  const items = t('services.items')
  const [ref, shown] = useReveal()

  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead eyebrow={t('services.title')} title={t('services.sub')} />
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
