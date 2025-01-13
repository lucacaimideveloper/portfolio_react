// import { motion } from 'framer-motion'
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
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
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
            During my development path I had been creating various projects,
            using mainly JavaScript, React, and Redux. <br /> I have many more
            in preparation to keep practicing and improving my skills!
          </p>
        </div>

        <div className="pf-box">
          {projectsData.map((project, id) => (
            <div key={id} className="work">
              <img src={project.imageSrc} alt={`Image of ${project.title}`} />
              <div className="layer">
                <h3 className="script">{project.title}</h3>
                <p className="script">{project.description}</p>
                <div className="script">
                  <a href={project.demo}>
                    <FontAwesomeIcon icon={faLink} color="#022c43" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Loader type="square-spin" />
    </>
  )
}

export default Project
