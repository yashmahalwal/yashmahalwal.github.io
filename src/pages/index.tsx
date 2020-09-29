import React, { useState } from "react"
import { PageProps } from "gatsby"
import "../components/layout.css"
import "../components/overrides.css"
import Projects from "../components/Projects"
import { Helmet } from "react-helmet"

export type ProjectNames = "Megatreopuz" | "Nirikshak"

const Index: React.FC<PageProps> = () => {
  const [current, setCurrent] = useState<ProjectNames>("Megatreopuz")
  return (
    <>
      <Helmet>
        <title>Yash Mahalwal - Web Development Solutions</title>
      </Helmet>
      <div style={{ height: "100vh" }}>
      </div>
      <Projects updateState={setCurrent} current={current} />
      <div style={{ height: "100vh" }}></div>
    </>
  )
}

export default Index
