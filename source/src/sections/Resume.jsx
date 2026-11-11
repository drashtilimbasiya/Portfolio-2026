import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { useState } from 'react'
import { profile } from '../data/profile.js'
import { asset } from '../asset.js'

const pages = [
  { src: 'resume/resume-preview-1.jpg', caption: 'Resume – page 1' },
  { src: 'resume/resume-preview-2.jpg', caption: 'Resume – page 2' },
]

export default function Resume() {
  const [idx, setIdx] = useState(null)
  return (
    <section id="resume" className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="Resume" title="My resume" text="The exact PDF from my resume – unchanged. View it in a new tab or download a copy." />
        <div className="resume">
          <Reveal className="resume__info">
            <div className="card">
              <span className="eyebrow">Drashti_Limbasiya_Resume.pdf</span>
              <h3>{profile.name}</h3>
              <p>{profile.roles.join(' · ')}</p>
              <ul className="checks">
                <li>2 pages · objective, projects, skills, education</li>
                <li>Kotlin, XML, Firebase, PHP, MySQL</li>
                <li>BCA – VNSGU · latest result 9.55 CGPA (Sem 4)</li>
              </ul>
              <div className="btn-row">
                <a className="btn btn--primary" href={asset(profile.resume)} target="_blank" rel="noreferrer"><Icon name="eye" size={18} /> View Resume</a>
                <a className="btn btn--ghost" href={asset(profile.resume)} download="Drashti_Limbasiya_Resume.pdf"><Icon name="download" size={18} /> Download Resume</a>
              </div>
            </div>
          </Reveal>
          <Reveal className="resume__pages" delay={100}>
            {pages.map((p, i) => (
              <button key={p.src} className="resume__page" onClick={() => setIdx(i)} aria-label={`View ${p.caption} larger`}>
                <img src={asset(p.src)} alt={p.caption} loading="lazy" />
                <span className="shot__zoom"><Icon name="zoom" size={18} /></span>
              </button>
            ))}
          </Reveal>
        </div>
      </div>
      <Lightbox items={pages} index={idx} onChange={setIdx} onClose={() => setIdx(null)} openHref={profile.resume} openLabel="Open PDF" />
    </section>
  )
}
