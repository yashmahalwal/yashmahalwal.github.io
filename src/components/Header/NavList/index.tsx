import clsx from "clsx"
import React, { useState } from "react"
import { checkIfElementOnTop } from "../../utils/checkTop"
import classes from "./index.module.scss"

export interface NavProps {
  list: {
    title: React.ReactNode
    ref: HTMLDivElement | null
  }[]

  closeMenu: () => void
}

const NavList: React.FC<NavProps> = ({ list, closeMenu }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  React.useEffect(() => {
    const observerList = list.map((el, index) => {
      const observer = new IntersectionObserver(
        entries => {
          // If multiple elements have come into the view, choose the last one

          if (entries[0].isIntersecting) {
            setActiveIndex(index)
          }
        },
        {
          threshold: [0],
          rootMargin: "-50% 0px -50% 0px",
        }
      )

      el.ref && observer.observe(el.ref)
      return observer
    })

    return () => observerList.forEach(observer => observer.disconnect())
  }, [list])

  return (
    <ul className={classes.list}>
      {list.map((el, index) => {
        return (
          <li
            key={index}
            className={clsx(activeIndex === index && classes.active)}
          >
            <a
              href="#"
              onClick={e => {
                e.preventDefault()
                el.ref?.scrollIntoView({
                  behavior: "smooth",
                })

                checkIfElementOnTop(el.ref, () => {
                  closeMenu()
                  el.ref?.focus()
                })
              }}
            >
              {el.title}
              <span className="hidden">.</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default NavList
