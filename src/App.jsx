import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          THE<span>DROID</span>LAB<span className="logo-dot">.</span>
        </a>

        <div className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk <span>↗</span>
        </a>
      </nav>

      {/* Hero Section */}
      <main id="home" className="hero">
        <div className="hero-content">

          <div className="availability">
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="hero-intro">HELLO, I'M ABHISHEK RAGHAV</p>

          <h1>
            I BUILD
            <span className="gradient-text"> DIGITAL</span>
            <br />
            EXPERIENCES
            <br />
            THAT MATTER<span className="accent-dot">.</span>
          </h1>

          <p className="hero-description">
            Senior Android Developer with 10 years of experience
            building scalable mobile applications and intuitive
            digital experiences. Passionate about Android, Kotlin,
            React Native and emerging AI technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore My Work <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>10<span>+</span></h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3>Android</h3>
              <p>Core Expertise</p>
            </div>

            <div>
              <h3>AI <span>&</span> Mobile</h3>
              <p>Exploring What's Next</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>

          <div className="code-card">
            <div className="code-card-header">
              <div className="window-dots">
                <span></span><span></span><span></span>
              </div>
              <span>developer.kt</span>
            </div>

            <div className="code-content">
              <p><span className="code-purple">class</span> Developer {'{'}</p>
              <p className="indent">
                <span className="code-blue">val</span> name =
                <span className="code-green"> "Abhishek"</span>
              </p>
              <p className="indent">
                <span className="code-blue">val</span> role =
                <span className="code-green"> "Android Developer"</span>
              </p>
              <p className="indent">
                <span className="code-blue">val</span> experience =
                <span className="code-orange"> 10</span>
              </p>
              <br />
              <p className="indent">
                <span className="code-purple">fun</span> buildFuture() {'{'}
              </p>
              <p className="indent double-indent">
                createAmazingApps()
              </p>
              <p className="indent">{'}'}</p>
              <p>{'}'}</p>
            </div>

            <div className="code-card-footer">
              <span className="status-dot"></span>
              Always building something new
            </div>
          </div>

          <div className="floating-tag tag-android">Android Development</div>
          <div className="floating-tag tag-kotlin">Kotlin · Compose</div>
          <div className="floating-tag tag-ai">AI Explorer ✦</div>
        </div>
      </main>

      {/* Sections will be developed in the next steps */}
      <section id="about" className="placeholder-section">
        <span>01 / ABOUT</span>
        <h2>More than just writing code.</h2>
      </section>

      <section id="skills" className="placeholder-section">
        <span>02 / SKILLS</span>
        <h2>Technologies I work with.</h2>
      </section>

      <section id="experience" className="placeholder-section">
        <span>03 / EXPERIENCE</span>
        <h2>My professional journey.</h2>
      </section>

      <section id="projects" className="placeholder-section">
        <span>04 / PROJECTS</span>
        <h2>Things I've built.</h2>
      </section>

      <section id="contact" className="placeholder-section">
        <span>05 / CONTACT</span>
        <h2>Let's build something together.</h2>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} The Droid Lab. Built with passion and code.
      </footer>

    </div>
  )
}

export default App