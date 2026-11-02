import { useId, useRef } from 'react'
import certifications from '../data/certifications.js'
import Icon from './Icon.jsx'

function CertificationItem({ item, detailed = false }) {
  const dialogRef = useRef(null)
  const dialogId = useId()
  const openCertificate = () => dialogRef.current?.showModal()

  const certificatePreview = (
    <button
      className="certificate-image-link"
      type="button"
      aria-label={`View ${item.title} certificate`}
      aria-haspopup="dialog"
      aria-controls={dialogId}
      onClick={openCertificate}
    >
      <img className="certificate-image" src={item.image} alt="" />
    </button>
  )

  return (
    <article className={`certification-item${detailed ? ' is-detailed' : ''}`}>
      <p className="certification-date">{item.date}</p>
      {detailed && certificatePreview}
      <div className="certification-copy">
        <h3>{item.title}</h3>
        <p>{item.provider}</p>
        {(detailed || item.type === 'professional') && (
          <a
            className="credential-link"
            href={item.url ?? item.image}
            target="_blank"
            rel="noreferrer"
          >
            VIEW CREDENTIAL <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
      {!detailed && certificatePreview}
      <dialog
        className="certificate-dialog"
        id={dialogId}
        aria-label={`${item.title} certificate`}
        ref={dialogRef}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close()
        }}
      >
        <button
          className="certificate-dialog-close"
          type="button"
          aria-label="Close certificate"
          onClick={() => dialogRef.current?.close()}
        >
          <Icon name="close" size={20} />
        </button>
        <img src={item.image} alt={`${item.title} certificate`} />
      </dialog>
    </article>
  )
}

function Credentials() {
  const professional = certifications.filter((item) => item.type === 'professional')
  const training = certifications.filter((item) => item.type === 'training')

  return (
    <>
      <section className="section-block credentials-section" id="certifications">
        <div className="section-heading">
          <h2>Certifications</h2>
          <a className="section-link" href="#certifications-details">View All <span aria-hidden="true">›</span></a>
        </div>
        <div className="certification-group">
          <h3 className="group-label">PROFESSIONAL CREDENTIAL</h3>
          {professional.map((item) => <CertificationItem item={item} key={item.title} />)}
        </div>
        <div className="certification-group training-group">
          <h3 className="group-label">RECENT TRAINING</h3>
          {training.slice(0, 2).map((item) => (
            <CertificationItem item={item} key={item.title} />
          ))}
        </div>
      </section>
      <section className="section-block education-section" id="education">
        <div className="section-heading">
          <h2>Education</h2>
        </div>
        <article className="education-item">
          <p>2020 - 2024</p>
          <div>
            <h3>Bachelor of Science in Computer Engineering (BSCpE)</h3>
            <span>Samar State University</span>
            <span>Catbalogan City, Samar</span>
          </div>
          <p>2018 - 2020</p>
          <div>
            <h3>Information Communication Technology (ICT)</h3>
            <span>Samar National School</span>
            <span>Catbalogan City, Samar</span>
          </div>
        </article>
      </section>
    </>
  )
}

export { CertificationItem }
export default Credentials
