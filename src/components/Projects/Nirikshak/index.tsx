import clsx from "clsx"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { ProjectProps } from "../Description"
import classes from "./styles.module.scss"
import figlet from "figlet"
//@ts-ignore
import standard from "figlet/importable-fonts/Standard"
import Opacity from "../../OpacityTransition"
import { checkIfElementOnTop } from "../../utils/checkTop"
//@ts-ignore
figlet.parseFont("Standard", standard)
const Hero: React.FC = () => {
  const [logo, setLogo] = useState("Nirikshak")
  const heroRef = useRef<HTMLDivElement>(null)
  const [enter, setEnter] = useState<[boolean, boolean]>([false, false])
  const opacityDuration = 300

  useEffect(() => {
    figlet.text(
      "Nirikshak",
      {
        font: "Standard",
        horizontalLayout: "full",
      },
      (err, str) => {
        if (!err && str) setLogo(str)
      }
    )
  }, [])

  useEffect(() => {
    checkIfElementOnTop(heroRef.current, function fadeIn() {
      setEnter([false, false])
      setTimeout(() => {
        setEnter([true, false])
        setTimeout(() => {
          setEnter([true, true])
        }, 1000)
      }, 300)
    })
  }, [])
  return (
    <section aria-hidden={true} ref={heroRef} className={classes.hero}>
      <div className={classes.terminal}>
        <div className={classes.buttons}>
          <div className={classes.close}></div>
          <div className={classes.minimize}></div>
          <div className={classes.cascade}></div>
        </div>
        <div className={classes.content}>
          <code>
            <b className={classes.green}>terminal@machine</b>:
            <b className={classes.blue}>~$</b>&nbsp;nirikshak
            <Opacity
              unmountOnExit={false}
              mountOnEnter={false}
              duration={opacityDuration}
              visible={enter[0]}
            >
              <pre className={classes.figletLogo}>{logo}</pre>
              <p className={classes.tagLine}>Test your REST APIs with ease</p>
            </Opacity>
            <Opacity
              unmountOnExit={false}
              mountOnEnter={false}
              duration={opacityDuration}
              visible={enter[1]}
            >
              <table className={classes.commands}>
                <tbody>
                  <tr>
                    <td>nirikshak init</td>
                    <td>Initialise nirikshak in the project</td>
                  </tr>
                  <tr>
                    <td>nirikshak add &lt;name&gt; [dir]</td>
                    <td>Add a resource to the project</td>
                  </tr>
                  <tr>
                    <td>nirikshak remove &lt;name&gt;</td>
                    <td>Remove a resource from the project</td>
                  </tr>
                  <tr>
                    <td>nirikshak run [name..]</td>
                    <td>Run tests for specified resources</td>
                  </tr>
                </tbody>
              </table>
            </Opacity>
          </code>
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
        Nirikshak is a REST API testing framework. It leverages semantics of
        your application and provides autonomous testing. That means you get to
        kick back and relax while it does all the hard work.
      </p>
      <br />
      <p>
        It generates test cases, runs them and analyses them for you. Nirikshak
        provides unit testing and is extensible. This allows you to write custom
        testing flows with minimal effort.
      </p>
    </section>
  )
}

const DataAnalysis: React.FC = () => {
  return (
    <section className={clsx(classes.dataAnalysis)}>
      <div className="container">
        <h4 className="hidden">Data analysis</h4>
        <p>
          Nirikshak analyses test log to generate a report. It provides you with
          a ratio of failed tests to passed tests. It also groups the errors in
          a hierarchical manner to provide fine grained information.
        </p>
        <figure>
          <img src="/heirarchialBar.gif" alt="Hierarchical bar graph" />
        </figure>
        <br />
        <p>
          If the test cases are more than two hundred, it also performs five
          dimensional density based clustering on the logs. The clustering
          process is also influcenced by REST semantics. This causes similar
          errors to group up. User can then identify & mitigate them
          accordingly.
        </p>
      </div>
    </section>
  )
}

const FlowTesting: React.FC = () => {
  return (
    <section className={classes.flowTesting}>
      <div className="container">
        <h4 className="hidden">Flow of testing</h4>
        <p>
          Nirikshak has a very straighforward yet powerful testing flow. You
          only need to provide a basic description of your application and it
          interpolates the remaining nformation using REST semantics.
        </p>
        <br />
        <figure>
          <img src="/Nirikshak-flow.png" alt="Testing flow" />
        </figure>
        <br />
        <p>
          On the basis of your description, Nirikshak generates a request
          relationship graph. Traversal of this graph results in generating all
          sequences of possible actions. Using these sequences, hundred of test
          cases are generated on runtime. Nirikshak then invokes Jest to run
          those cases.
        </p>
      </div>
    </section>
  )
}

const Nirikshak: React.FC<ProjectProps> = ({ onLoad }) => {
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
    <article ref={ref}>
      <h3 className="hidden">Nirikshak</h3>
      <Hero />
      <Introduction />
      <FlowTesting />
      <DataAnalysis />
    </article>
  )
}

export default Nirikshak
