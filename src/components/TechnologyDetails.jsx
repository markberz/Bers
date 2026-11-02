import technologyGroups from '../data/technologies.js'
import TechnologyTag from './TechnologyTag.jsx'

function TechnologyDetails() {
  return (
    <section className="technology-details page-width">
      <a className="back-link" href="#home"><span aria-hidden="true">‹</span> Back to Home</a>
      <div className="details-heading">
        <h1>Full Tech Stack</h1>
        <p>Comprehensive list of tools and technologies I use.</p>
      </div>
      <div className="technology-groups">
        {technologyGroups.map((group) => (
          <section className="technology-group" key={group.name}>
            <h2>{group.name}</h2>
            <div className="technology-list">
              {group.technologies.map((technology) => <TechnologyTag name={technology} key={technology} />)}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export default TechnologyDetails
