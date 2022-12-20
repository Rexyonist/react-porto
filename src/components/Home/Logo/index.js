import './index.scss'
import LogoS from '../../../assets/images/b-logo.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'


const Logo = () => {
    const bgRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
        
        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1
        })
    },[])

    return (
        <div className='logo-container' ref={bgRef}>
            <img className="solid-logo" src={LogoS} alt="B"/>

        </div>
    )
}

export default Logo