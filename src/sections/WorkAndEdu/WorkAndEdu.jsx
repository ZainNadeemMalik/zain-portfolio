import { useState } from "react"
import styles from "./WorkAndEdu.module.css"
import { WorkAndEduCard } from "./WorkAndEduCard"


export const WorkAndEdu = () => {

  const [activeSection, setActiveSection] = useState("work")

  const work = [
    {
      id: 1,
      date: "Jan 2025 - Mar 2025",
      establishment: "Trio Nexus",
      title: "Frontend Developer",
      description: "Developed the frontend for a multi-service platform integrating law, education, and tech services",
      // img: "./triologo.jpeg"
    },
    {
      id: 2,
      date: "Dec 2024",
      establishment: "Banking Law AI",
      title: "Software Engineer Consultant (Contract)",
      description: "Analyzed performance issues for a blog website impacting speed and recommended optimizations to enhance load times and user experience",
      // img: "./bankinglawai-logo.jpeg"
    }
  ];

  const education = [
    {
      id: 1,
      date: "Jul 2024 - Dec 2024",
      title: "Full Stack JavaScript Course",
      establishment: "The Odin Project"
    },
    {
      id: 2,
      date: "Jan 2024 - Jun 2024",
      title: "Web Development Course",
      establishment: "freeCodeCamp"
    },
    {
      id: 3,
      date: "Jan 2022 - Jan 2026",
      title: "BS in Communication and Journalism",
      establishment: "University of the Punjab",
      // img: "./punjabuniversity-logo.png"
    },

    {
      id: 4,
      date: "Jan 2020 - Jan 2022",
      title: "Intermediate in Commerce",
      establishment: "Education Board of Punjab",
      // img: "./lahoreboard-logo.jpg"
    }
  ]

  return (
    <section className={styles.workAndEdu}>

      <div className={styles.workAndEduButtonsContainer}>
        <button className={activeSection === "work" ? "active" : ""} onClick={() => setActiveSection("work")}>Work</button>
        <button className={activeSection === "education" ? "active" : ""} onClick={() => setActiveSection("education")}>Education</button>
      </div>

      {activeSection === "work" && <div className={styles.work}>
        {work.map((item) => (
          <WorkAndEduCard key={item.id} object={item}/>
        ))}
      </div>}
      
      {activeSection === "education" && <div className={styles.education}>
        {education.map((item) => (
          <WorkAndEduCard key={item.id} object={item}/>
        ))}
      </div>}
    </section>
  )
}