import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import React, { AnchorHTMLAttributes } from "react"
import classes from "./styles.module.scss"

const IconButton: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  return (
    <a target="_blank" className={classes.icon} {...props}>
      {children}
    </a>
  )
}

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
        <div className={classes.iconHolder}>
          <IconButton href="https://www.linkedin.com/in/yashmahalwal/">
            <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
          </IconButton>
          <IconButton href="https://www.facebook.com/yashmahalwal/">
            <FontAwesomeIcon size="lg" icon={faFacebookF} />
          </IconButton>
          <IconButton href="mailto:yashmahalwal@gmail.com">
            <FontAwesomeIcon size="lg" icon={faEnvelope} />
          </IconButton>
        </div>
      </div>
    </section>
  )
}

export default Contact
