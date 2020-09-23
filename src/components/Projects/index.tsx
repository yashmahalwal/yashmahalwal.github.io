import React, { useState, useRef, useEffect, useMemo } from "react"
import classes from "./styles.module.scss"
import clsx from "clsx"
import { ProjectNames } from "../../pages"

interface Props {
  current: ProjectNames
}
const Projects: React.FunctionComponent<Props> = ({
  current: globalCurrent,
}) => {
  const [enter, setEnter] = useState(false)
  const [current, setCurrent] = useState(globalCurrent)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // When the section mounts, set up an initial intersection observer
    if (sectionRef.current !== null) {
      let observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            setEnter(true)
            // Only one time action
            observer.unobserve(sectionRef.current!)
          }
        },
        {
          threshold: 0.8,
        }
      )
      observer.observe(sectionRef.current)

      return () => {
        // When unmounts, remove the observer
        // Multiple unobserve calls are not an error
        sectionRef.current && observer?.unobserve(sectionRef.current)
      }
    }
  }, [sectionRef.current])

  useEffect(() => {
    if (enter) {
      setEnter(false)
      // Ensure that the paint has completed
      requestAnimationFrame(() =>
        // Timeout to ensure that the exit animation has been completed
        setTimeout(() => {
          setEnter(true)
          setCurrent(globalCurrent)
          // 300ms is enough to push to next cycle
          // To let the previous CSS animations complete
          // Check SASS : 200ms animations + 100ms delay
        }, 300)
      )
    }
  }, [globalCurrent])

  const [projectTheme, title, subtitle] = useMemo(() => {
    switch (current) {
      case "Megatreopuz":
        return [
          classes.megatreopuz,
          "Megatreopuz",
          "A secure, scalable and powerful cryptic online hunt platform",
        ]
      case "Nirikshak":
        return [
          classes.nirikshak,
          "Nirikshak",
          "An autonomous REST API testing framework",
        ]
    }
  }, [current])
  return (
    <section ref={sectionRef} className={classes.section}>
      <div className={classes.exhibition}>
        <div
          className={clsx(
            classes.defaultDimension,
            classes.labelImageBackground,
            enter && classes.enterCard,
            projectTheme
          )}
        ></div>
        <div
          className={clsx(
            classes.defaultDimension,
            classes.labelBackground,
            enter && classes.enterCard,
            projectTheme
          )}
        ></div>
        <div
          className={clsx(
            classes.defaultDimension,
            classes.labelCard,
            projectTheme
          )}
        >
          <h3
            className={clsx(
              classes.title,
              classes.opacityTransition,
              enter && classes.opacityEnter
            )}
          >
            {title}
          </h3>
          <h4
            className={clsx(
              classes.subtitle,
              classes.opacityTransition,
              enter && classes.opacityEnter
            )}
          >
            {subtitle}
          </h4>
          <button
            className={clsx(
              classes.moreButton,
              classes.opacityTransition,
              enter && classes.opacityEnter,
              projectTheme
            )}
          >
            Know More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
