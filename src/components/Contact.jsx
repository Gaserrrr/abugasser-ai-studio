import React, { useState } from 'react'
import { useLanguage } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'

const WHATSAPP = '201002711494'

export default function Contact() {
  const { t, lang } = useLanguage()
  const [ref, shown] = useReveal()
  const [ref2, shown2] = useReveal()
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 2600)
    e.target.reset()
  }

  const waMsg = lang === 'ar' ? 'مرحباً أبو جاسر، حابب أتعرف على خدماتك' : 'Hi Abu Gasser, I would like to know about your services'
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMsg)}`

  return (
    <section className="section" id="contact">
      <div className="container contact-wrap">
        <div className={`contact-info reveal ${shown ? 'in' : ''}`} ref={ref}>
          <span className="eyebrow">{t('contact.title')}</span>
          <h3 className="gradient-text">{t('contact.sub')}</h3>
          <div className="contact-list">
            <a href={waLink} target="_blank" rel="noreferrer"><span className="ci">💬</span> {t('contact.whatsapp')}</a>
            <a href="mailto:memogazar049@gmail.com"><span className="ci">✉️</span> memogazar049@gmail.com</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><span className="ci">📸</span> @abugasser.ai</a>
          </div>
        </div>

        <div className={`contact-card reveal ${shown2 ? 'in' : ''}`} ref={ref2}>
          <form onSubmit={onSubmit}>
            <div className="field">
              <label>{t('contact.name')}</label>
              <input type="text" required placeholder="—" />
            </div>
            <div className="field">
              <label>{t('contact.email')}</label>
              <input type="email" required placeholder="—" />
            </div>
            <div className="field">
              <label>{t('contact.msg')}</label>
              <textarea required placeholder="—" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              {sent ? (lang === 'ar' ? 'تم الإرسال ✓' : 'Sent ✓') : t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
