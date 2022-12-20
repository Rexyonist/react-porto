import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A','b','o','u','t',' ','M','e']}
                            idx={15}/>
                    </h1>
                    <p>
                        I'm a college student at Multimedia Nusantara University majoring
                        in Informatics & currently in my third year and entering 
                        my fourth year soon in 2023. 
                    </p>
                    <p>
                        Seeking to use my knowledge and interest of Information & Technology 
                        to effectively serve your company in an internship position, 
                        and very interested in learning new things.
                    </p>
                    <p>
                        Hardworking and enthusiastic College Student at Multimedia Nusantara University 
                        working towards a web development.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGithub} color="#967bb6"/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                        </div>
                    </div>
                </div>

            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About