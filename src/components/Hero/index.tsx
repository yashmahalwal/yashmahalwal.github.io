import clsx from "clsx"
import React, { useState } from "react"
import Cat from "../Cat"
import { isOnTablet } from "../utils/isOnDevice"
import classes from "./styles.module.scss"

interface Props {
  onLoad: () => void
}
const Hero: React.FC<Props> = ({ onLoad }) => {
  const [showDetails, setshowDetials] = useState(false)

  return (
    <section className={classes.section}>
      <h2 className={"hidden"} aria-live="polite">
        {showDetails ? "Personal Portfolio" : "Loading"}
      </h2>
      <Cat
        showName={showDetails}
        onLoad={() => {
          setshowDetials(true)
          onLoad()
        }}
      />
      <ul className={clsx(classes.nav, showDetails && classes.visible)}>
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
