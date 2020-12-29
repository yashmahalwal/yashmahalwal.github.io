import clsx from "clsx"
import React, { useState } from "react"
import Cat from "../Cat"
import classes from "./styles.module.scss"

interface Props {
  onLoad: () => void
}
const Hero: React.FC<Props> = ({ onLoad }) => {
  const [showNav, setShowNav] = useState(false)

  return (
    <section className={classes.section}>
      <h2 className={classes.heading}>Yash Mahalwal</h2>
      <Cat
        showName={showNav}
        onLoad={() => {
          setTimeout(
            () => setShowNav(true),
            window.matchMedia("(max-width: 768px) ").matches ? 2000 : 4200
          )
          onLoad()
        }}
      />
      <ul className={clsx(classes.nav, showNav && classes.visible)}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">My Journey</a>
        </li>
        <li>
          <a href="#">Work</a>
        </li>
        <li>
          <a href="#">Contact Details</a>
        </li>
      </ul>
    </section>
  )
}

export default Hero
