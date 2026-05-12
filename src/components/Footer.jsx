import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Romanos Sarantidis. Built with React.
      </p>
    </footer>
  )
}

export default Footer
