import { useEffect, useState } from 'react'
import './App.css'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const SKILLS = [
  {
    name: 'AWS',
    detail: 'Cloud architecture, App Runner, IAM, and managed services',
  },
  {
    name: 'Networking',
    detail: 'TCP/IP, DNS, routing, and secure connectivity',
  },
  {
    name: 'System Administration',
    detail: 'Linux servers, monitoring, and operational reliability',
  },
  {
    name: 'Data Engineering',
    detail: 'Pipelines, transformation, and analytics-ready datasets',
  },
  {
    name: 'React',
    detail: 'Component-driven UIs, state, and responsive front ends',
  },
  {
    name: 'AI',
    detail: 'Practical AI workflows, automation, and intelligent tooling',
  },
]

const PROJECTS = [
  {
    title: 'AWS App Runner Cloud Deployment',
    tags: ['AWS', 'App Runner', 'CI/CD'],
    description:
      'Containerized a web application and deployed it on AWS App Runner with automated builds, environment configuration, and HTTPS at the edge. Focused on a repeatable cloud workflow from source to a production-ready URL.',
  },
  {
    title: 'Network Lab & Monitoring',
    tags: ['Networking', 'SysAdmin'],
    description:
      'Designed a lab environment to practice routing, DNS, and host hardening, then added lightweight monitoring so service health and connectivity issues surface quickly.',
  },
  {
    title: 'Data Pipeline Workshop',
    tags: ['Data Engineering', 'Python'],
    description:
      'Built an ingestion-to-analytics pipeline that cleans raw records, stores structured output, and surfaces summaries for downstream reporting.',
  },
  {
    title: 'AI-Assisted Portfolio & Tooling',
    tags: ['React', 'AI'],
    description:
      'Used React and AI-assisted development to ship a polished personal site with accessible navigation, structured content, and a contact flow ready for real inquiries.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href),
    ).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function handleNavClick() {
    setMenuOpen(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page">
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <header className="nav-wrap">
        <nav className="nav" aria-label="Primary">
          <a className="brand" href="#home" onClick={handleNavClick}>
            <span className="brand-mark">NR</span>
            <span className="brand-name">Nishanth Reddy</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className={menuOpen ? 'burger open' : 'burger'} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <ul id="primary-menu" className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.slice(1) ? 'active' : ''}
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Student · Cloud · Systems</p>
            <h1>Nishanth Reddy</h1>
            <p className="lede">
              Building reliable cloud, networking, and data systems — and
              turning them into clean, usable software.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View projects
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
          <div className="hero-panel" aria-hidden="true">
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="hero-card">
              <p className="hero-card-label">Focus areas</p>
              <ul>
                <li>AWS & App Runner</li>
                <li>Network operations</li>
                <li>Data pipelines</li>
                <li>React + AI tooling</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-head">
            <p className="eyebrow">About Me</p>
            <h2>Curious engineer, practical builder</h2>
          </div>
          <div className="about-grid">
            <article className="card about-card">
              <p>
                I am a student focused on cloud infrastructure, systems, and
                software that holds up in production. I like work that connects
                networking, administration, and application delivery — from
                provisioning services to shipping a front end people can use.
              </p>
              <p>
                Recently I have been deepening skills in AWS, data engineering,
                React, and AI-assisted workflows so I can design end-to-end
                solutions instead of isolated demos.
              </p>
            </article>
            <aside className="card stats">
              <div>
                <strong>Cloud-first</strong>
                <span>Deployments on managed AWS services</span>
              </div>
              <div>
                <strong>Full stack mindset</strong>
                <span>Infra, data, and React in one loop</span>
              </div>
              <div>
                <strong>Always learning</strong>
                <span>Labs, projects, and production habits</span>
              </div>
            </aside>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-head">
            <p className="eyebrow">Skills</p>
            <h2>Tools I practice and apply</h2>
          </div>
          <ul className="skill-grid">
            {SKILLS.map((skill) => (
              <li key={skill.name} className="card skill-card">
                <h3>{skill.name}</h3>
                <p>{skill.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="section">
          <div className="section-head">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
          </div>
          <ul className="project-grid">
            {PROJECTS.map((project, index) => (
              <li
                key={project.title}
                className={index === 0 ? 'card project-card featured' : 'card project-card'}
              >
                {index === 0 ? <span className="badge">Featured</span> : null}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>Let’s connect</h2>
            <p className="section-copy">
              Interested in cloud, networking, or software work? Send a note and
              I will follow up.
            </p>
          </div>
          <div className="contact-layout">
            <form className="card contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, name: event.target.value }))
                  }
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, email: event.target.value }))
                  }
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                />
              </label>
              <button className="btn btn-primary" type="submit">
                Send message
              </button>
              {submitted ? (
                <p className="form-success" role="status">
                  Thanks, {form.name || 'there'}. Your message is ready locally —
                  this form does not send email yet.
                </p>
              ) : null}
            </form>
            <aside className="card contact-aside">
              <h3>Direct</h3>
              <p>
                Use the form for project inquiries, internships, or
                collaboration.
              </p>
              <p className="muted">Based in the U.S. · Open to student opportunities</p>
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Nishanth Reddy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
