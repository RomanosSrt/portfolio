import { profile } from '../data/content.js'
import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className="section">
      <p className="section-label">06 / Contact</p>
      <h2 className="section-title">Let's talk</h2>

      <p className={styles.intro}>
        I'm open to junior DevOps and software engineering opportunities. The
        fastest way to reach me is by email — I usually reply within a day or
        two.
      </p>

      <div className={styles.links}>
        <a
          href={`mailto:${profile.email}`}
          className={styles.linkCard}
        >
          <span className={styles.linkLabel}>Email</span>
          <span className={styles.linkValue}>{profile.email}</span>
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className={styles.linkCard}
        >
          <span className={styles.linkLabel}>LinkedIn</span>
          <span className={styles.linkValue}>romanospsarantidis</span>
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className={styles.linkCard}
        >
          <span className={styles.linkLabel}>GitHub</span>
          <span className={styles.linkValue}>RomanosSrt</span>
        </a>
      </div>
    </section>
  )
}

export default Contact
