import styles from "./ProjectsCard.module.css"

export const ProjectsCard = ({ project }) => {
  return (
    <article className={styles.project}>
      <div className={styles.projectImgContainer}>
        <img src={project.img} alt="" loading="lazy" />
      </div>
      <div className={styles.projectText}>
        <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        </div>
        <div className={styles.technologies}>
          {project.technologies.map((technology, index) => <p key={index}>{technology}</p>)}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" title={project.title}>Live Link</a>
      </div>
    </article>
  )
}