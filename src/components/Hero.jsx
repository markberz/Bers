import Icon from './Icon.jsx'
import selfImage from '../assets/Self.png'
import sanjiImage from '../assets/sanji.jpg'

const stats = [
  { value: '3', label: 'Months of experience work' },
  { value: '16', label: 'Projects Built' },
  { value: 'Philippines', label: 'Local Clients' },
]

function Hero() {
  return (
    <section className="hero-section page-width" id="home">
      <div className="hero-copy">
        <div className="profile-row">
          <div className="avatar" role="img" aria-label="Mark Berio profile image">
            <img className="avatar-image" src={selfImage} alt="" />
            <span className="avatar-pixel-layer" aria-hidden="true">
              {Array.from({ length: 16 }, (_, index) => {
                const x = index % 4
                const y = Math.floor(index / 4)
                const order = (index * 5) % 16

                return (
                  <span
                    className="avatar-pixel"
                    key={index}
                    style={{
                      backgroundImage: `url("${sanjiImage}")`,
                      backgroundPosition: `${(x / 3) * 100}% ${(y / 3) * 100}%`,
                      '--pixel-delay': `${order * 0.012}s`,
                      '--pixel-reverse-delay': `${(15 - order) * 0.012}s`,
                    }}
                  />
                )
              })}
            </span>
          </div>
          <div>
            <p className="profile-name">
              Mark Berio <span className="verified-mark" role="img" aria-label="Verified"><Icon name="verified" size={26} /></span>
            </p>
            <p className="profile-role">Full Stack Web development · Embedded Systems · Technical Support</p>
            <div className="social-links">
              <a href="https://github.com/markberz" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Icon name="github" size={17} />
              </a>
              <a href="https://www.linkedin.com/in/mark-berio/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" size={17} />
              </a>
              <a href="mailto:markberio30@gmail.com" aria-label="Email">
                <Icon name="mail" size={17} />
              </a>
            </div>
          </div>
        </div>

        <h1>I Design. Code. <span>Innovate.</span></h1>
        <p className="hero-description">
          I'm a Web Developer with skills in full-stack development, embedded systems, and an interest in SEO and digital technologies. I develop websites and digital solutions using technologies like React, Rust, and C++. I also have knowledge of computer troubleshooting, hardware and software maintenance. I'm passionate about learning new technologies, solving problems, and turning ideas into practical digital solutions.
        </p>
        <div className="hero-actions">
          <a
            className="hero-button"
            href="https://drive.google.com/file/d/1HQTsyu9y_En00rmqWao8mXbbkdyLbIZh/view?usp=drive_link"
            target="_blank"
            rel="noreferrer noopener"
          >
            View Resume <Icon name="arrow" size={15} />
          </a>
        </div>
      </div>

      <div className="stats-row">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <span className="stat-value">
              {stat.value.endsWith('+') ? (
                <>{stat.value.slice(0, -1)}<span className="stat-value-accent">+</span></>
              ) : stat.value}
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
