import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What I do"
          title="Services"
          text="The two areas I work in, described from the projects I have actually built."
        />
        <div className="services">
          {services.map((s, i) => (
            <Reveal key={s.id} className="card service" delay={i * 120}>
              <span className="service__icon"><Icon name={s.icon} size={26} /></span>
              <h3>{s.title}</h3>
              <p className="service__text">{s.text}</p>
              <ul className="checks">
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <ul className="tags tags--wrap">
                {s.tech.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <div className="service__foot">
                <span>Built in</span>
                {s.projects.map((p) => <a key={p.href} href={p.href}>{p.label}</a>)}
              </div>
            </Reveal>
          ))}
        </div>
        <p className="note services__note">
          Based on my academic and project experience. Details of each project are in the Projects section above.
        </p>
      </div>
    </section>
  )
}
