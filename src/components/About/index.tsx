import React from "react"
import classes from "./styles.module.scss"

const About: React.FC = () => {
  return (
    <section className={classes.section}>
      <figure className={classes.me}>
        <img src="/me.jpg" alt="Yash Mahalwal" />
      </figure>
      <div className="container">
        <h2 className="hidden-all">Who am I?</h2>
        <p>
          <strong>
            Hi there! My name is Yash Mahalwal. I am a computer science
            undergrad living in India.
          </strong>{" "}
          I'm passionate about bringing ideas to life. My driving principle is
          quality and I have a no compromise attitude towards it. I have worked
          with full stack web technologies for three years and will be working
          with big data analytics in the coming months.
        </p>
        <br />
        <p>
          I'm in the final year of my bachelor's at Maulana Azad National
          Insitute of Technology, Bhopal. I am known for my in depth knowledge
          of technology and the ability to rapidly pick up concepts. My
          experience with modern technologies helps me create elegant, scalable,
          intuitive &amp; accessible applications and my broad technical
          skillset allows me to work with teams of various sizes to deliver high
          quality software. I love challanges and believe in simple &amp;
          innovative solutions.
        </p>
        <br />
        My belief is that little things go a long way and that reflects in every
        aspect of my work. I trust that imparting knowledge is an essential way
        of enriching the community, which is why I actively write techincal
        blogs and articles. When I'm not working, you will find me taking long
        walks or reading up on the latest cool tech. Want to know more about me?
        Check out my{" "}
        <a href="/Resume.pdf" className={classes.resumeLink} download>
          resume
        </a>
        .
      </div>
    </section>
  )
}

export default About
