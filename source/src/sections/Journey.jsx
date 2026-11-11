import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { useState } from 'react'
import { education, internship } from '../data/profile.js'
import { asset } from '../asset.js'

export default function Journey() {
  const [open, setOpen] = useState(null)
  return (
    <section id="journey" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="My journey"
          title="Education & experience"
          text="Academic results from my resume, plus my internship at CareerSahi."
        />

        <div className="timeline">
          <Reveal className="tl-item">
            <span className="tl-dot"><Icon name="briefcase" size={16} /></span>
            <div className="card tl-card tl-card--feature">
              <span className="tl-period">{internship.period}</span>
              <h3>{internship.title}</h3>
              <p className="tl-place">{internship.company}</p>
              <div className="chips">
                <span>{internship.duration}</span>
                <span>Grade {internship.grade}</span>
                <span>ID: {internship.credentialId}</span>
              </div>
              <blockquote>“{internship.quote}” <cite>– from the internship certificate</cite></blockquote>
              <button className="link-btn" onClick={() => setOpen(0)}>
                <Icon name="eye" size={16} /> View internship certificate
              </button>
            </div>
          </Reveal>

          {education.map((e, i) => (
            <Reveal className="tl-item" key={e.title} delay={(i + 1) * 80}>
              <span className="tl-dot"><Icon name="cap" size={16} /></span>
              <div className="card tl-card">
                <span className="tl-period">{e.period}{e.status ? ` · ${e.status}` : ''}</span>
                <h3>{e.title}</h3>
                <p className="tl-place">{e.place}</p>
                <div className="chips">
                  {e.details.map((d) => (
                    <span key={d.label}>{d.label}: <b>{d.value}</b></span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Lightbox
        items={[{ src: internship.certificate, caption: 'Internship Certificate – CareerSahi EdTech Private Limited' }]}
        index={open}
        onChange={setOpen}
        onClose={() => setOpen(null)}
        openHref={internship.original}
      />
    </section>
  )
}
