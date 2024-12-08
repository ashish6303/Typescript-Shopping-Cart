import React, { useContext } from 'react'
import { ThemeContext } from "../context/ThemeContext";


function About() {
  const theme = useContext(ThemeContext)

  return (
    <div style={{ background: theme === "dark" ? "black" : "white", color: "white" }}>
      <h1>About</h1>
    </div>
  )
}

export default About
