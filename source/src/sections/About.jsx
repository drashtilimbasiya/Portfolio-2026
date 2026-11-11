import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { profile, aboutFacts, interests, competencies } from '../data/profile.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="About me" title="Learning by building real applications" />
        <div className="about">
          <Reveal className="about__text">
            <p>{profile.objective}</p>
            <h3 className="mini-title">Core competencies</h3>
            <ul className="checks">
              {competencies.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </Reveal>
          <Reveal className="about__side" delay={120}>
            <div className="card facts">
              {aboutFacts.map((f) => (
                <div className="fact" key={f.label}>
                  <span>{f.label}</span>
                  <strong>{f.value}</strong>
                </div>
              ))}
            </div>
            <div className="card">
              <h3 className="mini-title">Professional interests</h3>
              <ul className="tags tags--wrap">
                {interests.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
