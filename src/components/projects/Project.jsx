import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import './project.style.scss'
import Loader from 'react-loaders'
import AnimatedLetter from '../AnimatedLetter/AnimatedLetter'
import projectsData from '../data/projectsData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Project = () => {
  const [width, setWidth] = useState(0)
  const carousel = useRef()
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    //by console logging thos properties, you can understand the param where to stopthe carousel
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>

          <p>
            During my development path I had been creating varius projects,
            using mainly JavaScript, React and Redux. <br></br> I have many more
            in preparation to keep practicing and improving my skills!
          </p>
        </div>
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {projectsData.map((projectsData, id) => {
              return (
                <motion.div key={id} className="item">
                  {/* <div className="projects"> */}
                  <img
                    src={projectsData.imageSrc}
                    alt={`Image of ${projectsData.title}`}
                  />
                  <div className="layer">
                    <h3>{projectsData.title}</h3>
                    <p>{projectsData.description}</p>
                    <div>
                      <a href={projectsData.demo}>
                        <FontAwesomeIcon icon={faLink} color="#022c43" />
                      </a>
                    </div>
                  </div>
                  {/* </div> */}
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
      <Loader type="square-spin" />
    </>
  )
}

export default Project
