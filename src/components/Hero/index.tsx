import React, { useState } from "react"
import Cat from "../Cat"
import classes from "./styles.module.scss"

interface Props {
  onLoad: () => void
}
const Hero = React.forwardRef<HTMLDivElement, Props>(({ onLoad }, ref) => {
  const [showDetails, setshowDetials] = useState(false)

  return (
    <section id="home" className={classes.section} ref={ref}>
      <h1 className="hidden">Yash Mahalwal.</h1>
      <h2 className={"hidden"} aria-live="polite">
        {showDetails ? "Personal Portfolio" : "Loading"}.
      </h2>
      <Cat
        showName={showDetails}
        onLoad={() => {
          setshowDetials(true)
          onLoad()
        }}
      />
    </section>
  )
})

export default Hero
