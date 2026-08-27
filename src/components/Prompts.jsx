import React, { useState } from 'react'
import { useLanguage } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'

const PROMPTS = [
  {
    title: { ar: 'بورتريه سينمائي', en: 'Cinematic Portrait' },
    text: { ar: 'بورتريه سينمائي بإضاءة رامبراندت، تفاصيل دقيقة، عدسة 85mm، واقعي فائق، ألوان دافئة —ar 1:1', en: 'Cinematic portrait, Rembrandt lighting, ultra detailed, 85mm lens, photorealistic, warm tones --ar 1:1' },
  },
  {
    title: { ar: 'مشهد خيالي', en: 'Fantasy Scene' },
    text: { ar: 'مدينة طافية في السحب، أسلوب فن رقمي، ألوان نيون، ضوء سحري، 8k، اتقان عالي —ar 16:9', en: 'Floating city in the clouds, digital art style, neon colors, magical light, 8k, highly detailed --ar 16:9' },
  },
  {
    title: { ar: 'هوية علامة تجارية', en: 'Brand Identity' },
    text: { ar: 'شعار بسيط لعلامة تقنية، أسلوب مسطح، تدرج بنفسجي، خلفية شفافة، متجه نظيف', en: 'Minimal tech logo, flat style, purple gradient, transparent background, clean vector' },
  },
  {
    title: { ar: 'منتج إعلاني', en: 'Product Ad' },
    text: { ar: 'صورة منتج لعطر فاخر على رخام، إضاءة ستوديو، انعكاسات، تصوير ماكرو، تجاري فاخر', en: 'Product shot of luxury perfume on marble, studio lighting, reflections, macro, commercial' },
  },
]

export default function Prompts() {
  const { t, lang } = useLanguage()
  const [ref, shown] = useReveal()
  const [copied, setCopied] = useState(null)

  const copy = (idx, text) => {
    navigator.clipboard?.writeText(text)
    setCopied(idx)
    setTimeout(() => setCopied(null), 1600)
  }

  return (
    <section className="section" id="prompts">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t('prompts.title')}</span>
          <h2 className="section-title gradient-text">{t('prompts.sub')}</h2>
        </div>
        <div className={`prompt-grid reveal ${shown ? 'in' : ''}`} ref={ref}>
          {PROMPTS.map((p, i) => (
            <div className="prompt" key={i}>
              <div className="ptitle">
                <strong>{p.title[lang]}</strong>
                <button className={`copy-btn ${copied === i ? 'done' : ''}`} onClick={() => copy(i, p.text[lang])}>
                  {copied === i ? `✓ ${t('prompts.copied')}` : t('prompts.copy')}
                </button>
              </div>
              <div className="ptext">{p.text[lang]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
