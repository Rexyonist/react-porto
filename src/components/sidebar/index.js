import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logos-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const sidebar = () => {
    <div className='nav-bar'>
        <Link className='Logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active"  className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" ref='noreferrer' href='https://www.linkedin.com/in/bryant-h-637149167/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" ref='noreferrer' href='https://github.com/Rexyonist'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" ref='noreferrer' href='https://www.youtube.com/channel/UCTBtRp8y6nBiFQR3RPlNIPg'>
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" ref='noreferrer' href='https://www.instagram.com/bryant_christ_hihola/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
}

export default sidebar