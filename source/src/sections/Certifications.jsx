import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { certificates } from '../data/certificates.js'
import { asset } from '../asset.js'

export default function Certifications() {
  const [idx, setIdx] = useState(null)
  const items = certificates.map((c) => ({ src: c.preview, caption: `${c.title} – ${c.issuer}` }))
  const current = idx !== null ? certificates[idx] : null

  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Certifications"
          title="Certificates & courses"
          text="Original certificates, shown exactly as issued. Click any card to view it larger or open the original file."
        />
        <div className="certs">
          {certificates.map((c, i) => (
            <Reveal className="card cert" key={c.id} delay={(i % 3) * 80}>
              <button className="cert__img" onClick={() => setIdx(i)} aria-label={`View ${c.title} certificate`}>
                <img src={asset(c.preview)} alt={`${c.title} certificate`} loading="lazy" />
                <span className="shot__zoom"><Icon name="zoom" size={18} /></span>
              </button>
              <div className="cert__body">
                <span className="cert__date">{c.date}</span>
                <h3>{c.title}</h3>
                <p className="cert__issuer">{c.issuer}</p>
                <p className="cert__note">{c.note}</p>
                <div className="btn-row">
                  <button className="btn btn--ghost btn--sm" onClick={() => setIdx(i)}><Icon name="eye" size={16} /> View</button>
                  <a className="btn btn--ghost btn--sm" href={asset(c.original)} target="_blank" rel="noreferrer">
                    <Icon name="external" size={16} /> Original {c.kind}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Lightbox
        items={items}
        index={idx}
        onChange={setIdx}
        onClose={() => setIdx(null)}
        openHref={current?.original}
        openLabel={current ? `Open original ${current.kind}` : undefined}
      />
    </section>
  )
}
