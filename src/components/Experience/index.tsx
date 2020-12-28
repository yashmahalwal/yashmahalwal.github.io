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
    title: "May 2019",
    description: "Product development internship at Appointy IT Pvt Ltd",
  },
  {
    icon: faCheck,
    title: "April 2020",
    description: "Completed internship at Appointy IT Pvt Ltd",
  },
  {
    icon: faBriefcase,
    title: "January 2021",
    description: "Start as a CFR intern at American Express",
  },
  {
    icon: faCheck,
    title: "July 2021",
    description: "Complete internship at American Express",
  },
  {
    icon: faGraduationCap,
    title: "July 2021",
    description: "Graduate from Maulana Azad National Institute of Technology",
  },
]

const Experience: React.FC = () => {
  return (
    <section className={classes.section}>
      <h2 className="hidden-all">My Journey and Experiences</h2>
      <div className={"container"}>
        <ol className={classes.holder}>
          {list.map((e, i) => (
            <li key={i}>
              <div className={classes.card}>
                <FontAwesomeIcon size="2x" icon={e.icon} />
                <h3>{e.title}</h3>
                <p>{e.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
