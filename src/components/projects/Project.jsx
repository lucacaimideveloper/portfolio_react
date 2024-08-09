import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import './project.style.scss'
import Loader from 'react-loaders'
import AnimatedLetter from '../AnimatedLetter/AnimatedLetter'
import projectsData from '../data/projectsData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLink,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

const Project = () => {
  const [width, setWidth] = useState(0)
  const carousel = useRef()
  const [letterClass, setLetterClass] = useState('text-animate')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 3 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 3 : prevIndex - 1
    )
  }

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
            During my development path I had been creating various projects,
            using mainly JavaScript, React, and Redux. <br /> I have many more
            in preparation to keep practicing and improving my skills!
          </p>
        </div>
        <div className="carousel-container">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="arrow left"
            onClick={prevSlide}
          />
          <motion.div ref={carousel} className="carousel">
            <motion.div
              className="inner-carousel"
              initial={{ x: 0 }}
              animate={{ x: -currentIndex * 33.33 + '%' }}
              transition={{ duration: 0.5 }}
            >
              {projectsData.map((project, id) => (
                <motion.div key={id} className="item">
                  <img
                    src={project.imageSrc}
                    alt={`Image of ${project.title}`}
                  />
                  <div className="fade-layer">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div>
                      <a href={project.demo}>
                        <FontAwesomeIcon icon={faLink} color="#022c43" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="arrow right"
            onClick={nextSlide}
          />
        </div>
      </div>
      <Loader type="square-spin" />
    </>
  )
}

export default Project
