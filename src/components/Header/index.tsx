import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"
import useEffectExceptMount from "use-effect-except-mount"
import Opacity from "../Opacity"
import { useIsOnTablet } from "../utils/envrionmentCheck"
import NavList, { NavProps } from "./NavList"
import classes from "./style.module.scss"
interface Props {
  list: NavProps["list"]
}

const Header: React.FC<Props> = props => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const isOnTablet = useIsOnTablet()
  const menuOpenResult = !isOnTablet || menuOpen

  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    window.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        setMenuOpen(false)
        buttonRef.current?.focus()
      }
    })
  }, [])

  const navRef = useRef<HTMLDivElement>(null)

  return (
    <header className={classes.header}>
      <button
        ref={buttonRef}
        aria-controls="nav-menu"
        aria-expanded={menuOpenResult}
        aria-label="Toggle Menu"
        onClick={() => setMenuOpen(m => !m)}
        className={clsx(
          classes.control,
          classes.menu,
          menuOpen && classes.opened
        )}
      >
        <svg viewBox="0 0 100 100">
          <path
            className={clsx(classes.line, classes.line1)}
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path
            className={clsx(classes.line, classes.line2)}
            d="M 20,50 H 80"
          />
          <path
            className={clsx(classes.line, classes.line3)}
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
      <Opacity visible={menuOpenResult} useDisplayNone>
        <nav id="nav-menu">
          <NavList {...props} closeMenu={() => setMenuOpen(false)} />
        </nav>
      </Opacity>
    </header>
  )
}

export default Header
