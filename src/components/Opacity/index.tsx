import React, { useEffect } from "react"
import { useState } from "react"

interface Props {
  visible: boolean
  duration?: number
  useDisplayNone?: boolean
}

// Wraps everything in a div
const Opacity: React.FC<Props> = ({
  duration = 300,
  visible,
  useDisplayNone = false,
  children,
}) => {
  const [opacity, setOpacity] = useState<0 | 1>(0)
  const [display, setDisplay] = useState("none")

  useEffect(() => {
    if (!useDisplayNone) {
      setOpacity(visible ? 1 : 0)
      setDisplay("block")
      return
    }

    if (visible) {
      setDisplay("block")
      setTimeout(() => setOpacity(1), 10)
    } else {
      setOpacity(0)
      setTimeout(() => setDisplay("none"), duration)
    }
  }, [visible])

  return (
    <div
      style={{
        display,
        transition: `Opacity ${duration}ms`,
        opacity,
      }}
    >
      {children}
    </div>
  )
}

export default Opacity
