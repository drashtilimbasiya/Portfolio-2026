import { useRef, useState } from 'react'
import Icon from './Icons.jsx'
import Lightbox from './Lightbox.jsx'
import { asset } from '../asset.js'
import { shotFill } from '../data/shotFill.js'

// layout "phone-fixed": same strip, but every phone frame has identical outer size (image is contained, never cropped/stretched)
// layout "phone": horizontal strip of phone screenshots (fixed height, natural width = no distortion)
// layout "web":   responsive grid of desktop screenshots (natural aspect ratio)
// Phone screen is 198 x 440 (ratio 0.45), exactly like the Patel Auto Garage screens. A screenshot with a different ratio is shown
// complete (never cropped or stretched); the leftover strips are coloured with the screenshot's own edge colours so the screen looks continuous.
// fill = [ratio, top, bottom, left, right]
const SCREEN_RATIO = 198 / 440
const fillBackground = (f) =>
  f[0] >= SCREEN_RATIO
    ? f[2] // screenshot is anchored to the top of the screen; the area below continues in its bottom-edge colour
    : `linear-gradient(to right, ${f[3]} 50%, ${f[4]} 50%)`

export default function Gallery({ shots, layout, alt }) {
  const [idx, setIdx] = useState(null)
  const strip = useRef(null)

  const scrollBy = (dir) => {
    const el = strip.current
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <>
      {layout === 'phone' || layout === 'phone-fixed' ? (
        <div className="strip-wrap">
          <button className="strip__btn strip__btn--l" onClick={() => scrollBy(-1)} aria-label="Scroll left"><Icon name="left" /></button>
          <div className="strip" ref={strip}>
            {shots.map((s, i) => {
              const fixed = layout === 'phone-fixed'
              const fill = fixed ? shotFill[s.src] : null
              return (
                <figure className={`shot shot--phone ${fixed ? 'shot--fixed' : ''} ${s.shrink ? 'shot--shrink' : ''}`} key={s.src}>
                  <button className="shot__btn" onClick={() => setIdx(i)} aria-label={`View ${s.caption}`}>
                    {fixed ? (
                      <span
                        className="shot__screen"
                        style={fill ? { background: fillBackground(fill) } : undefined}
                      >
                        {!fill && <img className="shot__fill" src={asset(s.src)} alt="" aria-hidden="true" loading="lazy" />}
                        <img className="shot__img" src={asset(s.src)} alt={`${alt}: ${s.caption}`} loading="lazy" style={fill && fill[0] > SCREEN_RATIO + 0.002 ? { objectPosition: 'top center' } : undefined} />
                      </span>
                    ) : (
                      <img src={asset(s.src)} alt={`${alt}: ${s.caption}`} loading="lazy" />
                    )}
                    <span className="shot__zoom"><Icon name="zoom" size={18} /></span>
                  </button>
                  <figcaption>{s.caption}</figcaption>
                </figure>
              )
            })}
          </div>
          <button className="strip__btn strip__btn--r" onClick={() => scrollBy(1)} aria-label="Scroll right"><Icon name="right" /></button>
        </div>
      ) : (
        <div className="grid-web">
          {shots.map((s, i) => (
            <figure className="shot shot--web" key={s.src}>
              <button className="shot__btn" onClick={() => setIdx(i)} aria-label={`View ${s.caption}`}>
                <img src={asset(s.src)} alt={`${alt}: ${s.caption}`} loading="lazy" />
                <span className="shot__zoom"><Icon name="zoom" size={18} /></span>
              </button>
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
      <Lightbox items={shots} index={idx} onChange={setIdx} onClose={() => setIdx(null)} />
    </>
  )
}
