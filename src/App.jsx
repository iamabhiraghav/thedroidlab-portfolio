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
            Senior Mobile Developer with 10 years of experience
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

          <div className="floating-tag tag-android">
            <span className="tag-icon">🤖</span>
            Android Development
          </div>

          <div className="floating-tag tag-kotlin">
            <span className="tag-icon">⚡</span>
            Kotlin · Compose
          </div>

          <div className="floating-tag tag-react">
            <span className="tag-icon">⚛</span>
            React Native
          </div>

          <div className="floating-tag tag-agents">
            <span className="tag-icon">✧</span>
            AI Agents
          </div>

          <div className="floating-tag tag-rag">
            <span className="tag-icon">◈</span>
            RAG Implementation
          </div>

          <div className="floating-tag tag-ai">
            <span className="tag-icon">✦</span>
            AI Explorer
          </div>
        </div>
      </main>

      {/* Sections will be developed in the next steps */}
      {/* About Section */}

      {/* About Section */}
      <section id="about" className="about-section">

        {/* Section Heading */}
        <div className="about-heading">
          <h2>
            More than just
            <span className="gradient-text"> writing code.</span>
          </h2>

          <p>
            I turn ideas into reliable, meaningful mobile experiences.
            Here's a little about my journey and what drives me.
          </p>
        </div>

        {/* Full Width Glass Card */}
        <div className="about-main-card">

          {/* Left Side - Personal Introduction */}
          <div className="about-person">

            <div className="about-label">
              <span className="status-dot"></span>
              THE PERSON BEHIND THE CODE
            </div>

            <h3>
              Hi, I'm <span>Abhishek Raghav.</span>
            </h3>

            <p>
              Senior Application Developer with 10 years of
              experience building scalable, reliable, and user-focused
              digital solutions across diverse industries.
            </p>

            <p>
              My professional journey spans GPS-GIS solutions, healthcare
              platforms for government and private organisations, and
              enterprise applications. I've had the opportunity to work
              with Accenture, contribute to a Google Play partnership
              project at Google, and currently work with Allcargo Logistics,
              building technology solutions for the logistics domain.
            </p>

            <p>
              With a strong foundation in Application development, I enjoy
              solving complex engineering challenges, exploring emerging
              technologies, and expanding my expertise into AI-powered
              applications. I'm driven by continuous learning and the
              opportunity to turn innovative ideas into meaningful products.
            </p>

            <a href="#contact" className="about-connect">
              Let's connect <span>↗</span>
            </a>

          </div>

          {/* Right Side - Technology Card */}
          <div className="about-tech-card">

            <div className="about-tech-header">
              <div>
                <span className="about-tech-eyebrow">
                  MY TECH STACK
                </span>
                <h3>Technology I work with.</h3>
              </div>

              <span className="tech-header-icon">✦</span>
            </div>

            {/* Android */}
            <div className="tech-item">
              <div className="tech-icon android-icon">A</div>
              <div className="tech-info">
                <h4>Android Development</h4>
                <p>Native Android Application Development</p>
                <div className="tech-tags">
                  <span>Kotlin</span>
                  <span>Java</span>
                  <span>Jetpack Compose</span>
                  <span>Room</span>
                  <span>MVVM</span>
                </div>
              </div>
            </div>

            {/* Cross Platform */}
            <div className="tech-item">
              <div className="tech-icon react-icon">⚛</div>
              <div className="tech-info">
                <h4>Cross-platform & Web Development</h4>
                <p>Building applications across platforms</p>
                <div className="tech-tags">
                  <span>React Native</span>
                  <span>Expo</span>
                  <span>Vite</span>
                </div>
              </div>
            </div>

            {/* Backend and Cloud */}
            <div className="tech-item">
              <div className="tech-icon cloud-icon">◈</div>
              <div className="tech-info">
                <h4>Backend & Cloud</h4>
                <p>API Integration, Cloud Services & Databases</p>
                <div className="tech-tags">
                  <span>REST APIs</span>
                  <span>GraphQL APIs</span>
                  <span>Supabase</span>
                  <span>Firebase</span>
                  <span>SQL</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* UI/UX and Design */}
            <div className="tech-item">
              <div className="tech-icon design-icon">✎</div>
              <div className="tech-info">
                <h4>UI/UX & Product Design</h4>
                <p>Designing intuitive and modern user experiences</p>
                <div className="tech-tags">
                  <span>Figma</span>
                  <span>Google Stitch</span>
                </div>
              </div>
            </div>

            {/* AI */}
            <div className="tech-item">
              <div className="tech-icon ai-icon">✧</div>
              <div className="tech-info">
                <h4>AI & Emerging Technologies</h4>
                <p>AI Agents · RAG · Generative AI</p>
                <div className="tech-tags">
                  <span>Learning</span>
                  <span>Experimenting</span>
                </div>
              </div>
            </div>

            <div className="about-tech-footer">
              <span className="status-dot"></span>
              Always learning. Always building.
            </div>

          </div>

        </div>

        {/* Career Highlights */}
        <div className="about-bottom-stats">

          <div>
            <strong>2014</strong>
            <span>Started my journey</span>
          </div>

          <div>
            <strong>4+</strong>
            <span>Professional roles</span>
          </div>

          <div>
            <strong>Multiple</strong>
            <span>Domains & products</span>
          </div>

          <div>
            <strong>Always</strong>
            <span>Learning & building</span>
          </div>

        </div>

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


      {/* Contact Section */}
      <section id="contact" className="contact-section">

        <div className="contact-heading">
          <h2>
            Let's create something
            <br />
            <span className="gradient-text">extraordinary.</span>
          </h2>

          <p>
            Have an idea, an opportunity, or just want to talk technology?
            I'd love to hear from you. Let's connect and build something
            meaningful together.
          </p>
        </div>

        <div className="contact-glass-card">

          {/* Card Header */}
          <div className="contact-card-header">
            <div>
              <span className="contact-label">CONTACT DETAILS</span>
              <h3>Let's connect.</h3>
            </div>

            <div className="contact-online">
              <span className="status-dot"></span>
              Open to conversations
            </div>
          </div>

          {/* Phone and WhatsApp */}
          <div className="contact-group">
            <div className="contact-group-title">
              <span className="contact-icon">☎</span>
              <div>
                <h4>Phone & WhatsApp</h4>
                <p>Reach me directly</p>
              </div>
            </div>

            <div className="phone-list">

              <div className="phone-item">
                <div className="phone-info">
                  <span className="phone-number">+91 97167 06167</span>
                  <span className="phone-type">Primary contact</span>
                </div>

                <div className="phone-actions">
                  <a
                    href="tel:+919716706167"
                    className="contact-action call-action"
                    aria-label="Call primary number"
                    title="Call"
                  >
                    ☎
                  </a>

                  <a
                    href="https://wa.me/919716706167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-action whatsapp-action"
                    aria-label="WhatsApp primary number"
                    title="WhatsApp"
                  >
                    ↗
                  </a>
                </div>
              </div>

              <div className="phone-item">
                <div className="phone-info">
                  <span className="phone-number">+91 75575 51756</span>
                  <span className="phone-type">Alternate contact</span>
                </div>

                <div className="phone-actions">
                  <a
                    href="tel:+917557551756"
                    className="contact-action call-action"
                    aria-label="Call alternate number"
                    title="Call"
                  >
                    ☎
                  </a>

                  <a
                    href="https://wa.me/917557551756"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-action whatsapp-action"
                    aria-label="WhatsApp alternate number"
                    title="WhatsApp"
                  >
                    ↗
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="contact-divider"></div>

          {/* Social Profiles */}
          <div className="contact-group">
            <div className="contact-group-title">
              <span className="contact-icon">◎</span>
              <div>
                <h4>Find me online</h4>
                <p>Connect through my social profiles</p>
              </div>
            </div>

            <div className="social-grid">

              <a
                href="https://www.linkedin.com/in/abhishek-raghav-3a9351b6"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card linkedin-card"
              >
                <div className="social-icon">in</div>
                <div className="social-info">
                  <h4>LinkedIn</h4>
                  <p>Professional network</p>
                </div>
                <span className="social-arrow">↗</span>
              </a>

              <a
                href="https://www.instagram.com/thedroidlab/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card instagram-card"
              >
                <div className="social-icon">◎</div>
                <div className="social-info">
                  <h4>Instagram</h4>
                  <p>@thedroidlab</p>
                </div>
                <span className="social-arrow">↗</span>
              </a>

              <a
                href="https://github.com/iamabhiraghav"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card github-card"
              >
                <div className="social-icon">⌘</div>
                <div className="social-info">
                  <h4>GitHub</h4>
                  <p>Code & projects</p>
                </div>
                <span className="social-arrow">↗</span>
              </a>

            </div>
          </div>

          {/* Card Footer */}
          <div className="contact-card-footer">
            <span>THE DROID LAB</span>
            <span>Let's build what's next. ✦</span>
          </div>

        </div>

        <div className="contact-bottom-note">
          <span className="status-dot"></span>
          Available for interesting conversations and opportunities
        </div>

      </section>


      <footer className="footer">
        © {new Date().getFullYear()} The Droid Lab. Built with passion and code.
      </footer>

    </div>
  )
}

export default App