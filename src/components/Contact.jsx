import Icon from './Icon.jsx'

function Contact() {
  return (
    <section className="contact-section page-width" id="contact">
      <div className="contact-main">
        <div className="contact-copy">
          <h2>Let’s work together.</h2>
          <p>I’m always interested in thoughtful projects and good collaborations. If you have an idea in mind, I’d love to hear about it.</p>
        </div>
        <div className="contact-options">
          <a className="contact-option" href="mailto:markberio30@gmail.com">
            <span className="contact-icon"><Icon name="mail" size={17} /></span>
            <span><small>EMAIL</small><strong>markberio30@gmail.com</strong></span>
            <Icon name="arrow" size={15} />
          </a>
          <a className="contact-option" href="https://calendly.com/markberio30/30min">
            <span className="contact-icon"><span aria-hidden="true">▦</span></span>
            <span><small>LET’S TALK</small><strong>Start a meeting</strong></span>
            <Icon name="arrow" size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
