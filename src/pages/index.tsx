import React, { useState } from "react"
import { PageProps } from "gatsby"
import "../components/layout.css"
import "../components/overrides.css"
import Projects from "../components/Projects"
export type ProjectNames = "Megatreopuz" | "Nirikshak"

const Index: React.FC<PageProps> = () => {
  const [current, setCurrent] = useState<ProjectNames>("Megatreopuz")
  return (
    <>
      <div style={{ height: "100vh" }}></div>
      <Projects current={current} />
      <button
        style={{
          position: "fixed",
          top: 0,
          left: 0,
        }}
        onClick={() =>
          setCurrent(c => (c == "Megatreopuz" ? "Nirikshak" : "Megatreopuz"))
        }
      >
        Toggle Project
      </button>
      <div style={{ height: "100vh" }}></div>
    </>
  )
}

export default Index
