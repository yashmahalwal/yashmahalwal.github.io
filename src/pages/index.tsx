import React, { useState } from "react"
import { PageProps } from "gatsby"
import "../components/layout.css"
import "../components/overrides.css"
import Projects from "../components/Projects"
import { Helmet } from "react-helmet"

export type ProjectNames = "Megatreopuz" | "Nirikshak"

const Index: React.FC<PageProps> = () => {
  return (
    <>
      <Helmet>
        <title>Yash Mahalwal - Web Development Solutions</title>
      </Helmet>
      <div style={{ height: "100vh" }}></div>
      <Projects />
      <div
        style={{ height: "200vh", position: "relative", background: "#ececec" }}
      ></div>
    </>
  )
}

export default Index
