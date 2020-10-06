import React, { useState, useRef, useEffect, useMemo } from "react"
import classes from "./styles.module.scss"
import clsx from "clsx"
import { ProjectNames } from "../../pages"
import global from "../../../global.css"
import Megatreopuz from "./Megatreopuz"
import closeClasses from "./close.module.scss"
import { useEffectExceptMount } from "../utils/useEffectExceptMount"
interface Props {
  current: ProjectNames
  updateState: (project: ProjectNames) => void
}

interface CardProps extends Props {
  expanded: boolean
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

function check(element: HTMLElement | null, callback: () => void) {
  if (!element) return
  if (Math.abs(document.documentElement.scrollTop - element.offsetTop) > 10)
    requestAnimationFrame(() => check(element, callback))
  else callback()
}

const ProjectCards: React.FunctionComponent<CardProps> = ({
  current: globalCurrent,
  updateState,
  expanded,
  setExpanded,
}) => {
  // Visibility toggle
  const [enter, setEnter] = useState(false)
  // Expansion toggle
  const [expandedState, setExpandedState] = useState(expanded)
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

  useEffectExceptMount(() => {
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

  useEffectExceptMount(() => {
    const animationTimeout = 1400

    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
    })

    requestAnimationFrame(() =>
      check(sectionRef.current, () => {
        if (expanded) {
          setExpandedState(true)
          setTimeout(() => {
            document.getElementById("project-details")?.scrollIntoView({
              behavior: "smooth",
            })
          }, animationTimeout)
        } else setTimeout(() => setExpandedState(false), animationTimeout)
      })
    )
  }, [expanded])
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
    <article id="project-cards" ref={sectionRef} className={classes.exhibition}>
      <div className={classes.cardHolder}>
        {/* The simple background */}
        <div
          className={clsx(
            classes.defaultDimension,
            classes.labelBackground,
            enter && !expandedState && classes.enterCard,
            projectTheme
          )}
        ></div>
        {/* The background pattern */}
        <div
          className={clsx(
            classes.defaultDimension,
            classes.labelImageBackground,
            enter && !expandedState && classes.enterCard,
            projectTheme
          )}
        ></div>
        {/* The content card */}
        <div
          className={clsx(
            classes.defaultDimension,
            classes.labelCard,
            projectTheme,
            expanded && classes.expandedCard
          )}
        >
          <div className={clsx(classes.innerCard, classes.defaultDimension)}>
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
              onClick={() => setExpanded(true)}
              className={clsx(
                classes.moreButton,
                classes.opacityTransition,
                enter && !expandedState && classes.opacityEnter,
                projectTheme
              )}
            >
              Know More
            </button>
          </div>
        </div>
      </div>
      <Buttons updateState={updateState} current={current} />
    </article>
  )
}

const projects: { name: ProjectNames; alt: string; logo: string }[] = [
  { name: "Megatreopuz", logo: "/megatreopuz-logo.png", alt: "Megatreopuz" },
  { name: "Nirikshak", logo: "/nirikshak-logo.png", alt: "Nirikshak" },
]

const Buttons: React.FunctionComponent<Props> = ({ updateState, current }) => {
  return (
    <div className={classes.projectListWrapper}>
      <ol className={classes.projectList}>
        {projects.map(p => (
          <li
            className={clsx(
              classes.projectBadge,
              current == p.name && classes.disabled
            )}
            key={p.name}
          >
            <button
              disabled={current == p.name}
              onClick={() => updateState(p.name)}
            >
              <img src={p.logo} alt={p.alt + " logo"} />
              <span className={global.hidden}>{p.name}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}

interface CloseProps {
  onClick: () => void
  visible: boolean
}

const Close: React.FunctionComponent<CloseProps> = ({ onClick, visible }) => {
  return (
    <button
      className={clsx(
        closeClasses.close,
        classes.opacityTransition,
        visible && classes.opacityEnter
      )}
      onClick={onClick}
    ></button>
  )
}

const Projects: React.FunctionComponent<Props> = props => {
  const [expanded, setExpanded] = useState(false)
  const [expandedState, setExpandedState] = useState(expanded)

  useEffectExceptMount(() => {
    requestAnimationFrame(() =>
      check(document.getElementById("project-cards"), () =>
        setExpandedState(expanded)
      )
    )
  }, [expanded])

  return (
    <section>
      <Close visible={expanded} onClick={() => setExpanded(false)} />
      <ProjectCards expanded={expanded} setExpanded={setExpanded} {...props} />
      <div id="project-details">{expandedState && <Megatreopuz />}</div>
    </section>
  )
}

export default Projects
