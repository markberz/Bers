import { useState } from 'react'
import Icon from './Icon.jsx'
import projects from '../data/projects.js'
import { technologyIcons, technologyIconsWhiteOnDark } from './TechnologyTag.jsx'

const projectTechAliases = {
  'React.js': 'React',
  'HTML5': 'HTML',
  'OpenRouter API Integration': 'OpenRouter AI',
  'GITHUB API Integration': 'GitHub',
  'Github Copilot': 'GitHub Copilot',
  'GitHub Copilot': 'GitHub Copilot',
  'OpenAI ': 'OpenAI',
  SEO: 'googleanalytics',
  'Shopify': 'Shopify',
  'Firebase': 'Firebase',
  'Edge Impulse': 'Edge Impulse',
  'Kodular': 'Kodular',
}

function getProjectTechnologyIconSource(technology) {
  const key = projectTechAliases[technology] || technology
  const icon = technologyIcons[key] || technologyIcons[technology]

  if (icon) {
    return icon.startsWith('https://') ? icon : `https://cdn.simpleicons.org/${icon}`
  }

  const fallbackKey = key
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')

  if (fallbackKey) {
    return `https://cdn.simpleicons.org/${fallbackKey}`
  }

  return null
}

const projectsPerPage = 4

function getProjectPages() {
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year || b.month - a.month)

  return Array.from({ length: Math.ceil(sortedProjects.length / projectsPerPage) }, (_, pageIndex) => {
    const start = pageIndex * projectsPerPage
    const pageProjects = sortedProjects.slice(start, start + projectsPerPage)

    return {
      projects: pageProjects.map((project, index) => ({ project, index: start + index })),
    }
  })
}

export function ProjectCard({ project, index }) {
  const previewStyle = project.image
    ? {
        backgroundImage: `url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined

  return (
    <article className="project-card">
      <div className={`project-preview project-preview-${project.type}`} aria-hidden="true" style={previewStyle}>
        <div className="preview-browser">
          <span /><span /><span />
        </div>
        {project.image ? <div className="preview-content preview-content-image-only" /> : <div className="preview-content" />}
      </div>
      <div className="project-details">
        <div className="project-title-line">
          <div>
            <h3>{project.name}</h3>
            <p className="project-kind">{project.role}</p>
          </div>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-tech-icons" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => {
            const iconKey = projectTechAliases[technology] || technology
            const iconSource = getProjectTechnologyIconSource(technology)
            const iconClassName = technologyIconsWhiteOnDark.has(iconKey)
              ? 'project-tech-icon project-tech-icon-white-on-dark'
              : 'project-tech-icon'

            return (
              <span className="project-tech-icon-slot" title={technology} key={technology}>
                {iconSource ? (
                  <img
                    className={iconClassName}
                    src={iconSource}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.style.display = 'none'
                    }}
                  />
                ) : null}
              </span>
            )
          })}
        </div>
        <a
          className="project-site-link"
          href={project.website || '#contact'}
          target={project.website ? '_blank' : undefined}
          rel={project.website ? 'noreferrer noopener' : undefined}
        >
          {project.linkLabel} <Icon name="arrow" size={11} />
        </a>
      </div>
      {Number.isInteger(index) && <span className="sr-only">Project {index + 1} of {projects.length}</span>}
    </article>
  )
}

function ProjectsDetails() {
  const pages = getProjectPages()
  const [currentPage, setCurrentPage] = useState(0)
  const currentProjectsPage = pages[currentPage]

  return (
    <section className="projects-details page-width">
      <a className="back-link" href="#home"><span aria-hidden="true">‹</span> Back to Home</a>
      <div className="details-heading">
        <h1>Selected Projects</h1>
        <p>A showcase of my web development, image editing, and embedded systems projects.</p>
      </div>
      <div className="project-grid">
        {currentProjectsPage?.projects.map(({ project, index }) => (
          <ProjectCard project={project} index={index} key={index} />
        ))}
      </div>
      <nav className="project-pagination" aria-label="Project pages">
        <button
          type="button"
          disabled={currentPage === 0}
          aria-label="Previous page"
          onClick={() => setCurrentPage((page) => Math.max(page - 1, 0))}
        >
          <span aria-hidden="true">‹</span> Previous
        </button>
        {pages.map((_, index) => (
          <button
            type="button"
            className={`project-page-number${index === currentPage ? ' is-current' : ''}`}
            aria-current={index === currentPage ? 'page' : undefined}
            aria-label={`Show projects page ${index + 1}`}
            onClick={() => setCurrentPage(index)}
            key={index}
          >
            {index + 1}
          </button>
        ))}
        <button
          type="button"
          disabled={currentPage === pages.length - 1}
          aria-label="Next page"
          onClick={() => setCurrentPage((page) => Math.min(page + 1, pages.length - 1))}
        >
          Next <span aria-hidden="true">›</span>
        </button>
      </nav>
    </section>
  )
}

export default ProjectsDetails
