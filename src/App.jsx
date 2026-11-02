import { useEffect, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import ProjectsDetails from './components/ProjectsDetails.jsx'
import TechnologyDetails from './components/TechnologyDetails.jsx'
import CertificationsDetails from './components/CertificationsDetails.jsx'
import Credentials from './components/Credentials.jsx'
import technologyGroups from './data/technologies.js'
import TechnologyTag from './components/TechnologyTag.jsx'
import Experience from './components/Experience.jsx'
import ExperienceDetails from './components/ExperienceDetails.jsx'
import Contact from './components/Contact.jsx'
import WorkWithMark from './components/WorkWithMark.jsx'

const currentYear = new Date().getFullYear()

function App() {
  const [theme, setTheme] = useState('dark')
  const [currentPage, setCurrentPage] = useState(window.location.hash.slice(1))
  const audioContextRef = useRef(null)
  const previewTechnologies = technologyGroups.slice(0, 3).flatMap((group) => group.technologies).slice(0, 18)
  const technologyRows = [previewTechnologies.slice(0, 9), previewTechnologies.slice(9)]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const syncExperiencePage = () => {
      const page = window.location.hash.slice(1)
      setCurrentPage(page)
      if (['experience-details', 'projects', 'technologies', 'certifications-details'].includes(page)) window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', syncExperiencePage)
    return () => window.removeEventListener('hashchange', syncExperiencePage)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('main.site-content > section')
    if (!sections.length) return

    sections.forEach((section) => section.classList.add('scroll-reveal'))

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          currentObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [currentPage])

  const openPage = (page) => (event) => {
    event.preventDefault()
    window.location.hash = page
  }

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)

    if (!window.AudioContext) return

    const audioContext = audioContextRef.current ?? new window.AudioContext()
    audioContextRef.current = audioContext

    const playSound = () => {
      const oscillator = audioContext.createOscillator()
      const volume = audioContext.createGain()
      const now = audioContext.currentTime

      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(nextTheme === 'light' ? 660 : 440, now)
      volume.gain.setValueAtTime(0.0001, now)
      volume.gain.exponentialRampToValueAtTime(0.08, now + 0.015)
      volume.gain.exponentialRampToValueAtTime(0.0001, now + 0.12)
      oscillator.connect(volume)
      volume.connect(audioContext.destination)
      oscillator.start(now)
      oscillator.stop(now + 0.12)
    }

    if (audioContext.state === 'suspended') {
      audioContext.resume().then(playSound).catch((error) => {
        console.error('Unable to play the theme toggle sound.', error)
      })
      return
    }

    playSound()
  }

  return (
    <>
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="site-content">
        {currentPage === 'experience-details' ? (
          <ExperienceDetails />
        ) : currentPage === 'projects' ? (
          <ProjectsDetails />
        ) : currentPage === 'technologies' ? (
          <TechnologyDetails />
        ) : currentPage === 'certifications-details' ? (
          <CertificationsDetails />
        ) : (
          <>
            <Hero />
            <Experience onViewDetails={openPage('experience-details')} />
            <Projects onViewAll={openPage('projects')} />
            <section className="section-block compact-section" id="technologies">
              <div className="section-heading">
                <h2>Technologies</h2>
                <a className="section-link" href="#technologies" onClick={openPage('technologies')}>View All <span aria-hidden="true">›</span></a>
              </div>
              <div className="technology-list-preview" aria-label="Technologies and skills">
                {technologyRows.map((row, rowIndex) => (
                  <div className="technology-marquee-row" key={`technology-row-${rowIndex}`}>
                    <div className={`technology-marquee-track${rowIndex === 1 ? ' is-reversed' : ''}`}>
                      <div className="technology-marquee-group">
                        {row.map((technology) => <TechnologyTag name={technology} key={technology} />)}
                      </div>
                      <div className="technology-marquee-group" aria-hidden="true">
                        {row.map((technology) => <TechnologyTag name={technology} key={technology} />)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <Credentials />
            <Contact />
          </>
        )}
      </main>
      <footer className="site-footer">
        <span>© {currentYear} All rights reserved.</span>
      </footer>
      <WorkWithMark />
    </>
  )
}

export default App
