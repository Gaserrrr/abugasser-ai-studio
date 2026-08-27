import React from 'react'
import { useLanguage } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'

export default function Hero() {
  const { t } = useLanguage()
  const [ref, shown] = useReveal()

  return (
    <header className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="container hero-inner">
        <div className={`reveal ${shown ? 'in' : ''}`} ref={ref}>
          <span className="badge"><span className="dot" /> {t('hero.badge')}</span>
          <h1>{t('hero.title')}</h1>
          <h2 className="gradient-text">{t('hero.subtitle')}</h2>
          <p>{t('hero.desc')}</p>

          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">{t('hero.cta1')} →</a>
            <a href="#contact" className="btn btn-ghost">{t('hero.cta2')}</a>
          </div>

          <div className="hero-stats">
            <div><div className="num">240+</div><div className="lbl">{t('hero.stat1')}</div></div>
            <div><div className="num">95+</div><div className="lbl">{t('hero.stat2')}</div></div>
            <div><div className="num">6+</div><div className="lbl">{t('hero.stat3')}</div></div>
          </div>
        </div>

        <div className={`hero-card reveal ${shown ? 'in' : ''}`}>
          <img src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=900&auto=format&fit=crop" alt="AI art" />
          <span className="tag">AI / Generated</span>
          <div className="float-chip c1">🎨 Midjourney</div>
          <div className="float-chip c2">✨ Stable Diffusion</div>
          <div className="overlay" />
        </div>
      </div>
    </header>
  )
}
