import React, { useEffect, useState } from "react"
import NavList, { NavProps } from "./NavList"
import classes from "./style.module.scss"
interface Props {
  list: NavProps["list"]
}

const Header: React.FC<Props> = props => {
  return (
    <header className={classes.header}>
      <nav>
        <NavList {...props} />
      </nav>
    </header>
  )
}

export default Header
