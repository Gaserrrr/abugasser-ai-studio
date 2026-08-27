import React from 'react'
import { useLanguage } from '../i18n.jsx'

export default function Footer() {
  const { t, lang } = useLanguage()
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">
          <span className="logo">أ</span>
          <span>{lang === 'ar' ? 'أبو جاسر الجزار' : 'Abu Gasser El-Gazzar'}</span>
        </div>
        <div className="copy">© {year} {t('footer.rights')}. {t('footer.made')} Abu Gasser.</div>
      </div>
    </footer>
  )
}
