import { profile } from '../data/content.js'
import styles from './About.module.css'

function About() {
  return (
    <section id="about" className="section">
      <p className="section-label">01 / About</p>
      <h2 className="section-title">A bit about me</h2>
      <p className={styles.body}>{profile.about}</p>
      <p className={styles.meta}>
        <span className={styles.metaLabel}>Based in</span> {profile.location}
      </p>
    </section>
  )
}

export default About
