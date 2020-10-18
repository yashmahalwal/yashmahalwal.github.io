import clsx from "clsx"
import React from "react"
import classes from "./styles.module.scss"
interface Props {
  visible: boolean
}

const Spider: React.FC<Props> = ({ visible }) => {
  return (
    <div className={clsx(classes.spider, visible && classes.enter)}>
      <div className={classes.spiderweb}>
        <div className={classes.body}>
          <div className={clsx(classes.eye, classes.left)}></div>
          <div className={clsx(classes.eye, classes.right)}></div>
        </div>
        <div className={clsx(classes.legs, classes.left)}>
          <div className={classes.leg}></div>
          <div className={classes.leg}></div>
          <div className={classes.leg}></div>
        </div>
        <div className={clsx(classes.legs, classes.right)}>
          <div className={classes.leg}></div>
          <div className={classes.leg}></div>
          <div className={classes.leg}></div>
        </div>
      </div>
    </div>
  )
}

export default Spider
