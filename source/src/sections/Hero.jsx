import Icon from '../components/Icons.jsx'
import { profile, heroTags } from '../data/profile.js'
import { asset } from '../asset.js'
import useTyped from '../hooks/useTyped.js'

export default function Hero() {
  const { text, reduced } = useTyped(profile.roles)
  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="pill hero__in" style={{ '--i': 0 }}><span className="pill__dot" /> Open to entry-level opportunities</span>
          <p className="hero__hello hero__in" style={{ '--i': 1 }}>Hi, I&apos;m</p>
          <h1 className="hero__in" style={{ '--i': 2 }}>
            {profile.name}
            <span className="gradient-text">{profile.role}</span>
          </h1>
          <p className="hero__typed hero__in" style={{ '--i': 3 }} aria-hidden="true">
            <span className="hero__typed-label">&gt; focus:</span>{' '}
            {reduced ? (
              <span className="hero__typed-text">{profile.roles.join(' · ')}</span>
            ) : (
              <><span className="hero__typed-text">{text}</span><span className="caret" /></>
            )}
          </p>
          <p className="hero__lead hero__in" style={{ '--i': 4 }}>
            BCA student building native Android applications with Kotlin, XML &amp; Firebase, and web applications with
            PHP, MySQL, HTML, CSS &amp; JavaScript. Passionate about turning real-world workflows into clean, usable apps.
          </p>
          <div className="hero__cta hero__in" style={{ '--i': 5 }}>
            <a className="btn btn--primary" href="#projects">View My Work <Icon name="arrow" size={18} /></a>
            <a className="btn btn--ghost" href={asset(profile.resume)} download="Drashti_Limbasiya_Resume.pdf">
              <Icon name="download" size={18} /> Download Resume
            </a>
          </div>
          <ul className="tags hero__in" style={{ '--i': 6 }}>
            {heroTags.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="socials socials--hero hero__in" style={{ '--i': 7 }}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub"><Icon name="github" size={20} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn"><Icon name="linkedin" size={20} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email" title="Email"><Icon name="mail" size={20} /></a>
            <a href={profile.whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" title="WhatsApp"><Icon name="whatsapp" size={20} /></a>
          </div>
        </div>

        <div className="hero__card" aria-hidden="true">
          <div className="code hero__in hero__in--card" style={{ '--i': 3 }}>
            <div className="code__bar">
              <i /><i /><i />
              <span>Developer.kt</span>
            </div>
            <pre>
<span className="c-k">class</span> <span className="c-t">Developer</span> {'{'}
{'\n  '}<span className="c-k">val</span> name = <span className="c-s">&quot;{profile.name}&quot;</span>
{'\n  '}<span className="c-k">val</span> role =
{'\n    '}<span className="c-s">&quot;{profile.role}&quot;</span>
{'\n  '}<span className="c-k">val</span> studying = <span className="c-s">&quot;BCA · VNSGU&quot;</span>
{'\n  '}<span className="c-k">val</span> android = <span className="c-f">listOf</span>(
{'\n    '}<span className="c-s">&quot;Kotlin&quot;</span>, <span className="c-s">&quot;XML&quot;</span>, <span className="c-s">&quot;Firebase&quot;</span>
{'\n  '})
{'\n  '}<span className="c-k">val</span> web = <span className="c-f">listOf</span>(
{'\n    '}<span className="c-s">&quot;PHP&quot;</span>, <span className="c-s">&quot;MySQL&quot;</span>, <span className="c-s">&quot;HTML&quot;</span>,
{'\n    '}<span className="c-s">&quot;CSS&quot;</span>, <span className="c-s">&quot;JavaScript&quot;</span>
{'\n  '})
{'\n'}{'}'}
            </pre>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About"><Icon name="down" size={20} /></a>
    </section>
  )
}
