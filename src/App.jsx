import './App.css'

function App() {

  const projects = [

    {
      id: "01",
      title: "Allcargo Customer Portal",
      category: "Logistics · Cross-platform",
      featured: false,
      visual: "portal",
      icon: "◫",
      status: "Currently Developing",
      description:
        "A cross-platform customer portal designed to bring retail and credit customer services into a unified digital experience.",
      contribution:
        "Currently involved in developing the customer portal and its user experience.",
      technologies: [
        "React Native",
        "REST APIs",
        "Google Stitch"
      ]
    },

    {
      id: "02",
      title: "Gate Scan",
      category: "Logistics · Bay Management",
      featured: false,
      visual: "gate",
      icon: "▦",
      description:
        "A vehicle scanning and bay management application built to support gate operations and streamline vehicle movement within logistics facilities.",
      contribution:
        "Developed, deployed and continue to maintain the application.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Android SDK",
        "REST APIs",
        "Third-party Libraries"
      ]
    },

    {
      id: "03",
      title: "Allcargo Booking App",
      category: "Logistics · Docket Booking",
      featured: true,
      visual: "booking",
      icon: "⇧",
      description:
        "A mobile docket-booking application that enables retail and credit customers to manage their booking requirements through a digital interface.",
      contribution:
        "Developed, deployed and continue to maintain the application.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Android SDK",
        "REST APIs",
        "Third-party Libraries"
      ]
    },

    {
      id: "04",
      title: "Mental Health App",
      category: "Healthcare · Accessibility",
      featured: false,
      visual: "mental",
      icon: "♡",
      description:
        "A specialised mental healthcare application designed to support specially abled patients through a focused and accessible mobile experience.",
      contribution:
        "Contributed to Android application development and integration of supporting services.",
      technologies: [
        "Java",
        "Kotlin",
        "SQLite",
        "Android SDK",
        "REST APIs",
        "Third-party Libraries"
      ]
    },

    {
      id: "05",
      title: "Google Play Partnership",
      category: "Payments · Rewards",
      featured: false,
      visual: "google",
      icon: "G",
      description:
        "Contributed to payment and rewards-related functionality within a Google Play partnership project.",
      contribution:
        "Worked on partner-facing initiatives involving platforms such as Uber, YouTube and Discord.",
      technologies: [
        "Payment Integration",
        "Rewards",
        "Partner Platforms"
      ]
    },

    {
      id: "06",
      title: "GTI-GIS",
      category: "GPS & GIS · Enterprise Mobility",
      featured: true,
      visual: "gis",
      icon: "⌖",
      description:
        "Integrated GPS and GIS capabilities into existing enterprise solutions, enabling location-based operations and mapping workflows for large organisations.",
      contribution:
        "Worked on GPS-GIS integration for enterprise clients including Indian Oil and GAIL India Limited.",
      technologies: [
        "Java",
        "Android SDK",
        "SQLite",
        "Open Map",
        "Android Architecture"
      ]
    },

    {
      id: "07",
      title: "Prescription Pad",
      category: "Healthcare · Digital Health",
      featured: true,
      visual: "health",
      icon: "✚",
      description:
        "A digital prescription management solution featuring tele-consultation capabilities and MIS reporting to support healthcare professionals and clinical workflows.",
      contribution:
        "Worked on solutions delivered to government and non-government healthcare clients.",
      technologies: [
        "Java",
        "Kotlin",
        "SQLite",
        "Android SDK",
        "REST APIs",
        "Third-party Libraries"
      ]
    },
  ]


  const experiences = [
    {
      id: "01",
      period: "SEPT 2024 — PRESENT",
      company: "Connect Icon Pvt. Ltd.",
      client: "Allcargo Gati Ltd. · Client",
      role: "Senior Mobile Developer",
      location: "Gurgaon, Haryana",
      current: true,
      icon: "✦",
      accent: "current",
      highlights: [
        "Serving as an Mobile Developer with the Allcargo Gati Team, focusing on application development and maintenance.",
        "Designed, developed and deployed a full-stack Android application for a logistics platform.",
        "Developing Android applications using Kotlin and Jetpack Compose.",
        "Currently working on developing a mobile application using React Native Expo."
      ],
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Android",
        "React Native",
        "Expo",
        "AI",
        "Figma",
        "Google Stitch",
        "Room",
        "REST API",
        "Postgres",
        "Vite"
      ]
    },
    {
      id: "02",
      period: "OCT 2022 — FEB 2024",
      company: "Accenture ",
      client: "Google · Client",
      role: "Senior Android Developer",
      team: "Google Tech Consulting Team",
      location: "Gurgaon, Haryana",
      current: false,
      icon: "G",
      accent: "google",
      highlights: [
        "Engaged with the Google Tech Consulting Team, addressing developer queries related to code, implementation and libraries.",
        "Worked on various Google products under the Play Partnership Project.",
        "Used Java, Kotlin, Android SDK and Android architecture to build scalable and maintainable codebases.",
        "Conducted code reviews, debugging and troubleshooting to support high-quality deliverables and timely project completion."
      ],
      technologies: [
        "Java",
        "Kotlin",
        "Android SDK",
        "Android Architecture",
        "Code Reviews"
      ]
    },
    {
      id: "03",
      period: "OCT 2015 — OCT 2022",
      company: "Compurx Infotech Pvt. Ltd.",
      client: "Healthcare · Government & Private Clients",
      role: "Senior Android Developer",
      location: "New Delhi",
      current: false,
      icon: "✚",
      accent: "health",
      highlights: [
        "Designed, developed and implemented full-stack Android applications focused on healthcare, EHR, academics and other domains.",
        "Built applications using Java, Android SDK and Android architecture.",
        "Collaborated with government and non-government clients, including Uttarakhand, J&K and Jharkhand Governments on healthcare projects involving EHR integration.",
        "Worked with designers, product managers and QA engineers to bring product ideas to life.",
        "Applied code quality, performance optimisation and UI/UX best practices to improve app ratings and user satisfaction.",
        "Led and mentored developers, encouraging a collaborative environment and technical excellence."
      ],
      technologies: [
        "Java",
        "Android SDK",
        "Android Architecture",
        "Healthcare",
        "EHR",
        "Team Leadership"
      ]
    },
    {
      id: "04",
      period: "JUN 2014 — OCT 2015",
      company: "GTI Infotel Ltd.",
      client: "GPS & GIS Solutions",
      role: "System Engineer",
      location: "Noida, Uttar Pradesh",
      current: false,
      icon: "⌖",
      accent: "gis",
      highlights: [
        "Designed and implemented a GPS-based monitoring system across multiple locations to enhance tracking capabilities.",
        "Collaborated with cross-functional teams to integrate new technologies and solutions.",
        "Provided technical guidance and mentorship to junior team members, fostering continuous learning and development."
      ],
      technologies: [
        "GPS",
        "GIS",
        "Monitoring Systems",
        "Team Collaboration"
      ]
    }
  ]

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

        {/* Resume Download Button */}
        <a
          href="/resume.pdf"
          download="Abhishek-Raghav-Resume.pdf"
          className="resume-download-btn"
          aria-label="Download Resume"
          title="Download Resume"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>

        {/* Let's Talk Button */}
        <a href="#contact" className="nav-button">
          Let's Talk <span>📱</span>
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


      {/* Skills Section */}
      <section id="skills" className="skills-section">

        <div className="skills-divider"></div>

        {/* Section Heading */}
        <div className="skills-heading">
          <h2>
            The tools behind
            <br />
            <span className="gradient-text">what I build.</span>
          </h2>

          <p>
            A collection of technologies, frameworks and tools I've
            worked with to build mobile applications, scalable systems
            and modern digital experiences.
          </p>
        </div>

        {/* Technology Groups */}
        <div className="skills-grid">

          {/* Mobile & Android */}
          <article className="skill-card skill-card-android">
            <div className="skill-card-header">
              <div className="skill-category-icon">▣</div>
              <span className="skill-card-index">01</span>
            </div>

            <div className="skill-card-title">
              <h3>Mobile & Android</h3>
              <p>Native development and Android ecosystem</p>
            </div>

            <div className="skill-items">
              {[
                ["A", "Android"],
                ["⌘", "Android Architecture"],
                ["▣", "Android SDK"],
                ["J", "Java"],
                ["K", "Kotlin"],
                ["◈", "Jetpack Compose"],
                ["✦", "Jetpack Components"],
                ["↻", "Kotlin Coroutines"],
                ["D", "Dagger"],
                ["▤", "Room Database"],
                ["✓", "Unit Testing"]
              ].map(([icon, name]) => (
                <span className="skill-chip" key={name}>
                  <span className="skill-chip-icon">{icon}</span>
                  {name}
                </span>
              ))}
            </div>

            <div className="skill-card-footer">
              <span>CORE SPECIALISATION</span>
              <span className="skill-footer-dot"></span>
            </div>
          </article>

          {/* Cross-platform & Web */}
          <article className="skill-card skill-card-cross">
            <div className="skill-card-header">
              <div className="skill-category-icon">⌘</div>
              <span className="skill-card-index">02</span>
            </div>

            <div className="skill-card-title">
              <h3>Cross-platform & Web</h3>
              <p>Building experiences across platforms</p>
            </div>

            <div className="skill-items">
              {[
                ["⚛", "React Native"],
                ["◉", "Expo"],
                ["V", "Vite"]
              ].map(([icon, name]) => (
                <span className="skill-chip" key={name}>
                  <span className="skill-chip-icon">{icon}</span>
                  {name}
                </span>
              ))}
            </div>

            <div className="skill-card-footer">
              <span>CROSS-PLATFORM DEVELOPMENT</span>
              <span className="skill-footer-dot"></span>
            </div>
          </article>

          {/* Architecture & APIs */}
          <article className="skill-card skill-card-api">
            <div className="skill-card-header">
              <div className="skill-category-icon">⌘</div>
              <span className="skill-card-index">03</span>
            </div>

            <div className="skill-card-title">
              <h3>Architecture & APIs</h3>
              <p>Application structure and communication</p>
            </div>

            <div className="skill-items">
              {[
                ["◇", "MVC / MVVM"],
                ["↔", "RESTful API"],
                ["⌘", "GraphQL API"]
              ].map(([icon, name]) => (
                <span className="skill-chip" key={name}>
                  <span className="skill-chip-icon">{icon}</span>
                  {name}
                </span>
              ))}
            </div>

            <div className="skill-card-footer">
              <span>APPLICATION ENGINEERING</span>
              <span className="skill-footer-dot"></span>
            </div>
          </article>

          {/* Data & Cloud */}
          <article className="skill-card skill-card-cloud">
            <div className="skill-card-header">
              <div className="skill-category-icon">◈</div>
              <span className="skill-card-index">04</span>
            </div>

            <div className="skill-card-title">
              <h3>Data & Cloud</h3>
              <p>Storage, backend services and cloud platforms</p>
            </div>

            <div className="skill-items">
              {[
                ["▤", "SQL / SQLite"],
                ["✦", "Firebase"],
                ["◉", "Supabase"],
                ["☁", "Google Cloud"]
              ].map(([icon, name]) => (
                <span className="skill-chip" key={name}>
                  <span className="skill-chip-icon">{icon}</span>
                  {name}
                </span>
              ))}
            </div>

            <div className="skill-card-footer">
              <span>BACKEND & INFRASTRUCTURE</span>
              <span className="skill-footer-dot"></span>
            </div>
          </article>

          {/* UI/UX & Design */}
          <article className="skill-card skill-card-design">
            <div className="skill-card-header">
              <div className="skill-category-icon">✎</div>
              <span className="skill-card-index">05</span>
            </div>

            <div className="skill-card-title">
              <h3>UI/UX & Design</h3>
              <p>Designing intuitive digital experiences</p>
            </div>

            <div className="skill-items">
              {[
                ["✧", "App Designing"],
                ["F", "Figma"],
                ["✦", "Google Stitch"]
              ].map(([icon, name]) => (
                <span className="skill-chip" key={name}>
                  <span className="skill-chip-icon">{icon}</span>
                  {name}
                </span>
              ))}
            </div>

            <div className="skill-card-footer">
              <span>DESIGN & PROTOTYPING</span>
              <span className="skill-footer-dot"></span>
            </div>
          </article>

          {/* Engineering & AI */}
          <article className="skill-card skill-card-ai">
            <div className="skill-card-header">
              <div className="skill-category-icon">✧</div>
              <span className="skill-card-index">06</span>
            </div>

            <div className="skill-card-title">
              <h3>Engineering & AI</h3>
              <p>Development workflows and emerging technologies</p>
            </div>

            <div className="skill-items">
              {[
                ["⇄", "CI/CD Pipeline"],
                ["⌘", "Git"],
                ["✧", "AI Integration"],
                ["◈", "AI Agents"]
              ].map(([icon, name]) => (
                <span className="skill-chip" key={name}>
                  <span className="skill-chip-icon">{icon}</span>
                  {name}
                </span>
              ))}
            </div>

            <div className="skill-card-footer">
              <span>BUILDING WHAT'S NEXT</span>
              <span className="skill-footer-dot"></span>
            </div>
          </article>

        </div>

        {/* Bottom Note */}
        <div className="skills-bottom-note">
          <span className="status-dot"></span>
          <p>Learning, experimenting and evolving with technology.</p>
          <span className="skills-bottom-sparkle">✦</span>
        </div>

      </section>



      {/* Experience Section */}
      <section id="experience" className="experience-section">

        <div className="experience-divider"></div>

        {/* Section Heading */}
        <div className="experience-heading">
          <h2>
            A journey built on
            <br />
            <span className="gradient-text">experience & innovation.</span>
          </h2>

          <p>
            From GPS-based monitoring systems to enterprise mobility,
            healthcare platforms and modern cross-platform applications —
            here's how my professional journey has evolved.
          </p>
        </div>

        {/* Career Summary */}
        <div className="experience-summary">
          <div className="experience-summary-item">
            <strong>2014</strong>
            <span>Career Started</span>
          </div>

          <div className="experience-summary-line"></div>

          <div className="experience-summary-item">
            <strong>4</strong>
            <span>Professional Roles</span>
          </div>

          <div className="experience-summary-line"></div>

          <div className="experience-summary-item">
            <strong>Multiple</strong>
            <span>Industry Domains</span>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="experience-timeline">

          {experiences.map((experience) => (
            <article
              className={`experience-card experience-${experience.accent} ${experience.current ? "experience-current" : ""
                }`}
              key={experience.id}
            >

              {/* Timeline Marker */}
              <div className="experience-timeline-marker">
                <span>{experience.icon}</span>
              </div>

              {/* Experience Card */}
              <div className="experience-card-inner">

                <div className="experience-card-top">
                  <div className="experience-period">
                    <span className="experience-period-dot"></span>
                    {experience.period}
                  </div>

                  {experience.current && (
                    <span className="experience-current-label">
                      <span className="status-dot"></span>
                      CURRENT ROLE
                    </span>
                  )}
                </div>

                <div className="experience-company-row">
                  <div>
                    <h3>{experience.company}</h3>
                    <p className="experience-client">{experience.client}</p>
                  </div>

                  <span className="experience-number">
                    {experience.id}
                  </span>
                </div>

                <div className="experience-role-row">
                  <span className="experience-role">
                    {experience.role}
                  </span>

                  <span className="experience-location">
                    <span>⌖</span>
                    {experience.location}
                  </span>
                </div>

                {experience.team && (
                  <div className="experience-team">
                    <span>✦</span>
                    {experience.team}
                  </div>
                )}

                <div className="experience-card-divider"></div>

                <div className="experience-highlights">
                  <span className="experience-subheading">
                    KEY RESPONSIBILITIES
                  </span>

                  <ul>
                    {experience.highlights.map((highlight, index) => (
                      <li key={index}>
                        <span className="experience-bullet">✦</span>
                        <p>{highlight}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  <span className="experience-subheading">
                    TECHNOLOGIES & EXPOSURE
                  </span>

                  <div className="experience-tags">
                    {experience.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          ))}

        </div>

        {/* Education */}
        <div className="education-section">

          <div className="education-heading">
            <span className="experience-eyebrow">ACADEMIC BACKGROUND</span>
            <h3>Education & qualifications.</h3>
          </div>

          <div className="education-grid">

            <article className="education-card">
              <div className="education-icon">◈</div>
              <div>
                <span className="education-year">JUNE 2018</span>
                <h4>Master of Technology</h4>
                <p>Software Engineering</p>
                <span className="education-institute">
                  MDU, Rohtak
                </span>
              </div>
            </article>

            <article className="education-card">
              <div className="education-icon">⌘</div>
              <div>
                <span className="education-year">JUNE 2014</span>
                <h4>Bachelor of Technology</h4>
                <p>Electronics and Communication Engineering</p>
                <span className="education-institute">
                  MDU, Rohtak
                </span>
              </div>
            </article>

          </div>
        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">

        <div className="section-divider"></div>

        <div className="projects-heading">
          <h2>
            Building products,
            <br />
            <span className="gradient-text">solving real problems.</span>
          </h2>

          <p>
            A selection of mobile applications and enterprise solutions
            I've contributed to across healthcare, logistics, payments
            and location intelligence.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article
              className={`project-card ${project.featured ? "project-featured" : ""} ${project.visual === "portal" ? "project-card-wide" : ""
                }`}
              key={project.id}
            >

              {/* Project Visual */}
              <div className={`project-visual project-visual-${project.visual}`}>

                <div className="project-visual-orb"></div>

                <div className="project-visual-top">
                  <span>PROJECT / {project.id}</span>
                  <span className="project-visual-symbol">
                    {project.icon}
                  </span>
                </div>

                <div className="project-visual-center">
                  <span className="project-visual-icon">
                    {project.icon}
                  </span>
                  <span className="project-visual-title">
                    {project.title}
                  </span>
                  <span className="project-visual-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-visual-bottom">
                  <span>THE DROID LAB</span>
                  <span>✦</span>
                </div>

              </div>

              {/* Project Details */}
              <div className="project-content">

                <div className="project-title-row">
                  <div>
                    <span className="project-number">
                      {project.id} / PROJECT
                    </span>

                    <h3>{project.title}</h3>
                  </div>

                  {project.status ? (
                    <span className="project-status">
                      <span className="status-dot"></span>
                      {project.status}
                    </span>
                  ) : project.featured ? (
                    <span className="project-featured-label">
                      FEATURED
                    </span>
                  ) : null}
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-contribution">
                  <span>MY CONTRIBUTION</span>
                  <p>{project.contribution}</p>
                </div>

                <div className="project-tech-heading">
                  TECHNOLOGIES & EXPERTISE
                </div>

                <div className="project-tech-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <span>{project.category}</span>
                  <span className="project-arrow">↗</span>
                </div>

              </div>

            </article>
          ))}

        </div>

        <div className="projects-footer">
          <span className="status-dot"></span>
          <p>
            And many more applications, integrations and digital solutions
            built along the way.
          </p>
        </div>

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