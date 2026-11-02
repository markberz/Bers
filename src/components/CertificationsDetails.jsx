import { useState } from 'react'
import certifications from '../data/certifications.js'
import { CertificationItem } from './Credentials.jsx'

function CertificationsDetails() {
  const years = [...new Set(certifications.map((item) => item.year))].sort((a, b) => b - a)
  const [currentPage, setCurrentPage] = useState(0)
  const selectedYear = years[currentPage]
  const visibleCertifications = certifications
    .filter((item) => item.year === selectedYear)
    .sort((a, b) => b.month - a.month)

  return (
    <section className="certifications-details page-width">
      <a className="back-link" href="#home"><span aria-hidden="true">‹</span> Back to Home</a>
      <div className="details-heading">
        <h1>Certifications</h1>
        <p>Professional credentials, courses, and specialized training across data, AI, and technology.</p>
      </div>
      <div className="certification-detail-list">
        {visibleCertifications.map((item) => (
          <CertificationItem item={item} detailed key={`${item.title}-${item.year}`} />
        ))}
      </div>
      <nav className="project-pagination" aria-label="Certification pages">
        <button
          type="button"
          disabled={currentPage === 0}
          aria-label="Previous page"
          onClick={() => setCurrentPage((page) => Math.max(page - 1, 0))}
        >
          <span aria-hidden="true">‹</span> Previous
        </button>
        {years.map((year, index) => (
          <button
            type="button"
            className={index === currentPage ? 'is-current' : ''}
            aria-current={index === currentPage ? 'page' : undefined}
            aria-label={`Show ${year} certificates`}
            onClick={() => setCurrentPage(index)}
            key={year}
          >
            {index + 1}
          </button>
        ))}
        <button
          type="button"
          disabled={currentPage === years.length - 1}
          aria-label="Next page"
          onClick={() => setCurrentPage((page) => Math.min(page + 1, years.length - 1))}
        >
          Next <span aria-hidden="true">›</span>
        </button>
      </nav>
    </section>
  )
}

export default CertificationsDetails
