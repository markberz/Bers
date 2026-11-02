import experience from '../data/experience.js'

function Experience({ onViewDetails }) {
  return (
    <section className="section-block experience-section" id="experience">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <h2>Experience</h2>
          </div>
            <a className="section-link" href="#experience-details" onClick={onViewDetails}>View Details <span aria-hidden="true">›</span></a>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.role}>
              <p className="experience-dates">{item.dates}</p>
              <div className="experience-content">
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-detail">{item.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
