import { lazy, Suspense } from 'react'
import { profile, asOf, readout, work, projects, skills, credentials } from './content'

// three.js is most of the bundle; load it after the text has painted.
const HubScene = lazy(() => import('./HubScene'))

const External = ({ href, className, children }) => (
  <a href={href} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

const App = () => {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <header className="topbar">
        <a href="#top" className="topbar-name">{profile.name}</a>
        <nav aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <External href={profile.linkedin} className="btn btn-small">LinkedIn</External>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-text">
            <p className="eyebrow">{profile.role} · {profile.org}</p>
            <h1 className="nameplate">
              <span>Mwahhid</span>
              <span>Majeed</span>
            </h1>
            <p className="intro">{profile.intro}</p>
            <div className="actions">
              <External href={profile.linkedin} className="btn">Connect on LinkedIn</External>
              <External href={profile.github} className="btn btn-ghost">GitHub</External>
            </div>
          </div>

          <figure className="hero-figure">
            <Suspense fallback={<div className="hub-scene" />}>
              <HubScene />
            </Suspense>
            <figcaption>An illustration of the 90+ Azure subscriptions our two-person cloud team supports</figcaption>
          </figure>
        </section>

        <dl className="readout">
          {readout.map((r) => (
            <div key={r.label}>
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>

        <section id="work" className="section">
          <h2 className="section-title">Work</h2>
          {work.map((org) => (
            <div className="org" key={org.org}>
              <h3 className="org-name">{org.org}</h3>
              <ol className="roles">
                {org.roles.map((role) => (
                  <li className="role" key={role.title}>
                    <p className="role-dates">{role.dates}</p>
                    <div>
                      <h4 className="role-title">{role.title}</h4>
                      <ul className="role-points">
                        {role.points.map((point) => <li key={point}>{point}</li>)}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <p className="section-lede">Academic projects in distributed systems, machine learning, and systems programming.</p>
          <ul className="projects">
            {projects.map((p) => (
              <li className="project" key={p.name}>
                <p className="project-lang">{p.lang}</p>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.description}</p>
                {p.link
                  ? <External href={p.link} className="project-link">View code on GitHub</External>
                  : <p className="project-link project-link-muted">Academic project; no public repository</p>}
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="skill-group">{s.group}</h3>
                <ul className="skill-items">
                  {s.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <h3 className="skill-group credentials-title">Certifications & education</h3>
          <ul className="credentials">
            {credentials.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-line">Want to talk cloud, automation, or AI?</p>
        <div className="actions">
          <External href={profile.linkedin} className="btn">Connect on LinkedIn</External>
          <External href={profile.github} className="btn btn-ghost">GitHub</External>
        </div>
        <p className="footer-meta">Figures as of {asOf}</p>
      </footer>
    </>
  )
}

export default App
