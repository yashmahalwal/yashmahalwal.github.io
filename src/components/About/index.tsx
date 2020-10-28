import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import React, { AnchorHTMLAttributes } from "react"
import classes from "./styles.module.scss"
import clsx from "clsx"

const About: React.FC = () => {
  return (
    <section className={classes.section}>
      <figure className={classes.me}>
        <img src="/me.jpg" alt="Yash Mahalwal" />
      </figure>
      <div className="container">
        <h2 className={classes.heading}>Who am I?</h2>
        <p>
          <strong>
            Hi there! My name is Yash Mahalwal. I am a full stack web developer
            living in India.
          </strong>{" "}
          I have a passion for bringing ideas to life and web is my canvas. My
          driving principle is quality and I have a no compromise attitude
          towards it.
        </p>
        <br />
        <p>
          I am an computer science undergraduate at Maulana Azad National
          Insitute of Technology, Bhopal. My 2.5+ years of experience with
          modern technologies helps me create elegant, scalable, intuitive and
          accessible applications. My broad technical skillset allows me to work
          with teams of various sizes to deliver high quality software. I love
          challanges and believe in simple & innovative solutions.
        </p>
        <br />
        My belief is that little things go a long way and that reflects in every
        aspect of my work. I trust that imparting knowledge is an essential way
        of enriching the community. That is why I actively write techincal blogs
        and articles. You can find out more about my education, experience and
        skills in my{" "}
        <a href="/Resume.pdf" className={classes.resumeLink} download>
          resume
        </a>
        .
      </div>
    </section>
  )
}

export default About
