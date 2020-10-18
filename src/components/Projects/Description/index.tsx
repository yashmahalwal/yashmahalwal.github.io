import clsx from "clsx"
import React, { RefObject, Suspense, useEffect, useRef, useState } from "react"
import { ProjectNames } from "../../../pages"

export interface ProjectProps {
  onLoad: () => void
}

const Router = new Map<ProjectNames, React.FC<ProjectProps>>()
Router.set(
  "Megatreopuz",
  React.lazy(() => import("../Megatreopuz"))
)

interface ProjectDescProps {
  onLoad: () => void
  visible: boolean
  current: ProjectNames
}

const PlaceHolder: React.FC = () => null
const NotFound: React.FC<ProjectProps> = ({ onLoad }) => {
  useEffect(onLoad, [])

  return (
    <article
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Not implemented</h1>
    </article>
  )
}

const ProjectDescription = React.forwardRef<HTMLDivElement, ProjectDescProps>(
  ({ onLoad, visible, current }, outerRef) => {
    const ref = outerRef as RefObject<HTMLDivElement>

    const Child = React.useMemo(() => Router.get(current), [current])
    return (
      <div ref={ref} className={clsx(!visible && "hidden")}>
        {Child ? (
          <Suspense fallback={<PlaceHolder />}>
            <Child onLoad={onLoad} />
          </Suspense>
        ) : (
          <NotFound onLoad={onLoad} />
        )}
      </div>
    )
  }
)
ProjectDescription.displayName = "ProjectDescription"
export default ProjectDescription
