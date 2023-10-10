import Man from '../images/man.jpeg'
import { useEffect, useRef } from 'react'

export default function Profile({pixel}){
    const photoRef = useRef()
    const desRef = useRef()

    useEffect(()=>{
        photoRef.current.style.transform = `rotate(${pixel / 1}deg)`
    },[pixel])
    useEffect(()=>{
        desRef.current.style.transform = `translateX(-${pixel * 1.3}px)`
    }, [pixel])

    return(
        <div className='profile-container'>
            <div className='profile'>
                <div className='photo' style={{width: '600px'}}>
                    <img src={Man} alt='profile' ref={photoRef}/>
                </div>
                <div className='description' ref={desRef}>
                    <div className='name'>Rhujisie Kajiri</div>
                    <div className='desc'>Full stack Developer</div>
                    <p className='para'><span className='extra'>"</span> 
                    I am a passionate full stack MERN developer from India.
                    <span className='extra'>"</span>
                    </p>
                    <div className='tech-stack'>
                        <h2 className='subtitle'>Tech stack</h2>
                        <div>
                            <div>MongoDB</div>
                            <div>Express</div>
                            <div>React</div>
                            <div>Node</div>
                        </div>
                    </div>
                    <div className='languages'>
                        <h2 className='subtitle'>Languages</h2>
                        <div>
                            <div>Javascript</div>
                            <div>C++</div>
                            <div>C</div>
                            <div>Java.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}