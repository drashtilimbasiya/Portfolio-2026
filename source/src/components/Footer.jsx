import Icon from './Icons.jsx'
import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <a href="#home" className="logo">
            <span className="logo__mark">DL</span>
            <span className="logo__text">{profile.name}</span>
          </a>
          <p className="footer__tag">
            Aspiring Android Application Developer &amp; Web Developer, building Android apps with Kotlin &amp; Firebase and web apps with PHP &amp; MySQL.
          </p>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub"><Icon name="github" /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn"><Icon name="linkedin" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email" title="Email"><Icon name="mail" /></a>
            <a href={profile.whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" title="WhatsApp"><Icon name="whatsapp" /></a>
          </div>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#journey">Journey</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#certifications">Certificates</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a href={profile.whatsappHref} target="_blank" rel="noreferrer">WhatsApp · {profile.phone}</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li>{profile.location}</li>
          </ul>
        </div>
      </div>
      <div className="container footer__bar">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}
