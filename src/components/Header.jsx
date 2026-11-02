import Icon from './Icon.jsx'

function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="MARK BERIO, home">MB</a>

        <div className="nav-links">
          <a href="#experience-details">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications-details">Certifications</a>
          <a href="#education">Education</a>
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <Icon name={theme === 'light' ? 'moon' : 'sun'} size={17} />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
