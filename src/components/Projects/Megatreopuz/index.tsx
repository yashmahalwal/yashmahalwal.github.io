import clsx from "clsx"
import React, { RefObject, useEffect } from "react"
import { ProjectProps } from "../Description"
import classes from "./styles.module.scss"

const Hero: React.FC = () => {
  return (
    <section className={classes.imageStack}>
      <h4 className="hidden">A peek into megatreopuz</h4>
      <div className={classes.imageHolder}>
        <div className={classes.row}>
          <img src="/dashboard-light.png" alt="Megatreopuz Dashboard Light" />
          <img src="/megatreopuz-login.png" alt="Megatreopuz Login Page" />
          <img src="/dashboard-dark.png" alt="Megatreopuz Dashboard Dark" />
        </div>
        <div className={classes.row}>
          <img
            src="/megatreopuz-login.png"
            alt="Megatreopuz Login Page - Repeated"
          />
          <img
            src="/dashboard-light.png"
            alt="Megatreopuz Dashboard Light - Repeated"
          />
        </div>
      </div>
    </section>
  )
}

const Introduction: React.FC = () => {
  return (
    <section className={clsx(classes.introduction, "container")}>
      <h4 className="hidden">Introduction</h4>
      <p>
        Megatreopuz is an annual online cryptic hunt conducted by ISTE MANIT. It
        is a battle of wits in the form of cunning puzzles, coded messages, and
        mind-boggling questions. Participants from around the globe rack their
        brains for solutions for over seven days with increasing difficulty with
        every level.
      </p>
      <br />
      <p>
        The contest requires a web based platform. Every year, the platform gets
        more challenging and sophisticated. This time, it wasn't enough to just
        make it right. It needed to be exceptional.
      </p>
    </section>
  )
}

const Interface: React.FC = () => {
  return (
    <section className={clsx(classes.interface)}>
      <div className="container">
        <h4 className="text-center">User Interface</h4>
        <div className={classes.device}>
          <img
            src="/megatreopuz-desktop.png"
            alt="Megatreopuz desktop screenshot"
          />
          <img
            src="/megatreopuz-tablet.png"
            alt="Megatreopuz mobile screenshot"
          />
        </div>
        <p>
          User interface is powered by Material Design. That ensures a seamless,
          intuitive and responsive user experience. Platform is written using
          React with Relay and Next.js is used for server side rendering.
        </p>
        <br />
        <p>
          Flux architecture along with SSR model makes sure that the interface
          is fast and highly scalable. GraphQL further ensures an effecient and
          safe data fetching, providing a cutting edge performance.
        </p>
      </div>
    </section>
  )
}

const Architecture: React.FC = () => {
  return (
    <section className={clsx(classes.architecture, "container")}>
      <h4 className="text-center">Architecture</h4>
      <p>
        Megatreopuz has a microservices based architecture under the hood. This
        allows for scaling upwards as well downwards. Fast and effecient
        technology more than makes up for the latency due to coupling.
      </p>
      <br />
      <figure>
        <img src="/architecture.png" alt="Megatreopuz architecture" />
        <figcaption>Megatreopuz Architecture</figcaption>
      </figure>
      <br />
      <p>
        The entrance to architecture is provided by a GraphQL gateway. Auth
        services are provided by firebase. Microservices are written using gRPC
        that provides fast and type safe coupling.
      </p>
      <br />
      <p>
        All the components share a MongoDB based persistance and a Redis based
        cache & pubsub system. The gRPC implementations are done in Go to
        leverage the speed of a compiled language combined with a powerful
        concurrency system.
      </p>
    </section>
  )
}

const Megatreopuz: React.FC<ProjectProps> = ({ onLoad }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const imagesLoaded = React.useRef<number>(0)

  useEffect(() => {
    const imgList = ref.current?.getElementsByTagName("img") ?? []
    if (!imgList.length) return onLoad()

    for (let i = 0; i < imgList.length; i++) {
      const img = document.createElement("img")

      img.onload = img.onerror = () => {
        imagesLoaded.current++
        if (imagesLoaded.current === imgList.length) onLoad()
      }

      img.src = imgList[i].src
    }
  }, [])

  return (
    <article ref={ref} className={classes.article}>
      <h3 className="hidden">Megatreopuz</h3>
      <Hero />
      <Introduction />
      <Interface />
      <Architecture />
    </article>
  )
}

export default Megatreopuz
