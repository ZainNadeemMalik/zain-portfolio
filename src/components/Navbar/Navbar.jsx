import styles from "./Navbar.module.css"

export const Navbar = ({ handleSetIsActive }) => {
  return (
    <>
    <span id="top"></span>
    <header className={styles.header}>
      {/* <span id="top"></span> */}
      <nav className={styles.nav}>
        <ul className={styles.navUl}>
          <li><a href="#top">home</a></li>
          <li><a href="#projectsSection">projects</a></li>
          <li><a href="#top" onClick={() => handleSetIsActive()}>contact</a></li>
          <li className={styles.moonButtonContainer}>
            <button className={styles.moonButton}>🌙</button>
            <span className={styles.moonButtonMsg}>Dark mode is better. <br /> Let's just stick with that.</span>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}