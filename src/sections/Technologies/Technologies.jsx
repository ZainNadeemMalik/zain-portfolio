import styles from "./Technologies.module.css"

export const Technologies = () => {
  return (
    <section className={styles.technologies}>
      <div className={styles.wrapper}>
        <h2>Technologies</h2>
        <div className={styles.technologiesContainer}>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>Typescript</p>
          <p>React</p>
          <p>Next.js</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>SQL</p>
          <p>PostgreSQL</p>
          <p>Git/Github</p>
          <p>Tailwind</p>
        </div>

      </div>
    </section>
  )
}