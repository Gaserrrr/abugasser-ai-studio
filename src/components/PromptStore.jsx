import React, { useMemo, useState } from 'react'
import { useLanguage } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'

const CATS = {
  ar: { img: 'صور', brand: 'هوية', video: 'فيديو', photo: 'تصوير', social: 'سوشيال', write: 'كتابة' },
  en: { img: 'Images', brand: 'Branding', video: 'Video', photo: 'Photo', social: 'Social', write: 'Writing' },
}

const PROMPTS = [
  { cat: 'img', premium: false, title: { ar: 'بورتريه سينمائي', en: 'Cinematic Portrait' }, desc: { ar: 'إضاءة احترافية واقعية', en: 'Pro realistic lighting' }, tags: ['portrait', 'cinematic'], prompt: { ar: 'بورتريه سينمائي بإضاءة رامبراندت، تفاصيل دقيقة، عدسة 85mm، واقعي فائق، ألوان دافئة —ar 1:1', en: 'Cinematic portrait, Rembrandt lighting, ultra detailed, 85mm lens, photorealistic, warm tones --ar 1:1' } },
  { cat: 'img', premium: true, title: { ar: 'مشهد خيالي', en: 'Fantasy Scene' }, desc: { ar: 'مدينة طافية في السحب', en: 'Floating city in clouds' }, tags: ['fantasy', 'concept'], prompt: { ar: 'مدينة طافية في السحب، أسلوب فن رقمي، ألوان نيون، ضوء سحري، 8k، اتقان عالي —ar 16:9', en: 'Floating city in the clouds, digital art style, neon colors, magical light, 8k, highly detailed --ar 16:9' } },
  { cat: 'brand', premium: false, title: { ar: 'شعار تك', en: 'Tech Logo' }, desc: { ar: 'شعار بسيط لعلامة تقنية', en: 'Minimal tech logo' }, tags: ['logo', 'flat'], prompt: { ar: 'شعار بسيط لعلامة تقنية، أسلوب مسطح، تدرج بنفسجي، خلفية شفافة، متجه نظيف', en: 'Minimal tech logo, flat style, purple gradient, transparent background, clean vector' } },
  { cat: 'brand', premium: true, title: { ar: 'هوية قهوة فاخرة', en: 'Luxury Coffee Brand' }, desc: { ar: 'هوية كاملة بمظهر راقٍ', en: 'Full premium identity' }, tags: ['branding', 'packaging'], prompt: { ar: 'هوية بصرية كاملة لماركة قهوة فاخرة، ألوان ترابية، طباعة لينوتيب، باكيجينج أنيق، لوك بوك احترافي', en: 'Full visual identity for a luxury coffee brand, earthy palette, linotype, elegant packaging, professional lookbook' } },
  { cat: 'video', premium: true, title: { ar: 'حلقة منتج متحركة', en: 'Animated Product Loop' }, desc: { ar: 'فيديو قصير لمعدات', en: 'Short gear video' }, tags: ['motion', 'loop'], prompt: { ar: 'حلقة فيديو سلسة لمنتج تك، إضاءة ستوديو، حركة بطيئة، خلفية متدرجة، 4k، 8 ثواني', en: 'Smooth looping video of a tech product, studio lighting, slow motion, gradient bg, 4k, 8 seconds' } },
  { cat: 'photo', premium: false, title: { ar: 'تصوير طعام', en: 'Food Photography' }, desc: { ar: 'إضاءة نافذة طبيعية', en: 'Natural window light' }, tags: ['food', 'studio'], prompt: { ar: 'تصوير طعام احترافي، إضاءة نافذة طبيعية، خلفية خشبية، عمق مجال ضحل، واقعي فائق', en: 'Professional food photography, natural window light, wooden background, shallow depth of field, ultra realistic' } },
  { cat: 'social', premium: false, title: { ar: 'بوست إنستجرام', en: 'Instagram Post' }, desc: { ar: 'تصميم لافت للنظر', en: 'Eye-catching design' }, tags: ['social', 'post'], prompt: { ar: 'تصميم بوست إنستجرام لافت، تدرجات عصرية، نص كبير، مساحات بيضاء، أسلوب مينيمال عصري', en: 'Eye-catching Instagram post design, modern gradients, big bold text, white space, minimal modern style' } },
  { cat: 'write', premium: true, title: { ar: 'وصف منتج', en: 'Product Copy' }, desc: { ar: 'نص تسويقي مقنع', en: 'Persuasive copy' }, tags: ['copywriting'], prompt: { ar: 'اكتب وصف منتج تسويقي مقنع لساعة ذكية، ركّز على الفخامة وسهولة الاستخدام، بأسلوب يجذب الشباب، 120 كلمة', en: 'Write persuasive product copy for a smartwatch, focus on luxury and ease of use, youth-friendly tone, 120 words' } },
]

export default function PromptStore() {
  const { t, lang } = useLanguage()
  const [ref, shown] = useReveal()
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('all')
  const [active, setActive] = useState(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PROMPTS.filter((p) => {
      const matchCat = cat === 'all' || p.cat === cat
      const txt = (p.title[lang] + ' ' + p.tags.join(' ') + ' ' + p.desc[lang]).toLowerCase()
      const matchQ = !q || txt.includes(q)
      return matchCat && matchQ
    })
  }, [query, cat, lang])

  const copy = (text) => navigator.clipboard?.writeText(text)

  return (
    <section className="section" id="store">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t('store.title')}</span>
          <h2 className="section-title gradient-text">{t('store.sub')}</h2>
        </div>

        <div className={`store-controls reveal ${shown ? 'in' : ''}`} ref={ref}>
          <input
            className="store-search"
            type="text"
            placeholder={t('store.search')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="chips">
            <button className={`chip ${cat === 'all' ? 'on' : ''}`} onClick={() => setCat('all')}>{t('store.all')}</button>
            {Object.entries(CATS[lang]).map(([k, label]) => (
              <button key={k} className={`chip ${cat === k ? 'on' : ''}`} onClick={() => setCat(k)}>{label}</button>
            ))}
          </div>
        </div>

        <div className="store-grid">
          {filtered.map((p, i) => (
            <button key={i} className="store-card" onClick={() => setActive(p)}>
              <div className="store-card-top">
                <span className={`pill ${p.premium ? 'premium' : 'free'}`}>{p.premium ? t('store.premium') : t('store.free')}</span>
                <span className="cat-tag">{CATS[lang][p.cat]}</span>
              </div>
              <h4>{p.title[lang]}</h4>
              <p>{p.desc[lang]}</p>
              <div className="store-card-foot">
                <span className="copy-mini">{t('store.copy')}</span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && <p className="empty">{lang === 'ar' ? 'لا توجد نتائج' : 'No results'}</p>}
      </div>

      {active && (
        <div className="modal-overlay" onClick={() => setActive(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActive(null)}>✕</button>
            <div className="store-card-top">
              <span className={`pill ${active.premium ? 'premium' : 'free'}`}>{active.premium ? t('store.premium') : t('store.free')}</span>
              <span className="cat-tag">{CATS[lang][active.cat]}</span>
            </div>
            <h3>{active.title[lang]}</h3>
            <p className="modal-desc">{active.desc[lang]}</p>
            <div className="ptext">{active.prompt[lang]}</div>
            <div className="modal-tags">{t('store.tags')}: {active.tags.map((x) => `#${x}`).join(' ')}</div>
            <button className="btn btn-primary" style={{ marginTop: 18 }} onClick={() => copy(active.prompt[lang])}>{t('store.copy')}</button>
          </div>
        </div>
      )}
    </section>
  )
}
