import projects from '../data/projects.js'
import { ProjectCard } from './ProjectsDetails.jsx'

function Projects({ onViewAll }) {
  return (
    <section className="section-block page-width" id="work">
      <div className="section-heading">
        <h2>Projects</h2>
      </div>
      <div className="project-grid project-grid-preview">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard project={project} index={index} key={index} />
        ))}
      </div>
      <div className="projects-cta-wrap">
        <a className="projects-cta" href="#projects" onClick={onViewAll}>
          Explore 20+ Projects <span aria-hidden="true">›</span>
        </a>
      </div>
    </section>
  )
}

export default Projects
