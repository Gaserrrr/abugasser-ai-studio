import React from 'react'
import { useReveal } from '../useReveal.js'

export default function SectionHead({ eyebrow, title }) {
  const [ref, shown] = useReveal()

  return (
    <div className={`section-head reveal ${shown ? 'in' : ''}`} ref={ref}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title gradient-text">{title}</h2>
    </div>
  )
}
