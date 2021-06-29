import React from "react"
import classes from "./styles.module.scss"
import {
  faBirthdayCake,
  faSchool,
  faGraduationCap,
  faBriefcase,
  faCheck,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const list = [
  {
    icon: faBirthdayCake,
    title: "October 1998",
    description:
      "Started my journey on a beautiful adventure in New Delhi, India",
  },
  {
    icon: faSchool,
    title: "July 2017",
    description:
      "Started school at Maulana Azad National Institute of Technology",
  },
  {
    icon: faBriefcase,
    title: "January 2019",
    description: "Product development internship at Appointy IT Pvt Ltd",
  },
  {
    icon: faCheck,
    title: "December 2020",
    description: "Completed internship at Appointy IT Pvt Ltd",
  },
  {
    icon: faBriefcase,
    title: "January 2021",
    description: "Started as a analyst intern at American Express",
  },
  {
    icon: faCheck,
    title: "June 2021",
    description: "Completed internship at American Express",
  },
  {
    icon: faGraduationCap,
    title: "July 2021",
    description: "Graduate from Maulana Azad National Institute of Technology",
  },
]

const Experience = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section tabIndex={-1} className={classes.section} ref={ref}>
      <h2 className="hidden">My Journey and Experiences.</h2>
      <div className={"container"}>
        <ol className={classes.holder}>
          {list.map((e, i) => (
            <li key={i}>
              <div className={classes.card}>
                <FontAwesomeIcon size="2x" icon={e.icon} />
                <h3>
                  {e.title}
                  <span className="hidden">.</span>
                </h3>
                <p>
                  {e.description}
                  <span className="hidden">.</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
})

Experience.displayName = "Experience"

export default Experience
