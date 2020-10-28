import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faLinkedinIn,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons"
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
    <footer className={classes.section}>
      <div className="container">
        <h2 className={classes.heading}>I'd love to hear from you!</h2>
        <p className={classes.content}>
          If you want a powerful, elegant and cutting edge modern web
          application - I'm your guy. My driving principle is quality and I have
          a strict "no-compromise" attitude towards it. I am available for
          freelance and full-time opportunities.
        </p>
        <div className={classes.iconHolder}>
          <IconButton href="https://www.linkedin.com/in/yashmahalwal/">
            <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
            <span className="hidden">LinkedIn</span>
          </IconButton>
          <IconButton href="https://www.facebook.com/yashmahalwal/">
            <FontAwesomeIcon size="lg" icon={faFacebookF} />
            <span className="hidden">Facebook</span>
          </IconButton>
          <IconButton href="mailto:yashmahalwal@gmail.com">
            <FontAwesomeIcon size="lg" icon={faEnvelope} />
            <span className="hidden">Email</span>
          </IconButton>
          <IconButton href="https://medium.com/@yashmahalwal">
            <FontAwesomeIcon size="lg" icon={faMediumM} />
            <span className="hidden">Medium</span>
          </IconButton>
        </div>
      </div>
    </footer>
  )
}

export default Contact
