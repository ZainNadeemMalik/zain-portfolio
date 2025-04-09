import styles from "./Projects.module.css"
import { ProjectsCard } from "./ProjectsCard"

export const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Behas",
      description: "A real-time full-stack chat application with secure user authentication, built using Socket.IO and Zustand. Features include live messaging, active user tracking, and a modern responsive UI powered by Tailwind CSS and TypeScript.",
      technologies: ["react", "typescript", "express.js", "socket.IO", "tailwind", "zustand" ],
      link: "https://melodic-gingersnap-604d63.netlify.app/",
      img: "./behasimg.png"
    },
    {
      id: 2,
      title: "Digital Mandi",
      description: "A fast, responsive e-commerce platform built with Next.js and TypeScript. It features dynamic product pages, a persistent shopping cart using the Context API, and a clean, mobile-first UI with Tailwind CSS.",
      technologies: ["next.js", "typescript", "tailwind",],
      link: "https://next-shopping-cart-pi.vercel.app/",
      img: "./shoppingcartimg.png"
    }
  ]

  return (
    <section className={styles.projectsSection} id="projectsSection">
      <div className={styles.wrapper}>

      <h2>Projects</h2>
      <div>
        {projects.map(project => <ProjectsCard key={project.id} project={project} />)}
      </div>
      </div>

    </section>
  )
}