import styles from "./WorkAndEduCardStyles.module.css"

export const WorkAndEduCard = ({ object }) => {
  return (
    <article className={styles.workAndEduCard}>

        {/* <div className={styles.workAndEduCardImgContainer}>
          <img src={object.img} alt="place-img" width={50} height={50}/>
        </div> */}

        <div className={styles.workAndEduCardText}>

          <div className={styles.workAndEduCardTitleText}>

            <p>{object.date}</p>
            <h3>{object.title}</h3>
            <p>{object.establishment}</p>

          </div>

          <ul className={styles.workAndEduCardDescription}>
            {object.description && <li>{object.description}</li>}
          </ul>

        </div>
    </article>
  )
}