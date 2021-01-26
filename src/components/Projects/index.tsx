import React, { useState, useRef, useEffect, useMemo } from "react"
import classes from "./styles.module.scss"
import clsx from "clsx"
import { ProjectNames } from "../../pages"
import closeClasses from "./close.module.scss"
import { checkIfElementOnTop } from "../utils/checkTop"
import ProjectDescription from "./Description"
import useEffectExceptMount from "use-effect-except-mount"
import Opacity from "../Opacity"

const projects: { name: ProjectNames; alt: string; logo: string }[] = [
  { name: "Megatreopuz", logo: "/megatreopuz-logo.png", alt: "Megatreopuz" },
  { name: "Nirikshak", logo: "/nirikshak-logo.png", alt: "Nirikshak" },
]

interface ButtonsProps {
  current: ProjectNames
  updateState: React.Dispatch<React.SetStateAction<ProjectNames>>
  disabled?: boolean
}

interface CardProps {
  current: ButtonsProps["current"]
  updateState: ButtonsProps["updateState"]
  expanded: boolean
  loading: boolean
  expandCard: () => void
}

let observer: IntersectionObserver

const ProjectCards = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { current: globalCurrent, updateState, expanded, expandCard, loading },
    ref
  ) => {
    // Ref for the article. To check the scroll
    const articleRef = ref as React.RefObject<HTMLDivElement>
    // Visibility toggle: Card flip
    const [enter, setEnter] = useState(false)
    // The local expansion state for the transition sync
    const [expandedState, setExpandedState] = useState(expanded)
    // The current project kept in internal state for the transition sync
    const [current, setCurrent] = useState(globalCurrent)
    // The card with content
    const cardRef = useRef<HTMLDivElement>(null)
    // Delayed loading indicator: Better UX
    const [showLoading, setShowLoading] = useState(loading)
    // Loading indicator delay timer
    const timer = useRef<number>(-1)
    // Cards closed. Flip and open when in view
    useEffect(() => {
      // When the section mounts, set up an initial intersection observer
      if (articleRef.current === null) return

      // Cleanup - Remove listener and observer
      function cleanup() {
        articleRef.current?.removeEventListener("focus", listener)
        observer?.disconnect()
      }
      // Listener - when section is in view
      function listener() {
        // Only do it once. Then cleanup.
        setEnter(true)
        cleanup()
      }

      // Look for focus: By keyboard oe nav or other means w/o scroll
      articleRef.current.addEventListener("focus", listener, { capture: true })
      // Look for scroll into view

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry && entry.isIntersecting) {
            listener()
          }
        },
        {
          threshold: 0.8,
        }
      )

      observer.observe(articleRef.current)

      return cleanup
    }, [articleRef.current])

    useEffectExceptMount(() => {
      if (loading) {
        // Delay loading indicator
        timer.current = window.setTimeout(() => setShowLoading(true), 1500)
      } else {
        // If loading is over before delay, don't show the indicator
        clearTimeout(timer.current)
        setShowLoading(false)
      }
    }, [loading])

    // Opacity transition duration
    const opacityDuration = expandedState ? 300 : 100

    // Card flip on changing the current project
    useEffectExceptMount(() => {
      if (enter) {
        setEnter(false)
        // Ensure that the paint has completed
        setTimeout(
          () =>
            // Timeout to ensure that the exit animation has been completed
            requestAnimationFrame(() => {
              setEnter(true)
              setCurrent(globalCurrent)
              cardRef.current?.focus({ preventScroll: true })
              // 300ms is enough to push to next cycle
              // To let the previous CSS animations complete
              // Check SASS : 200ms animations + 100ms delay
            }),
          300
        )
      } else setCurrent(globalCurrent)
    }, [globalCurrent])

    // Delay expanded state for some components. Allow for animations to finish
    useEffectExceptMount(() => {
      if (expanded) setExpandedState(true)
      else setTimeout(() => setExpandedState(false), 1200)
    }, [expanded])

    // Content of the cards
    const [projectTheme, title, subtitle, slideNumber] = useMemo(() => {
      switch (current) {
        case "Megatreopuz":
          return [
            classes.megatreopuz,
            "Megatreopuz",
            "A secure, scalable and powerful cryptic hunt platform",
            1,
          ]
        case "Nirikshak":
          return [
            classes.nirikshak,
            "Nirikshak",
            "An autonomous REST API testing framework",
            ,
            2,
          ]
      }
    }, [current])

    return (
      <article
        ref={articleRef}
        id="project-cards"
        className={classes.exhibition}
      >
        {/* Announce the Project */}
        <div className="hidden" aria-live="polite" aria-atomic>
          Project {slideNumber} of {projects.length}.
        </div>
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
            {/* Presever the dimenesions of the content on expansion */}
            <div
              ref={cardRef}
              tabIndex={-1}
              className={clsx(classes.innerCard, classes.defaultDimension)}
            >
              {/* Title */}
              <Opacity duration={opacityDuration} visible={enter}>
                <h3 className={clsx(classes.title)}>
                  {title}
                  <span className="hidden">.</span>
                </h3>
                {/* Subtitle */}
                <p className={clsx(classes.subtitle)}>
                  {subtitle}
                  <span className="hidden">.</span>
                </p>
              </Opacity>
              <div className={classes.moreButtonHolder} aria-live="polite">
                {/* Loading indicator */}
                <Opacity duration={opacityDuration} visible={showLoading}>
                  <div
                    role="progressbar"
                    className={clsx(classes.loader, projectTheme)}
                  >
                    <span className="hidden">Loading.</span>
                  </div>
                </Opacity>
                {/* Know more button: Expands the current project */}
                <Opacity
                  duration={opacityDuration}
                  visible={enter && !showLoading && !expandedState}
                >
                  <button
                    disabled={!enter || loading || expandedState}
                    aria-controls="project-details"
                    aria-expanded={expanded}
                    onClick={expandCard}
                    className={clsx(classes.moreButton, projectTheme)}
                  >
                    Know More<span className="hidden">.</span>
                  </button>
                </Opacity>
              </div>
            </div>
          </div>
        </div>
        {/* Controls */}
        <Opacity duration={opacityDuration} visible={!expandedState}>
          <Buttons
            disabled={loading}
            updateState={updateState}
            current={current}
          />
        </Opacity>
      </article>
    )
  }
)
ProjectCards.displayName = "ProjectCards"

