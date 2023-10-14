import Frontend from '../images/frontend.png'
import Backend from '../images/backend.png'
import DSA from '../images/dsa.png'
import Responsive from '../images/responsive.png'

import React, { useEffect,useRef } from 'react'
import { useState } from 'react'

export default function Certificate({pixel}){

    const certificatesRef = useRef()
    const certificateRefs = useRef([])
    const nameRefs = useRef([])
    const projectRef = useRef()

    const [hover, setHover] = useState('')

    //change background color on scroll
    //rgb(25, 23, 23)
    useEffect(()=>{
        const bobDiv = ()=>{
            const threshold = 900;
            // rgb(223, 204, 251)
            let red = Math.min(25, Math.max(223, 255 - ((pixel / 1.5) - threshold)));
            let green = Math.min(23, Math.max(204, 255 - ((pixel / 1.5)- threshold)));
            let blue = Math.min(23, Math.max(251, 255 - ((pixel / 1.5) - threshold)));
            projectRef.current.style.backgroundColor = `rgb(${red},${green},${blue})`;
            }
        bobDiv()
    }, [pixel])

    useEffect(()=>{
        const handleIntersection = (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                for(let i = 0; i < 4; i++){
                    certificateRefs.current[i].classList.add(`show${i}`)
                    nameRefs.current[i].classList.add(`showname${i}`)
                }
                //observer.unobserve(entry.target);
              }
            });
          };
      
          const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
            delay: 1
          });
      
          observer.observe(projectRef.current);
      
          return () => {
            observer.disconnect(); // Clean up observer when component is unmounted
          };
    },[])

    //check the current certificate
    // useEffect(()=>{
    //     const handleIntersection = (entries, observer)=>{
    //         entries.forEach(entry => {
    //             entry.target.classList.toggle('show', entry.isIntersecting)
    //         });
    //     }
    //     const observer = new IntersectionObserver(handleIntersection,{
    //         root: certificatesRef.current,
    //         rootMargin:"-15px",
    //         threshold: 1
    //     })
    //     certificateRefs.current.forEach(curr=> observer.observe(curr))
    //     return()=>{
    //         observer.disconnect()
    //     }
    // },[])

    return(
        <div className='con' ref={projectRef}>
            <div className='certificate-title'>Certificates</div>
            <div className='certificates-container'>
                <div className='certificate-name'>
                    <h1 className='subtitle name' ref={el=> nameRefs.current[0] = el}>
                        Responsive Web Design.</h1>
                    <h1 className='subtitle name' ref={el=> nameRefs.current[1] = el}>
                        Frontend Development.</h1>
                    <h1 className='subtitle name' ref={el=> nameRefs.current[2] = el}>
                        Data Structure and Algorithm.</h1>
                    <h1 className='subtitle name' ref={el=> nameRefs.current[3] = el}>
                        Backend and API Development.</h1>
                </div>
                <div className='certificates' ref={certificatesRef}>
                    <div className='certificate responsive' ref={(el)=>certificateRefs.current[0] = el}>
                        <div><img src={Responsive} alt="fcc" className='certificate-img'/></div>
                    </div>
                    <div className='certificate frontend' ref={(el)=>certificateRefs.current[1] = el}>
                        <div><img src={Frontend} alt="fcc" className='certificate-img'/></div>
                    </div>
                    <div className='certificate dsa' ref={(el)=>certificateRefs.current[2] = el}>
                        <div><img src={DSA} alt="fcc" className='certificate-img'/></div>
                    </div>
                    <div className='certificate backend' ref={(el)=>certificateRefs.current[3] = el}>
                        <div><img src={Backend} alt="fcc" className='certificate-img'/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}