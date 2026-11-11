import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'
import useActiveSection from '../hooks/useActiveSection.js'
import { profile } from '../data/profile.js'
import { asset } from '../asset.js'

const links = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'certifications', label: 'Certificates' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]
const ids = ['home', ...links.map((l) => l.id)]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 16)
      const max = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--progress', max > 0 ? `${Math.min(100, (window.scrollY / max) * 100)}%` : '0%')
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <span className="nav__progress" aria-hidden="true" />
      <div className="container nav__inner">
        <a href="#home" className="logo" onClick={go} aria-label="Home">
          <span className="logo__mark">DL</span>
          <span className="logo__text">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={go} className={active === l.id ? 'is-active' : ''}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__cta">
          <a className="btn btn--ghost btn--sm" href={asset(profile.resume)} target="_blank" rel="noreferrer">
            Resume
          </a>
          <a className="btn btn--primary btn--sm" href="#contact" onClick={go}>
            Hire Me
          </a>
        </div>

        <button className="nav__toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  )
}
