import experience from '../data/experience.js'

function ExperienceDetails() {
  return (
    <section className="experience-details page-width">
      <a className="back-link" href="#home"><span aria-hidden="true">‹</span> Back to Home</a>
      <div className="details-heading">
        <h1>Experience</h1>
        <p>Where I’ve worked and what I did there.</p>
      </div>
      <div className="experience-timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={`${item.role}-${item.dates}`}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-entry">
              <p className="timeline-dates">{item.dates}</p>
              <h2>{item.role}</h2>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-location">{item.location}</p>
              <ul>
                {item.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceDetails
