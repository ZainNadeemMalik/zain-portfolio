import styles from "./Hero.module.css"

export const Hero = ({ isActive }) => {
  return (
    <section className={styles.hero}>

      <div className={styles.heroText}>
        
        <div className={styles.titleContainer}>
          <h1>hi Zain here</h1>
          <div className={styles.wavingHand}>👋</div>
        </div>


        <p className={styles.heroDescription}>21 year old Full-stack developer from Lahore, Pakstan. I have hands-on experience building responsive, user-friendly web-applications in React, Next.js and Express.js. Hobbies include fitness and cinema.</p>

        <p className={styles.openForWork}>Contact for work:</p>

        <div className={`${styles.resumeAndSocialsContainer} ${isActive ? styles.active: ""}`}>
          <a href="/Zain_Malik_Frontend_Resume.pdf" download="Zain_Malik_Developer_Resume" className={styles.resume}>Resume</a>
          <a href="https://github.com/ZainNadeemMalik" target="_blank" rel="noopener noreferrer" title="Github">
            <img src="./github-logo.png" alt="github-icon" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com/in/zain-nadeem-malik/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src="./linkedin-logo.webp" width={30} height={30} alt="" />
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=zainnadeemmalik568@gmail.com" className={styles.gmailDesktopLink} target="_blank" rel="noopener noreferrer" title="Email">
          <img src="./gmail-logo.png" alt="" />
          </a>

          <a href="mailto:zainnadeemmalik568@gmail.com" className={styles.gmailMobileLink} target="_blank" rel="noopener noreferrer" title="Email">
          <img src="./gmail-logo.png" alt="" />
          </a>

        </div>

      </div>

      <div className={styles.heroImg}>
        <img src="./hero-img.png" alt="hero-img" />
  
      </div>



    </section>
  )
}

