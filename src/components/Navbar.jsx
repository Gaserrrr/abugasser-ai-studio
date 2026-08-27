import React, { useEffect, useState } from 'react'
import { useLanguage } from '../i18n.jsx'

export default function Navbar() {
  const { t, toggle, lang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['home', '#home'], ['about', '#about'], ['services', '#services'],
    ['work', '#work'], ['promptStore', '#store'], ['insights', '#insights'], ['contact', '#contact'],
  ]

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand">
          <span className="logo">أ</span>
          <span>{lang === 'ar' ? 'أبو جاسر' : 'Abu Gasser'}</span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([k, href]) => (
            <li key={k}><a href={href} onClick={() => setOpen(false)}>{t(`nav.${k}`)}</a></li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="lang-btn" onClick={toggle}>{lang === 'ar' ? 'EN' : 'ع'}</button>
          <button className="menu-toggle" onClick={() => setOpen((o) => !o)} aria-label="menu">☰</button>
        </div>
      </div>
    </nav>
  )
}