const Buttons: React.FunctionComponent<ButtonsProps> = ({
  updateState,
  current,
  disabled,
}) => {
  return (
    <div className={classes.projectListWrapper}>
      <ol className={classes.projectList}>
        {projects.map(p => (
          <li className={clsx(classes.projectBadge)} key={p.name}>
            <button
              disabled={!!disabled || current === p.name}
              onClick={() => updateState(p.name)}
            >
              <img src={p.logo} alt={p.alt + " logo"} />
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
    <div className={clsx(closeClasses.holder)}>
      <div className={closeClasses.wrapper}>
        <Opacity visible={visible} useDisplayNone>
          <button
            aria-controls="project-details"
            aria-expanded={visible}
            className={clsx(closeClasses.button)}
            onClick={onClick}
          >
            <svg className={closeClasses.svgIcon} viewBox="0 0 20 20">
              <path
                fill="none"
                d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
              ></path>
            </svg>{" "}
            <span className="hidden">Close project details</span>
          </button>
        </Opacity>
      </div>
    </div>
  )
}

const Projects = React.forwardRef<HTMLDivElement>((_, ref) => {
  // Is the project card in fullscreen
  const [expanded, setExpanded] = useState(false)
  // Render details
  const [showDetails, setShowDetails] = useState(false)
  // Loading state
  const [loading, setLoading] = useState(false)
  // Current project
  const [current, setCurrent] = useState<ProjectNames>("Megatreopuz")
  // Reference to card section
  const cardRef = useRef<HTMLDivElement>(null)
  // Reference to description section
  const descriptionRef = useRef<HTMLDivElement>(null)

  function expand() {
    // When know more button is clicked
    setLoading(true)
    setShowDetails(true)
  }

  function close() {
    // Scroll to the card section and then close
    cardRef.current?.scrollIntoView({
      behavior: "smooth",
    })
    checkIfElementOnTop(cardRef.current, () => {
      // Shrink fullscreen card to normal
      setExpanded(false)
      // Unmount details
      setShowDetails(false)
      cardRef.current?.focus({
        preventScroll: true,
      })
    })
  }

  return (
    <section tabIndex={-1} className={classes.projectSection} ref={ref}>
      <h2 className="hidden">Work and Projects.</h2>

      <ProjectCards
        ref={cardRef}
        loading={loading}
        expanded={expanded}
        expandCard={expand}
        current={current}
        updateState={setCurrent}
      />
      <Close visible={expanded} onClick={close} />

      {showDetails && (
        <ProjectDescription
          current={current}
          // Render but display: none - Set to true when everything ready
          visible={expanded}
          ref={descriptionRef}
          onLoad={() => {
            // When everything is ready, scroll to top
            cardRef.current?.scrollIntoView({
              behavior: "smooth",
            })

            checkIfElementOnTop(cardRef.current, () => {
              // Disable loading
              setLoading(false)
              // Fullscreen card + make details visible
              setExpanded(true)

              setTimeout(() => {
                descriptionRef.current?.scrollIntoView({
                  behavior: "smooth",
                })

                checkIfElementOnTop(descriptionRef.current, () =>
                  descriptionRef.current?.focus({
                    preventScroll: true,
                  })
                )
              }, 1200)
            })
          }}
        />
      )}
    </section>
  )
})

Projects.displayName = "Projects"
export default Projects
