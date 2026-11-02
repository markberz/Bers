import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'

function WorkWithMark() {
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    const handlePointerDown = (event) => {
      if (!panelRef.current?.contains(event.target) && !triggerRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isOpen])

  return (
    <div className="work-with-mark">
      {isOpen && (
        <section className="work-popover" id="work-popover" aria-labelledby="work-popover-title" ref={panelRef}>
          <div className="work-popover-heading">
            <div>
              <h2 id="work-popover-title">Work with Mark</h2>
              <p>Have a project in mind? Let’s connect.</p>
            </div>
            <button className="work-popover-close" type="button" aria-label="Close contact options" onClick={() => setIsOpen(false)}>
              <Icon name="close" size={16} />
            </button>
          </div>
          <div className="work-popover-options">
            <a className="work-popover-option" href="https://calendly.com/" target="_blank" rel="noreferrer">
              <span className="work-popover-icon"><Icon name="calendar" size={17} /></span>
              <span><strong>Schedule a Meeting</strong><small>Book a time through Calendly</small></span>
              <Icon name="arrow" size={15} />
            </a>
            <a className="work-popover-option" href="mailto:markberio30@gmail.com">
              <span className="work-popover-icon"><Icon name="mail" size={17} /></span>
              <span><strong>Send an Email</strong><small>Projects &amp; inquiries</small></span>
              <Icon name="arrow" size={15} />
            </a>
            <a className="work-popover-option" href="https://www.linkedin.com/in/mark-berio/" target="_blank" rel="noreferrer">
              <span className="work-popover-icon linkedin-icon"><Icon name="linkedin" size={17} /></span>
              <span><strong>Connect on LinkedIn</strong><small>Networking &amp; opportunities</small></span>
              <Icon name="arrow" size={15} />
            </a>
          </div>
        </section>
      )}
      <button
        className="floating-contact"
        type="button"
        ref={triggerRef}
        aria-expanded={isOpen}
        aria-controls="work-popover"
        onClick={() => setIsOpen((open) => !open)}
      >
        <Icon name="bag" size={16} /> Work with Mark
      </button>
    </div>
  )
}

export default WorkWithMark
