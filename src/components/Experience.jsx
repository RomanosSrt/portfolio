import { experience } from '../data/content.js'
import styles from './Experience.module.css'

function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-label">02 / Experience</p>
      <h2 className="section-title">Where I've worked</h2>

      <ol className={styles.timeline}>
        {experience.map((job, i) => (
          <li key={i} className={styles.item}>
            <div className={styles.dot} aria-hidden="true" />
            <div className={styles.content}>
              <div className={styles.header}>
                <h3 className={styles.role}>{job.role}</h3>
                <span className={styles.period}>{job.period}</span>
              </div>
              <p className={styles.company}>{job.company}</p>
              <ul className={styles.bullets}>
                {job.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
