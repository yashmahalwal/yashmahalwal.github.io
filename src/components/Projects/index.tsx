import React, { useState, useRef, useEffect, useLayoutEffect } from "react"
import classes from "./styles.module.scss"
import clsx from "clsx"
const Projects: React.FunctionComponent = () => {
  const [enter, setEnter] = useState(false)
  const [current, setCurrent] = useState<"Megatreopuz" | "Nirikshak">(
    "Megatreopuz"
  )
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // When the section mounts, set up an initial intersection observer
    if (sectionRef.current) {
      let observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            setEnter(true)
            observer.unobserve(sectionRef.current!)
          }
        },
        {
          threshold: 0.8,
        }
      )
      observer.observe(sectionRef.current)
    }
  }, [sectionRef.current])

  return (
    <section ref={sectionRef} className={classes.section}>
      <div className={classes.exhibition}>
        <div
          className={clsx(
            classes.defaultDimension,
            classes.labelImageBackground,
            enter && classes.enter,
            classes.megatreopuz
          )}
        ></div>
        <div
          className={clsx(
            classes.defaultDimension,
            classes.labelBackground,
            enter && classes.enter,
            classes.megatreopuz
          )}
        ></div>
        <div
          className={clsx(
            classes.defaultDimension,
            classes.labelCard,
            classes.megatreopuz
          )}
        >
          <h3 className={clsx(classes.title, enter && classes.titleEnter)}>
            {current}
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Projects
