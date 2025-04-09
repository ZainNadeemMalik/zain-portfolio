import { Hero } from "../../sections/Hero/Hero"
import { WorkAndEdu } from "../../sections/WorkAndEdu/WorkAndEdu"
import { Projects } from "../../sections/Projects/Projects"
import { Technologies } from "../../sections/Technologies/Technologies"

export const Main = ({ isActive }) => {
  return (
    <main>
    <Hero isActive={isActive}/>
    <WorkAndEdu />
    <Projects />
    <Technologies />
    </main>
  )
}