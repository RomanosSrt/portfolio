import { profile } from '../data/content.js'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.role}>{profile.title}</p>
        <p className={styles.tagline}>{profile.tagline}</p>

        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>
            Get in touch
          </a>
          <a
            href={profile.cvUrl}
            className={styles.btnGhost}
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className={styles.photoWrap}>
        <img
          src={profile.photo}
          alt={profile.name}
          className={styles.photo}
        />
      </div>
    </section>
  )
}

export default Hero
