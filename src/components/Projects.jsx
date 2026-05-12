import { projects } from '../data/content.js'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-label">03 / Projects</p>
      <h2 className="section-title">Things I've built</h2>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <article key={i} className={styles.card}>
            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.desc}>{p.description}</p>
            <ul className={styles.tags}>
              {p.tags.map((t) => (
                <li key={t} className={styles.tag}>
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
