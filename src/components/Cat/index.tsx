import React, { useEffect } from "react"
import { convert } from "../SVGMorphing/convert"
import { convertToCircle } from "../SVGMorphing/convertToCircle"
import {
  easeInOutCubic,
  easeInOutCubicIndex,
} from "../SVGMorphing/transitionFunctions"
import classes from "./styles.module.scss"
const totalPaths = 30
const loadingGrey = "#3b3b3d"

interface Props {
  onLoad: () => void
}

const Cat: React.FC<Props> = ({ onLoad }) => {
  const pathRefs = React.useRef<SVGPathElement[]>([])
  const svgRef = React.useRef<SVGSVGElement>(null)
  const registerRef = (element: SVGPathElement) => {
    if (pathRefs.current.length < totalPaths) pathRefs.current.push(element)
  }

  useEffect(() => {
    const paths = pathRefs.current

    const catMap = new Map()
    function makeCat(index: number) {
      if (index === paths.length) return

      const color = paths[index].getAttribute("data-cat-color")
      if (!color) return

      requestAnimationFrame(() => {
        paths[index].style.fill = paths[index].style.stroke = color
        if (paths[index].hasAttribute("data-cat-circle")) {
          convertToCircle(
            paths[index],
            parseFloat(paths[index].getAttribute("data-cat-x") || "0"),
            parseFloat(paths[index].getAttribute("data-cat-y") || "0"),
            parseFloat(paths[index].getAttribute("data-cat-radius") || "0"),
            Date.now(),
            catMap,
            300,
            easeInOutCubic
          )
        } else {
          const catD = paths[index].getAttribute("data-cat-d")
          if (catD)
            convert(paths[index], catD, Date.now(), catMap, 300, easeInOutCubic)
        }
        makeCat(index + 1)
      })
    }

    const scatterMap = new Map()
    function scatter(index: number) {
      const equivalentD = paths[index].getAttribute("data-scattered-d")
      if (equivalentD)
        requestAnimationFrame(() => {
          convert(
            paths[index],
            equivalentD,
            Date.now(),
            scatterMap,
            1500,
            easeInOutCubic
          )
        })
    }

    // Zooming the circle sectors
    const zoomMap = new Map()
    function zoom(index: number) {
      if (index >= paths.length) return
      const equivalentD = paths[index].getAttribute("data-zoomed-d")
      const equivalentColor = paths[index].getAttribute("data-zoomed-color")
      setTimeout(() => {
        if (equivalentD && equivalentColor) {
          requestAnimationFrame(() =>
            convert(paths[index], equivalentD, Date.now(), zoomMap, 150)
          )
          requestAnimationFrame(() => {
            paths[index].style.stroke = paths[
              index
            ].style.fill = equivalentColor
            paths[index].style.strokeLinejoin = "miter"
          })

          setTimeout(
            () =>
              requestAnimationFrame(() => {
                scatter(index)
                if (index === paths.length - 1)
                  setTimeout(() => {
                    requestAnimationFrame(() => {
                      svgRef.current &&
                        (svgRef.current.style.transform = "rotateZ(0)")
                      if (index === paths.length - 1)
                        setTimeout(() => makeCat(0), 200)
                    })
                  }, 2000)
              }),
            easeInOutCubicIndex(index, paths.length) * 20
          )
        }

        zoom(index + 1)
      }, 20)
    }

    // Loading the pie animation
    function load(index: number) {
      if (index >= paths.length) return onLoad()

      setTimeout(() => {
        requestAnimationFrame(() => {
          paths[index].style.opacity = "1"
          paths[index].style.transform = "rotateZ(0)"

          paths[index].style.stroke = paths[index].style.fill = "#AE0520"
          setTimeout(() => {
            requestAnimationFrame(() => {
              paths[index].style.stroke = paths[index].style.fill = "#3b3b3d"
              if (index === paths.length - 1) zoom(0)
            })
          }, 200)
        })
        load(index + 1)
      }, Math.random() * 200)
    }

    load(0)
  }, [])

  return (
    <svg ref={svgRef} className={classes.svg} viewBox="0 0 338.66668 270.93333">
      <g
        id="layer-1"
        style={{
          strokeLinecap: "square",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
        }}
      >
        <path
          data-cat-d="M 114.048,13.6618 V 74.032 L 139.85,56.9981 Z"
          data-cat-color="#6bcef9"
          data-zoomed-d="m 185.25257,62.333716 -15.10875,-1.6611 v 72.746774 l 15.10875,-71.085674"
          data-zoomed-color="#8f8f8f"
          ref={registerRef}
          id="path1157"
          data-scattered-d="m 64.620836,46.82471 -7.55437,-0.83055 v 36.37339 l 7.55437,-35.54284"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 178.82939,92.430221 c -2.94333,-0.628325 -5.94368,-0.958075 -8.9533,-0.98435 v 43.109279 z"
        />
        <path
          data-cat-d="m 136.04803,60.248844 -17.084,-29.659 v 39.8042 z"
          data-cat-color="#196fa3"
          data-zoomed-d="m 200.26757,67.226416 -14.4375,-4.7667 -15.12375,71.156924 29.56125,-66.390224"
          data-zoomed-color="#828282"
          ref={registerRef}
          id="path1155"
          data-scattered-d="m 45.638103,143.27976 -7.21875,-2.38335 -7.56188,35.57846 14.78063,-33.19511"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 187.72696,95.329621 c -2.74965,-1.2268 -5.61602,-2.1732 -8.55535,-2.824725 l -8.9626,42.166974 z"
        />
        <path
          data-cat-d="M 191.703,57.2486 220.26,13.6618 v 60.6207 z"
          data-cat-color="#6bcef9"
          data-zoomed-d="m 213.93932,75.134641 -13.13025,-7.66395 -29.595,66.468449 42.72525,-58.804499"
          data-zoomed-color="#7f7f7f"
          ref={registerRef}
          id="path1153"
          data-scattered-d="m 189.50915,15.114487 -6.56512,-3.83197 -14.7975,33.234222 21.36263,-29.402252"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 195.82871,100.01597 c -2.4353,-1.771674 -5.0417,-3.293224 -7.78075,-4.541624 l -17.53785,39.388524 z"
        />
        <path
          data-cat-d="m 196.913,60.3548 17.084,-29.659 V 70.5 Z"
          data-cat-color="#196fa3"
          data-zoomed-color="#777777"
          data-zoomed-d="m 225.66332,85.711441 -11.247,-10.22625 -42.7635,58.861199 54.0105,-48.634949"
          ref={registerRef}
          id="path1151"
          data-scattered-d="M 221.50285,26.107229 215.87934,20.994105 194.4976,50.424712 221.50285,26.107229"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 202.77646,106.2837 c -2.01215,-2.239 -4.2445,-4.2692 -6.66522,-6.06 l -25.34115,34.8806 z"
        />
        <path
          data-cat-d="M 187.524,56.9984 H 140.099 L 114.047,74.032 v 21.7935 l 36.988,24.3735 z"
          data-cat-color="#2ec7ff"
          ref={registerRef}
          data-zoomed-color="#737373"
          data-zoomed-d="m 234.93707,98.496316 -8.877,-12.34305 -54.07575,48.687374 62.95275,-36.344324"
          id="path1149"
          data-scattered-d="m 327.14167,239.5582 -4.4385,-6.17152 -27.03787,24.34368 31.47637,-18.17216"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 208.27179,113.8599 c -1.5028,-2.6088 -3.2656,-5.05935 -5.26055,-7.31438 l -32.04485,28.8519 z"
        />
        <path
          data-cat-d="m 187.524,56.9984 -36.489,63.2006 6.349,4.183 h 25.299 L 220.259,95.8255 V 74.032 L 191.702,56.9984 Z"
          data-cat-color="#2ec7ff"
          ref={registerRef}
          data-zoomed-color="#6f6f6f"
          data-zoomed-d="m 241.34507,112.92714 -6.11475,-13.918499 -63.01125,36.377999 69.126,-22.4595"
          id="path1147"
          data-scattered-d="M 256.3753,57.243231 253.31792,50.283979 221.81229,68.47298 256.3753,57.243231"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 212.06934,122.41155 c -0.92718,-2.86425 -2.14215,-5.62755 -3.62375,-8.24803 l -37.33993,21.55755 z"
        />
        <path
          data-cat-d="m 168.275,101.206 -13.771,-10.0148 -11.022,10.0198 14.779,11.273 10.014,-5.758 z"
          data-cat-color="#2eb5ff"
          ref={registerRef}
          id="path1145"
          data-scattered-d="m 322.95646,59.739838 -1.54574,-7.442632 -34.59675,11.239877 36.14249,-3.797245"
          data-zoomed-color="#676767"
          data-zoomed-d="m 244.61807,128.37639 -3.0915,-14.88525 -69.1935,22.47975 72.285,-7.5945"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 214.00856,131.56672 c -0.31305,-2.9941 -0.92585,-5.94947 -1.8318,-8.82077 l -41.00342,13.32132 z"
        />
        <path
          data-cat-color="#2eb5ff"
          data-cat-d="m 168.275,101.206 v 5.52 l 0.006,-0.004 10.02,5.762 12.55,-9.82 -9.042,-11.4728 -13.528,10.0198 z"
          data-zoomed-color="#626262"
          data-zoomed-d="m 244.60232,144.16989 0.423,-7.96125 -0.3495,-7.2435 -72.36075,7.60575 72.28725,7.599"
          ref={registerRef}
          id="path1143"
          data-scattered-d="m 56.816678,246.2533 0.2115,-3.98062 -0.17474,-3.62175 -36.18038,3.80287 36.14362,3.7995"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 213.99926,140.92592 c 0.167,-1.56782 0.2507,-3.14227 0.2507,-4.71807 0,-1.43385 -0.069,-2.86635 -0.207,-4.29228 l -42.88032,4.50715 z"
        />
        <path
          data-cat-d="M 154.63,91.3164 150.546,83.05 h -13.727 l -3.357,5.5109 6.964,7.2645 9.569,0.1253 z"
          data-cat-color="#ffffff"
          ref={registerRef}
          id="path1141"
          data-scattered-d="m 178.08331,239.35667 1.61587,-7.42687 -36.17924,-3.80288 34.56337,11.22975"
          data-zoomed-color="#5f5f5f"
          data-zoomed-d="m 241.30757,159.61239 3.23175,-14.85375 -72.3585,-7.60575 69.12675,22.4595"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 212.04679,150.07685 c 0.93247,-2.8624 1.57445,-5.81103 1.91532,-8.80208 l -42.879,-4.50715 z"
        />
        <path
          data-cat-color="#ffffff"
          data-cat-d="m 185.566,95.8254 -3.608,-4.4088 3.307,-8.1162 h 12.099 l 4.309,5.3858 -6.639,7.1392 z"
          data-zoomed-color="#575757"
          data-zoomed-d="m 234.86957,174.03189 6.252,-13.8555 -69.189,-22.482 62.937,36.3375"
          ref={registerRef}
          id="path1139"
          data-scattered-d="m 320.3322,201.35095 3.126,-6.92775 -34.5945,-11.241 31.4685,18.16875"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 208.23201,158.62162 c 1.50815,-2.60507 2.74968,-5.35607 3.70468,-8.21052 l -41.0008,-13.3225 z"
        />
        <path
          data-cat-circle
          data-cat-color="#000000"
          data-cat-x="145.143747"
          data-cat-y="89.4123"
          data-cat-radius="6.146875266"
          data-zoomed-color="#525252"
          data-zoomed-d="m 225.57632,186.80139 8.9955,-12.255 -63.00375,-36.375 54.00825,48.63"
          ref={registerRef}
          id="path1137"
          data-scattered-d="m 256.99227,254.64557 4.49775,-6.1275 -31.50188,-18.1875 27.00413,24.315"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 202.72474,166.1888 c 2.01615,-2.235 3.80282,-4.66898 5.33087,-7.2621 l -37.33592,-21.55558 z"
        />
        <path
          data-cat-circle
          data-cat-x="148.587360027"
          data-cat-y="85.989586725"
          data-cat-radius="1.2"
          data-cat-color="#ffffff"
          ref={registerRef}
          id="path1135"
          data-scattered-d="m 217.58733,257.06187 5.673,-5.05838 -27.03225,-24.33975 21.35925,29.39813"
          data-zoomed-color="#4f4f4f"
          data-zoomed-d="m 213.83207,197.35689 11.346,-10.11675 -54.0645,-48.6795 42.7185,58.79625"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 195.76506,172.44417 c 2.43795,-1.76677 4.69018,-3.7763 6.72358,-5.99537 l -32.03823,-28.84688 z"
        />
        <path
          data-cat-circle
          data-cat-color="#000000"
          data-cat-x="191.03711170069"
          data-cat-y="89.378899358"
          data-cat-radius="6.146875266"
          ref={registerRef}
          data-zoomed-color="#464646"
          data-zoomed-d="m 200.15132,205.24314 13.2015,-7.54125 -42.768,-58.8615 29.5665,66.40275"
          id="path1133"
          data-scattered-d="m 38.313513,113.92108 6.60074,-3.77064 -21.38399,-29.430738 14.78325,33.201368"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 187.65799,177.11712 c 2.751,-1.22292 5.37197,-2.71915 7.8232,-4.46867 l -25.3438,-34.88073 z"
        />
        <path
          data-cat-circle
          data-cat-color="#ffffff"
          data-cat-x="193.770257642"
          data-cat-y="85.989586725"
          data-cat-radius="1.2"
          data-zoomed-d="m 185.12732,210.10914 14.4825,-4.629 -29.5935,-66.465 15.111,71.094"
          data-zoomed-color="#434343"
          ref={registerRef}
          id="path1131"
          data-scattered-d="m 28.42728,47.855854 7.241258,-2.31451 -14.796758,-33.232495 7.5555,35.546995"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 178.75511,180.00077 c 2.94598,-0.62342 5.8203,-1.54262 8.5819,-2.74302 L 169.80049,137.8712 Z"
        />
        <path
          data-cat-d="m 160.891,95.8254 h 14.78 l -7.265,5.7616 z"
          data-cat-color="#196fa3"
          ref={registerRef}
          id="path1129"
          data-scattered-d="m 61.252535,206.68241 h 0.0322 l 7.53075,-0.7575 -7.563,-35.5815 v 36.339"
          data-zoomed-color="#3f3f3f"
          data-zoomed-d="m 169.42157,211.74489 h 0.0645 l 15.0615,-1.515 -15.126,-71.163 v 72.678"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 169.44766,180.97037 c 0.0125,0 0.0252,0 0.0385,0 2.99768,0.001 5.98743,-0.29977 8.92543,-0.89797 l -8.9639,-42.1707 z"
        />
        <path
          data-cat-d="m 143.482,101.211 14.779,11.147 10.02,-5.586 10.02,5.586 12.525,-9.869 7.515,9.869 -15.781,12.15 h -25.551 l -22.295,-14.931 z"
          data-cat-color="#46d3f9"
          ref={registerRef}
          id="path1127"
          data-scattered-d="m 99.40212,102.08064 7.55437,0.83026 V 66.540404 l -7.55437,35.540246"
          data-zoomed-color="#3b3b3d"
          data-zoomed-d="m 153.71957,210.08214 15.10875,1.6605 v -72.741 l -15.10875,71.0805"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 160.14286,179.98485 c 2.9433,0.62872 5.94365,0.95767 8.9533,0.9842 v -43.1058 z"
        />
        <path
          data-cat-d="M 157.26 125.037 L 145.364 143.251 L 193.323 145.95 L 182.41 125.037 L 157.26 125.037 Z"
          data-cat-color="#5cd3ff"
          ref={registerRef}
          id="path1125"
          data-scattered-d="m 89.611168,42.073489 7.21762,2.38389 L 104.39104,8.8769988 89.611168,42.073489"
          data-zoomed-color="#393939"
          data-zoomed-d="m 138.70457,205.18914 14.43525,4.76775 15.1245,-71.16075 -29.55975,66.393"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 151.24526,177.0853 c 2.74835,1.22695 5.61473,2.174 8.55405,2.82527 l 8.96258,-42.16937 z"
        />
        <path
          data-cat-d="M 172.149 124.595 L 157.41 124.508 L 155.756 126.787 L 158.136 127.638 L 169.106 127.638 L 172.149 124.595 Z"
          data-cat-color="#196fa3"
          data-zoomed-color="#353535"
          data-zoomed-d="m 125.03507,197.28114 13.128,7.66425 29.5905,-66.45825 -42.7185,58.794"
          ref={registerRef}
          id="path1123"
          data-scattered-d="m 290.19896,37.708027 6.564,3.83213 14.79525,-33.2291295 -21.35925,29.3969995"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 143.14484,172.3991 c 2.434,1.77207 5.04037,3.29347 7.77942,4.54162 l 17.53523,-39.38257 z"
        />
        <path
          data-cat-color="#196fa3"
          data-cat-d="M 169.181 127.638 L 180.931 127.638 L 183.812 126.888 L 182.635 124.657 L 172.223 124.595 L 169.181 127.638 Z "
          ref={registerRef}
          id="path1121"
          data-scattered-d="m 302.51066,152.22727 5.62507,5.11312 21.38138,-29.43037 -27.00645,24.31725"
          data-zoomed-color="#303030"
          data-zoomed-d="m 113.30642,186.70539 11.25015,10.22625 42.76275,-58.86075 -54.0129,48.6345"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 136.19446,166.13177 c 2.01348,2.239 4.24585,4.26973 6.66655,6.0604 l 25.34113,-34.88072 z"
        />
        <path
          data-cat-d="M 193.352 146.004 L 145.331 143.302 L 142.306 147.934 L 169.21 173.084 L 194.359 147.934 L 193.352 146.004 Z"
          data-cat-color="#5cd3ff"
          ref={registerRef}
          id="path1119"
          data-scattered-d="m 266.0604,224.52205 4.43861,6.17137 27.03656,-24.34313 -31.47517,18.17176"
          data-zoomed-color="#2e2e2d"
          data-zoomed-d="m 104.03747,173.92389 8.87722,12.34275 54.07313,-48.68625 -62.95035,36.3435"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 130.70176,158.55795 c 1.50283,2.60772 3.26563,5.05892 5.26055,7.31385 l 32.04353,-28.85083 z"
        />
        <path
          ref={registerRef}
          data-cat-d="M 143.231 201.16 L 132.164 222.114 C 136.842 223.367 150.72 227.086 152.073 227.448 L 143.231 201.16 Z"
          data-cat-color="#299acc"
          id="path1117"
          data-scattered-d="m 234.89084,200.81161 3.05865,6.95888 31.51114,-18.19201 -34.56979,11.23312"
          data-zoomed-color="#2a2a2a"
          data-zoomed-d="m 97.624744,159.49164 6.117296,13.91775 63.02228,-36.384 -69.139576,22.46625"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 126.90159,150.00522 c 0.92847,2.86373 2.1435,5.62798 3.6251,8.24765 L 167.87321,136.692 Z"
        />
        <path
          data-cat-d="M 152.073 227.448 C 150.72 227.086 136.842 223.367 132.164 222.114 L 124.444 236.73 L 129.716 245.737 L 155.867 238.73 L 152.073 227.448 Z"
          data-cat-color="#299acc"
          ref={registerRef}
          id="path1115"
          data-scattered-d="m 268.96179,124.71505 1.54556,7.44263 34.59671,-11.241 -36.14227,3.79837"
          data-zoomed-color="#272727"
          data-zoomed-d="m 94.354519,144.04464 3.091125,14.88525 69.193426,-22.482 -72.284551,7.59675"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 124.96369,140.85165 c 0.3117,2.9937 0.92582,5.94897 1.83177,8.82065 l 41.00348,-13.3225 z"
        />
        <path
          data-cat-d="M 155.867 238.73 L 129.716 245.737 L 136.468 257.271 L 162.019 257.021 L 155.867 238.73 Z"
          data-cat-color="#299acc"
          ref={registerRef}
          id="path1113"
          data-scattered-d="m 248.00085,19.577959 -0.2103,3.97875 0.17463,3.6225 36.1791,-3.80287 -36.14343,-3.79838"
          data-zoomed-color="#252525"
          data-zoomed-d="m 94.367944,128.25114 -0.4206,7.9575 0.349275,7.245 72.358201,-7.60575 -72.286876,-7.59675"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 124.97164,131.49247 c -0.16575,1.56648 -0.24925,3.1396 -0.24925,4.71538 0,1.43385 0.069,2.8664 0.207,4.29362 l 42.879,-4.50715 z"
        />

        <path
          data-cat-d="m 201.898,213.434 22.845,-10.019 -18.06,19.063 z"
          data-cat-color="#5cd3ff"
          ref={registerRef}
          id="path1111"
          data-scattered-d="m 132.1109,245.67819 -1.61498,7.42761 36.17925,3.80175 -34.56427,-11.22936"
          data-zoomed-color="#1e1e1e"
          data-zoomed-d="m 97.662769,112.80489 -3.22995,14.85525 72.358501,7.6035 -69.128551,-22.45875"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 126.92414,122.33887 c -0.93248,2.86253 -1.57315,5.81183 -1.91403,8.8034 l 42.879,4.50585 z"
        />
        <path
          data-cat-d="M 177.694 248.882 L 174.669 257.147 L 199.218 257.147 L 205.164 248.882 L 177.694 248.882 Z"
          data-cat-color="#299acc"
          ref={registerRef}
          id="path1109"
          data-scattered-d="m 73.758976,138.90135 -3.12472,6.92913 34.603424,11.24437 -31.478704,-18.1735"
          data-zoomed-color="#1c1c1c"
          data-zoomed-d="m 104.10017,98.384116 -6.249451,13.858274 69.206851,22.48875 -62.9574,-36.347024"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 130.73891,113.79345 c -1.50815,2.60587 -2.74832,5.35725 -3.70337,8.21222 l 41.01142,13.32675 z"
        />
        <path
          data-cat-d="M 201.59 213.115 L 184.55 230.155 L 177.694 248.882 L 205.164 248.882 L 213.996 236.606 L 201.59 213.115 Z"
          data-cat-color="#299acc"
          ref={registerRef}
          id="path1107"
          data-scattered-d="m 263.68561,77.295696 -4.49683,6.12754 31.50237,18.188364 -27.00555,-24.315904"
          data-zoomed-color="#1b1b1b"
          data-zoomed-d="m 113.39147,85.617841 -8.99363,12.255075 63.00473,36.376724 -54.0111,-48.631799"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 136.24486,106.22825 c -2.01615,2.23527 -3.80152,4.66845 -5.32955,7.26225 l 37.33593,21.55675 z"
        />
        <path
          data-cat-d="M 201.59 213.115 L 195.21 201.035 L 184.55 230.155 L 201.59 213.115 Z"
          data-cat-color="#299acc"
          ref={registerRef}
          id="path1105"
          data-scattered-d="m 16.607056,187.48138 -5.67323,5.05995 27.03323,24.3405 -21.36,-29.40046"
          data-zoomed-color="#1a1a1a"
          data-zoomed-d="m 125.13632,75.059491 -11.34645,10.1199 54.06645,48.680999 -42.72,-58.800899"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 143.20456,99.971421 c -2.43665,1.767829 -4.69022,3.776949 -6.72362,5.996979 l 32.03955,28.84805 z"
        />
        <path
          data-cat-d="M 142.104 147.428 L 130.081 161.706 L 144.379 204.264 L 199.531 189.486 L 209.739 161.706 L 194.459 147.428 L 169.158 172.979 L 142.104 147.428 Z"
          data-cat-color="#2eb5ff"
          ref={registerRef}
          id="path1103"
          data-scattered-d="m 305.78846,78.0434 -6.60187,3.77021 21.38737,29.43735 -14.7855,-33.20756"
          data-zoomed-color="#0f0f0f"
          data-zoomed-d="m 138.81857,67.174516 -13.20375,7.540425 42.77475,58.874699 -29.571,-66.415124"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 151.31294,95.298846 c -2.75233,1.222425 -5.37333,2.71955 -7.82453,4.468425 l 25.34778,34.888699 z"
        />
        <path
          data-cat-color="#2eb5ff"
          data-cat-d="M 199.509 189.547 L 144.396 204.314 L 155.714 238.005 L 188.7 218.96 L 199.509 189.547 Z"
          ref={registerRef}
          id="path1101"
          data-scattered-d="m 137.65622,13.668145 -7.24087,2.3151 14.79525,33.232078 -7.55438,-35.547168"
          data-zoomed-color="#070707"
          data-zoomed-d="m 153.84257,62.307016 -14.48175,4.6302 29.5905,66.464174 -15.10875,-71.094374"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 160.21581,92.414421 c -2.94597,0.6237 -5.82165,1.543025 -8.5819,2.743825 l 17.5352,39.386304 z"
        />
        <path
          data-cat-d="M 188.672 219.036 L 155.731 238.055 L 162.145 257.147 L 174.669 257.147 L 188.672 219.036 Z"
          data-cat-color="#2eb5ff"
          ref={registerRef}
          id="path1099"
          data-scattered-d="m 102.06773,218.30585 h -0.0315 l -7.531885,0.75881 7.563385,35.58177 v -36.34058"
          data-zoomed-color="#959595"
          data-zoomed-d="m 170.20682,60.672616 h -0.063 l -15.06375,1.517625 15.12675,71.163529 V 60.672616"
          style={{
            fill: loadingGrey,
            stroke: loadingGrey,
            strokeWidth: 3.402,
          }}
          d="m 169.52326,91.443896 c -0.0125,0 -0.0252,0 -0.037,0 -2.99902,0 -5.98877,0.30135 -8.92677,0.8993 l 8.9639,42.170824 z"
        />
      </g>
    </svg>
  )
}

export default Cat
