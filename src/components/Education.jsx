import { education } from '../data/content.js'
import styles from './Education.module.css'

function Education() {
  return (
    <section id="education" className="section">
      <p className="section-label">05 / Education</p>
      <h2 className="section-title">Studies</h2>

      <div className={styles.list}>
        {education.map((edu, i) => (
          <div key={i} className={styles.entry}>
            <div className={styles.row}>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <span className={styles.period}>{edu.period}</span>
            </div>
            <p className={styles.school}>{edu.school}</p>
            <p className={styles.note}>{edu.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
