// import React, { useEffect } from 'react'
// import { useRef } from 'react'
// import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
// import gsap from 'gsap-trial'

const Logo = () => {
  //   const bgRef = useRef()
  //   const outlineLogoRef = useRef()
  //   const solidLogoRef = useRef()

  // useEffect(() => [
  //     gsap.registerPlugin(DrawSVGPlugin)

  //     gsap.timeline().to(bgRef.current, {
  //         duration: 1,
  //         opacity: 1,
  //     })
  //     .from(outlineLogoRef.current, {
  //         drawSVG: 0,
  //         duration: 20,
  //     })
  //     gsap.fromTo(
  //         solidLogoRef.current, {
  //             opacity:0,
  //         },
  //         opacity:1,
  //         delay: 4,
  //         duration: 4,

  //     )
  // ], [])

  return (
    <>
      <div className="logo-container" ref={bgRef}>
        <img ref={solidLogoRef} className="solid-logo" src="" alt="S" />
        <svg
          width="559pt"
          height="897pt"
          version="1.0"
          viewBox="0 0 559 897"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            className="svg-container"
            transform="translate(0 457) scale(.1 -.1)"
            fill="none"
          >
            <path></path>
          </g>
        </svg>
      </div>
    </>
  )
}

export default Logo
