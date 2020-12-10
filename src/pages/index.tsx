import React, { useState } from "react"
import { PageProps } from "gatsby"
import "../components/layout.css"
import "../components/overrides.css"
import Projects from "../components/Projects"
import { Helmet } from "react-helmet"
import Contact from "../components/Contact"
import About from "../components/About"
import Experience from "../components/Experience"

export type ProjectNames = "Megatreopuz" | "Nirikshak"

const Index: React.FC<PageProps> = () => {
  return (
    <>
      <main>
        <Helmet>
          <title>Yash Mahalwal - Web Development Solutions</title>
        </Helmet>
        <h1 className="hidden">Yash Mahalwal - Web Development Solutions</h1>
        <div style={{ height: "100vh" }}></div>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default Index
