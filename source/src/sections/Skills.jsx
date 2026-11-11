import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'
import { skillGroups, knowledge } from '../data/profile.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading eyebrow="Technical skills" title="My tech stack" text="Tools and technologies I use, as listed on my resume." />
        <div className="skills">
          {skillGroups.map((g, i) => (
            <Reveal className="card skill" key={g.title} delay={i * 70}>
              <div className="skill__head">
                <span className="skill__icon"><Icon name={g.icon} size={22} /></span>
                <h3>{g.title}</h3>
              </div>
              <ul className="tags tags--wrap">
                {g.items.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="knowledge">
          <h3 className="mini-title">Development knowledge</h3>
          <div className="knowledge__grid">
            {knowledge.map((k) => (
              <div key={k.label} className="knowledge__item">
                <strong>{k.label}</strong>
                <p>{k.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
