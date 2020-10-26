import React from "react"
import classes from "./styles.module.scss"

const Contact: React.FC = () => {
  return (
    <section className={classes.section}>
      <h2 className="hidden">Contact details</h2>
      <div className="container">
        <h3 className={classes.heading}>I'd love to hear from you!</h3>
        <p className={classes.content}>
          If you want a powerful, elegant and cutting edge modern web
          application - I'm your guy. My driving principle is quality and I have
          a strict "no-compromise" attitude towards it. I am available for
          freelance and full-time opportunities.
        </p>
      </div>
    </section>
  )
}

export default Contact
