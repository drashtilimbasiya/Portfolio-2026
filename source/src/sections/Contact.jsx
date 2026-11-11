import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // No backend: the form opens the visitor's email app with the message pre-filled.
  const submit = (e) => {
    e.preventDefault()
    const subject = form.subject.trim() || `Portfolio enquiry from ${form.name}`
    const body = `${form.message}\n\n— ${form.name}\n${form.email}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const items = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'whatsapp', label: 'WhatsApp', value: `Chat on WhatsApp · ${profile.phone}`, href: profile.whatsappHref, tone: 'wa' },
    { icon: 'linkedin', label: 'LinkedIn', value: 'drashti-limbasiya-412177321', href: profile.linkedin },
    { icon: 'github', label: 'GitHub', value: 'drashtilimbasiya', href: profile.github },
    { icon: 'pin', label: 'Location', value: profile.location },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading eyebrow="Contact me" title="Let's work together" text="Looking for an entry-level Android or web developer? Send a message by email or chat with me directly on WhatsApp." />
        <div className="contact">
          <Reveal className="contact__list">
            <div className="code code--contact" aria-hidden="true">
              <div className="code__bar"><i /><i /><i /><span>Contact.kt</span></div>
              <pre>
<span className="c-k">fun</span> <span className="c-f">getInTouch</span>() {'{'}
{'\n  '}<span className="c-k">val</span> roles = <span className="c-f">listOf</span>(
{'\n    '}<span className="c-s">&quot;Android Application Developer&quot;</span>,
{'\n    '}<span className="c-s">&quot;Web Developer&quot;</span>
{'\n  '})
{'\n  '}<span className="c-k">val</span> looking = <span className="c-s">&quot;entry-level opportunities&quot;</span>
{'\n  '}<span className="c-k">val</span> reachMe = <span className="c-f">listOf</span>(<span className="c-s">&quot;Email&quot;</span>, <span className="c-s">&quot;WhatsApp&quot;</span>)
{'\n'}{'}'}
              </pre>
            </div>
            {items.map((it) => {
              const inner = (
                <>
                  <span className="contact__icon"><Icon name={it.icon} size={20} /></span>
                  <span><small>{it.label}</small><strong>{it.value}</strong></span>
                </>
              )
              return it.href ? (
                <a key={it.label} className={`card contact__item ${it.tone ? `contact__item--${it.tone}` : ''}`} href={it.href} target={it.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{inner}</a>
              ) : (
                <div key={it.label} className="card contact__item">{inner}</div>
              )
            })}
          </Reveal>

          <Reveal className="card contact__form" delay={100}>
            <form onSubmit={submit}>
              <div className="field-row">
                <label>Name<input required value={form.name} onChange={set('name')} placeholder="Your name" /></label>
                <label>Email<input required type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" /></label>
              </div>
              <label>Subject<input required value={form.subject} onChange={set('subject')} placeholder="What is this about?" /></label>
              <label>Message<textarea required rows="5" value={form.message} onChange={set('message')} placeholder="Tell me about the opportunity…" /></label>
              <div className="btn-row">
                <button className="btn btn--primary" type="submit"><Icon name="send" size={18} /> Send Message</button>
                <a className="btn btn--wa" href={profile.whatsappHref} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18} /> Chat on WhatsApp</a>
              </div>
              <p className="note">Sending opens your email app with the message ready to send to {profile.email}.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
