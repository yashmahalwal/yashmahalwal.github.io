import React from "react"
import { PageProps } from "gatsby"
import "../components/layout.css"
import Projects from "../components/Projects"

const Index: React.FC<PageProps> = () => {
  return (
    <>
      <Projects />
    </>
  )
}

export default Index
