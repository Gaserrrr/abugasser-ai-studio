import React from 'react'
import { useLanguage } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'

const WORKS = [
  { img: 'photo-1677442136019-21780ecad995', cat: { ar: 'توليد صور', en: 'Image Gen' }, title: { ar: 'مشهد سريالي', en: 'Surreal Scene' } },
  { img: 'photo-1618005182384-a83a8bd57fbe', cat: { ar: 'هوية بصرية', en: 'Branding' }, title: { ar: 'هوية علامة تجارية', en: 'Brand Identity' } },
  { img: 'photo-1635079103817-263601327259', cat: { ar: 'إعلان', en: 'Ad' }, title: { ar: 'حملة إعلانية', en: 'Ad Campaign' } },
  { img: 'photo-1620641788421-7a1c342ea42e', cat: { ar: 'فني', en: 'Art' }, title: { ar: 'تجريد رقمي', en: 'Digital Abstraction' } },
  { img: 'photo-1633356122544-f134324a6cee', cat: { ar: 'موشن', en: 'Motion' }, title: { ar: 'لوحة ألوان', en: 'Color Story' } },
  { img: 'photo-1644088379093-d5749c8d3c0d', cat: { ar: 'تصوير', en: 'Photo' }, title: { ar: 'بورتريه مولّد', en: 'Generated Portrait' } },
]

export default function Work() {
  const { t, lang } = useLanguage()
  const [ref, shown] = useReveal()

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t('work.title')}</span>
          <h2 className="section-title gradient-text">{t('work.sub')}</h2>
        </div>
        <div className={`work-grid reveal ${shown ? 'in' : ''}`} ref={ref}>
          {WORKS.map((w, i) => (
            <div className="work-item" key={i}>
              <img src={`https://images.unsplash.com/${w.img}?q=80&w=700&auto=format&fit=crop`} alt={w.title[lang]} loading="lazy" />
              <span className="badge-cat">{w.cat[lang]}</span>
              <div className="meta">
                <span>{w.cat[lang]}</span>
                <h4>{w.title[lang]}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
