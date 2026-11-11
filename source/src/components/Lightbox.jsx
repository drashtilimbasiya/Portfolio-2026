import { useEffect, useCallback } from 'react'
import Icon from './Icons.jsx'
import { asset } from '../asset.js'

// items: [{ src, caption }]  index: current index (or null when closed)
export default function Lightbox({ items, index, onChange, onClose, openLabel, openHref }) {
  const open = index !== null && index !== undefined
  const count = items.length

  const prev = useCallback(() => onChange((index - 1 + count) % count), [index, count, onChange])
  const next = useCallback(() => onChange((index + 1) % count), [index, count, onChange])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, prev, next, onClose])

  if (!open) return null
  const item = items[index]

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.caption} onClick={onClose}>
      <div className="lightbox__bar" onClick={(e) => e.stopPropagation()}>
        <span className="lightbox__count">{index + 1} / {count}</span>
        <div className="lightbox__actions">
          {openHref && (
            <a className="btn btn--ghost btn--sm" href={asset(openHref)} target="_blank" rel="noreferrer">
              <Icon name="external" size={16} /> {openLabel || 'Open original'}
            </a>
          )}
          <button className="icon-btn" onClick={onClose} aria-label="Close"><Icon name="close" /></button>
        </div>
      </div>
      {count > 1 && (
        <>
          <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous"><Icon name="left" size={26} /></button>
          <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next"><Icon name="right" size={26} /></button>
        </>
      )}
      <figure className="lightbox__fig" onClick={(e) => e.stopPropagation()}>
        <img src={asset(item.src)} alt={item.caption} />
        <figcaption>{item.caption}</figcaption>
      </figure>
    </div>
  )
}
