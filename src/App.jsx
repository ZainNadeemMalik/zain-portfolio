import { Navbar } from "./components/Navbar/Navbar"
import { Main } from "./components/Main/Main"
import { useState } from "react"
import { Footer } from "./components/Footer/Footer"
function App() {
  const [isActive, setIsActive] = useState(false)

  const handleSetIsActive = () => {
    setIsActive(true)
    setTimeout(() => {
      setIsActive(false)
    }, 3000);
  }


  return (
    <>
    <Navbar handleSetIsActive={handleSetIsActive}/>
    <Main isActive={isActive} />
    <Footer />
    </>
  )
}

export default App
