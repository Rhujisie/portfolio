import Nestin from '../images/nestin.gif'
import Flappy from '../images/flappy.gif'
import chitchat from '../images/chitchat.gif'
import Ext from '../images/ext.gif'

import { useRef, useEffect} from 'react'

export default function Project({pixel}){
    const titleRef = useRef()
    const projectRef = useRef()
    const project1Ref = useRef()
    const project2Ref = useRef()
    const project3Ref = useRef()
    const project4Ref = useRef()

    // 0,200,200
    //move title to the left
    useEffect(()=>{
        const moveTitleLeft =()=>{
            titleRef.current.style.transform = `translateX(-${pixel * 1.7}px)`
        }
        pixel < 450 && moveTitleLeft()
    }, [pixel])
    //change background color on scroll
    useEffect(()=>{

        const bobDiv = ()=>{
            const threshold = 150;
            // rgb(223, 204, 251)
            let red = Math.min(255, Math.max(223, 255 - ((pixel / 2.5) - threshold)));
            let green = Math.min(255, Math.max(204, 255 - ((pixel / 2.5)- threshold)));
            let blue = Math.min(255, Math.max(251, 255 - ((pixel / 2.5) - threshold)));
            projectRef.current.style.backgroundColor = `rgb(${red},${green},${blue})`;
        }
        bobDiv()
    }, [pixel])
    //lazy loading project
    useEffect(()=>{
        const handleIntersection = (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target)
              }
            });
          };
      
          const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
            delay: 1
          });
      
          observer.observe(project2Ref.current);
          observer.observe(project3Ref.current);
          observer.observe(project4Ref.current);
      
          return () => {
            observer.disconnect(); // Clean up observer when component is unmounted
          };
    },[])

    //handle project scroll over
    // useEffect(()=>{
    //     const handleIntersection = (entries, observer) => {
    //         entries.forEach((entry) => {
    //             entry.target.classList.toggle('display', entry.boundingClientRect.top <= 100);
    //         });
    //       };
      
    //       const observer = new IntersectionObserver(handleIntersection, {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: .9,
    //       });
      
    //       observer.observe(project1Ref.current);
    //       observer.observe(project2Ref.current);
    //       observer.observe(project3Ref.current);
    //       observer.observe(project4Ref.current);
      
    //       return () => {
    //         observer.disconnect(); // Clean up observer when component is unmounted
    //       };
    // },[])

    return(
        <div className={`project-container`} ref={projectRef}>
            <div className='project-title' ref={titleRef}>Projects</div>
            {/* project */}
            <div className={'project project1'} ref={project1Ref}>
                <div className='image-container'>
                    <img src={Nestin} alt='mac'/>
                </div>
                <div className='project-desc'>
                    <h1 className='title'>NestIn</h1>
                    <p className='para'>Share your place for the whole world to see.</p>
                    <h2 className='subtitle'> Technologies used</h2>
                    <li>MERN</li>
                    <li>User Authnetication</li>
                    <li>Responsive Web design</li>
                    <li>Restfull API</li>
                    <li>User review and rating system</li>
                </div>
            </div>
            {/* parallax */}
            <div className='parallax1 parallax'></div>
            {/* project */}
            <div className='project' ref={project2Ref}>
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
            <div className='project'  ref={project3Ref}>
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
             {/* project */}
             <div className='project' ref={project4Ref}>
                <div className='image-container'>
                    <img src={Ext} alt='mac'/>
                </div>
                <div className='project-desc'>
                    <h1 className='title'>Chrome Extension</h1>
                    <p className='para'> Enhances the video-watching experience by allowing users to bookmark specific points on a video timeline for quick navigation and reference.</p>
                    <h2 className='subtitle'> Technologies used</h2>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Javascript</li>
                </div>
            </div>
        </div>
    )
}