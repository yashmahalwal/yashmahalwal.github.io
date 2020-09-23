import React, { useState, useRef, useEffect, useMemo } from "react"
import classes from "./styles.module.scss"
import clsx from "clsx"
import { ProjectNames } from "../../pages"

interface Props {
  current: ProjectNames
}

interface CardProps extends Props {}
const ProjectCards: React.FunctionComponent<CardProps> = ({
  current: globalCurrent,
}) => {
  // Visibility toggle
  const [enter, setEnter] = useState(false)
  // The current project kept in internal state for the transition sync
  const [current, setCurrent] = useState(globalCurrent)
  // For intersection observer
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // When the section mounts, set up an initial intersection observer
    if (sectionRef.current !== null) {
      const observer = new IntersectionObserver(
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
    } else setCurrent(globalCurrent)
  }, [globalCurrent])

  // Content of the card
  const [projectTheme, title, subtitle] = useMemo(() => {
    switch (current) {
      case "Megatreopuz":
        return [
          classes.megatreopuz,
          "Megatreopuz",
          "A secure, scalable and powerful cryptic hunt platform",
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
    <article ref={sectionRef} className={classes.exhibition}>
      {/* The simple background */}
      <div
        className={clsx(
          classes.defaultDimension,
          classes.labelBackground,
          enter && classes.enterCard,
          projectTheme
        )}
      ></div>
      {/* The background pattern */}
      <div
        className={clsx(
          classes.defaultDimension,
          classes.labelImageBackground,
          enter && classes.enterCard,
          projectTheme
        )}
      ></div>
      {/* The content card */}
      <div
        className={clsx(
          classes.defaultDimension,
          classes.labelCard,
          projectTheme
        )}
      >
        {/* Title */}
        <h3
          className={clsx(
            classes.title,
            classes.opacityTransition,
            enter && classes.opacityEnter
          )}
        >
          {title}
        </h3>
        {/* Subtitle */}
        <h4
          className={clsx(
            classes.subtitle,
            classes.opacityTransition,
            enter && classes.opacityEnter
          )}
        >
          {subtitle}
        </h4>
        {/* The button */}
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
    </article>
  )
}

const projects: { name: ProjectNames; alt: string; logo: string }[] = [
  { name: "Megatreopuz", logo: "/megatreopuz-logo.png", alt: "Megatreopuz" },
  { name: "Nirikshak", logo: "/nirikshak-logo.png", alt: "Nirikshak" },
]

interface ButtonProps extends Props {
  updateState: (project: ProjectNames) => void
}

const Buttons: React.FunctionComponent<ButtonProps> = ({ updateState }) => {
  return (
    <ol className={classes.projectList}>
      {projects.map(p => (
        <li className={classes.projectBadge} key={p.name}>
          <button onClick={() => updateState(p.name)}>
            <img src={p.logo} alt={p.alt} />
          </button>
        </li>
      ))}
    </ol>
  )
}

interface ProjectProps extends ButtonProps {}
const Projects: React.FunctionComponent<ProjectProps> = ({
  current,
  updateState,
}) => {
  return (
    <section className={classes.section}>
      <ProjectCards current={current} />
      <Buttons updateState={updateState} current={current} />
    </section>
  )
}

export default Projects
