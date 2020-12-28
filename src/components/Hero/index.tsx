import React from "react"
import Cat from "../Cat"
import classes from "./styles.module.scss"

interface Props {
  onLoad: () => void
}
const Hero: React.FC<Props> = ({ onLoad }) => {
  return (
    <section className={classes.section}>
      <Cat onLoad={onLoad} />
    </section>
  )
}

export default Hero
