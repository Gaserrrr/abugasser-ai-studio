import React from 'react'
import { useLanguage } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'

const ARTICLES = [
  { id: 1, cat: { ar: 'برومبتات', en: 'Prompts' }, date: '2026-08-20', read: 4, title: { ar: 'كيف تكتب برومبت يُنتج نتائج دقيقة', en: 'How to write prompts that nail the result' }, excerpt: { ar: 'خمس تقنيات عملية لهندسة البرومبتات بدون إعادة المحاولة.', en: 'Five practical techniques for prompt engineering without retries.' } },
  { id: 2, cat: { ar: 'هوية بصرية', en: 'Branding' }, date: '2026-08-12', read: 6, title: { ar: 'بناء هوية موحّدة بالذكاء الاصطناعي', en: 'Building a consistent identity with AI' }, excerpt: { ar: 'من الشعار إلى لوحة الألوان: الحفاظ على الاتساق عبر التوليد.', en: 'From logo to palette: keeping consistency across generation.' } },
  { id: 3, cat: { ar: 'فيديو', en: 'Video' }, date: '2026-08-03', read: 5, title: { ar: 'توليد الفيديو القصير للسوشيال ميديا', en: 'Short video generation for social' }, excerpt: { ar: 'مسار عمل عملي لإنتاج محتوى فيديو جذاب بسرعة.', en: 'A practical workflow to produce engaging video fast.' } },
]

export default function Insights() {
  const { t, lang } = useLanguage()
  const [ref, shown] = useReveal()
  const fmt = (d) => new Date(d).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })

  return (
    <section className="section" id="insights">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t('insights.title')}</span>
          <h2 className="section-title gradient-text">{t('insights.sub')}</h2>
        </div>
        <div className={`cards reveal ${shown ? 'in' : ''}`} ref={ref}>
          {ARTICLES.map((a) => (
            <article className="card ins-card" key={a.id}>
              <div className="ins-meta">
                <span className="cat-tag">{a.cat[lang]}</span>
                <span className="ins-date">{fmt(a.date)} • {a.read} {t('insights.min')}</span>
              </div>
              <h4>{a.title[lang]}</h4>
              <p>{a.excerpt[lang]}</p>
              <a className="ins-link" href="#contact">{t('insights.read')} →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
