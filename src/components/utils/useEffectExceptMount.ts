import React, { useEffect, useRef } from "react"

export function useEffectExceptMount(...args: Parameters<typeof useEffect>) {
  const effect = useRef(false)

  useEffect(() => {
    if (!effect.current) effect.current = true
    else return args[0]()
  }, args[1])
}
