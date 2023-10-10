import Nestin from '../images/nestin.gif'
import Flappy from '../images/flappy.gif'
import chitchat from '../images/chitchat.gif'

import { useRef, useEffect, useState} from 'react'

export default function Project({pixel}){
    const titleRef = useRef()
    const projectRef = useRef()
    const [sticky, setSticky] = useState(false)

    // 0,200,200
    //move title to the left
    useEffect(()=>{
        const moveTitleLeft =()=>{
            titleRef.current.style.transform = `translateX(-${pixel * 1.7}px)`
        }
        pixel < 450 && moveTitleLeft()
    }, [pixel])
    //change background color on scroll
    // useEffect(()=>{
    //     const bobDiv = ()=>{
    //         let top = projectRef.current.getBoundingClientRect().top
    //         if(top < 500){
    //             // console.log(top)
    //             // setSticky(true)
    //             //projectRef.current.style.backgroundColor = `rgb(${})`
    //         }
    //     }
    //     bobDiv()
    // }, [pixel])

    return(
        <div className={`project-container`}>
            <div className='project-title' ref={titleRef}>Projects</div>
            {/* project */}
            <div className={'project project1'}>
                <div className='image-container'>
                    <img src={Nestin} alt='mac'/>
                </div>
                <div className='project-desc'>
                    <h1 className='title'>NestIn</h1>
                    <p className='para'>Share your place for the whole world to see.</p>
                    <h2 className='subtitle'> Technologies used</h2>
                    <li>MERN</li>
                    <li>Authnetication</li>
                    <li>Responsive</li>
                    <li>Restfull API</li>
                </div>
            </div>
            {/* parallax */}
            <div className='parallax1 parallax'></div>
            {/* project */}
            <div className='project'>
                <div className='image-container'>
                    <img src={chitchat} alt='mac'/>
                </div>
                <div className='project-desc'>
                    <h1 className='title'>Chit Chat</h1>
                    <p className='para'>Stay connected with your friends on our node Chat app</p>
                    <h2 className='subtitle'> Technologies used</h2>
                    <li>MERN</li>
                    <li>Web Socket</li>
                    <li>Authnetication</li>
                    <li>Restfull API</li>
                </div>
            </div>
            {/* parallax */}
            <div className='parallax2 parallax'></div>
            {/* project */}
            <div className='project'>
                <div className='image-container'>
                    <img src={Flappy} alt='mac'/>
                </div>
                <div className='project-desc'>
                    <h1 className='title'>Flappy Bird</h1>
                    <p className='para'>Control your bird and navigate it through a series of obstacles.</p>
                    <h2 className='subtitle'> Technologies used</h2>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Javascript</li>
                </div>
            </div>
            {/* parallax */}
            <div className='parallax3 parallax'></div>
        </div>
    )
}