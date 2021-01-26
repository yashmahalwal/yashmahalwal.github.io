import React, { useState } from "react"
import { PageProps } from "gatsby"
import "../components/layout.css"
import "../components/overrides.css"
import Projects from "../components/Projects"
import { Helmet } from "react-helmet"
import Contact from "../components/Contact"
import About from "../components/About"
import Experience from "../components/Experience"
import Hero from "../components/Hero"
import clsx from "clsx"
import Header from "../components/Header"

export type ProjectNames = "Megatreopuz" | "Nirikshak"

const Index: React.FC<PageProps> = () => {
  const [isLoading, setLoading] = React.useState(true)
  const heroRef = React.useRef<HTMLDivElement>(null)
  const aboutRef = React.useRef<HTMLDivElement>(null)
  const experienceRef = React.useRef<HTMLDivElement>(null)
  const projectsRef = React.useRef<HTMLDivElement>(null)
  const contactRef = React.useRef<HTMLDivElement>(null)

  const refList = React.useMemo(() => {
    return [
      { title: "Home", ref: heroRef.current },
      { title: "About", ref: aboutRef.current },
      { title: "My Journey", ref: experienceRef.current },
      { title: "Work", ref: projectsRef.current },
      { title: "Contact", ref: contactRef.current },
    ]
  }, [
    aboutRef.current,
    experienceRef.current,
    projectsRef.current,
    contactRef.current,
  ])

  return (
    <>
      <main>
        <Helmet>
          <title>Yash Mahalwal - Portfolio</title>
        </Helmet>
        <Hero onLoad={() => setLoading(false)} ref={heroRef} />

        <div className={clsx(isLoading && "hidden-all")}>
          <Header list={refList} />
          <About ref={aboutRef} />
          <Experience ref={experienceRef} />
          <Projects ref={projectsRef} />
          <Contact ref={contactRef} />
        </div>
      </main>
    </>
  )
}

export default Index
