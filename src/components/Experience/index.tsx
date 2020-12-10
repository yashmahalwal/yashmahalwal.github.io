import clsx from "clsx"
import React from "react"
import classes from "./styles.module.scss"

const list = [
  {
    title: "July 2017",
    description:
      "Started school at Maulana Azad National Institute of Technology",
  },
  {
    title: "May 2019",
    description: "Product development internship at Appointy IT Pvt Ltd",
  },
  {
    title: "April 2020",
    description: "Completed internship at Appointy IT Pvt Ltd",
  },
  {
    title: "January 2021",
    description: "Start as a CFR intern at American Express",
  },
  {
    title: "July 2021",
    description: "Complete internship at American Express",
  },
  {
    title: "July 2021",
    description: "Graduate from Maulana Azad National Institute of Technology",
  },
]

const Experience: React.FC = () => {
  return (
    <section className={classes.section}>
      <h2 className="hidden">Experience</h2>
      <div className={"container"}>
        <ol className={classes.holder}>
          {list.map((e, i) => (
            <li key={i}>
              <div className={classes.card}>
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
