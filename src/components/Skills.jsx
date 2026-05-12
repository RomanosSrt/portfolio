import { skills } from '../data/content.js'
import styles from './Skills.module.css'

function Skills() {
  // Object.entries turns { "Cloud & DevOps": [...] } into [["Cloud & DevOps", [...]]]
  // so we can map over it like a regular list.
  const categories = Object.entries(skills)

  return (
    <section id="skills" className="section">
      <p className="section-label">04 / Skills</p>
      <h2 className="section-title">Tools of the trade</h2>

      <div className={styles.grid}>
        {categories.map(([category, items]) => (
          <div key={category} className={styles.group}>
            <h3 className={styles.category}>{category}</h3>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
