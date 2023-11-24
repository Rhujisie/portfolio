import Esie from '../images/esie.png'
import {motion, useScroll, useTransform} from 'framer-motion'
import useFollowPointer from './follow-mouse/useFollowPointer'
import { useRef } from 'react'

const nameVariant = {
    hidden:{y: 0, opacity: 0},
    visible:{y: 0, opacity: 1, transition: {
        // delayChildren: .3,
        staggerChildren: .1,
    }}
}
const titleVariant = {
    hidden: {y: 100},
    visible: {y: 0, transition:{
        type: "spring", bounce: 0 
    }}
}
const conVariant = {
    hidden:{y: 0, opacity: 0},
    visible:{y: 0, opacity: 1, transition: {
        delayChildren: 1,
        staggerChildren: .3,
    }}
}
const desVariant ={
    hidden:{ y: 30, opacity: 0},
    visible: {y: 0, opacity: 1, transition: {
        type: 'spring',
        duration: 2,
        delayChildren: .7,
        staggerChildren: .2,
    }}
}
const stackVariant={
    hidden:{opacity: 0, x: 10},
    visible:{opacity: 1, x: 0,  transition:{
        duration: 1, type: 'spring'
    }}
}
const name = ['R','h','u','j','i','s','i','e','-', 'K','a','j','i','r','i','.']
export default function Profile(){
    const {scrollY} = useScroll()
    const scrollRef = useRef()
    const desY = useTransform(scrollY, [0, 1080], [1, 1])
    const nodeY = useTransform(scrollY, [0, 300], [0, 70])
    const nodeOpacity = useTransform(scrollY, [0, 300], [1, 0])
    const {x} = useFollowPointer(scrollRef)
    const nameElem = name.map((data, i)=> <motion.div key={i} className='name-char'
    variants={titleVariant}>{data}</motion.div>)

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible:{
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: {type: "spring", duration: 2, bounce: 0 },
              opacity: {duration: 0.01 }
            }
        }
      };
    const photoVariant={
        open: {
            opacity: 1,
            transition:{delay:1, duration: 2}
          },
        closed: {
            opacity: 0
        }
    }
    return(      
        <motion.div className='profile-container'>
            <motion.div className='profile' style={{y: desY}}>
                <motion.div className='photo'>
                    <motion.img src={Esie} alt='profile' variants={photoVariant}
                    initial='closed' animate='open'
                    transition='transition'/>
                    <motion.svg className='photo-svg'
                    initial='hidden' animate='visible'>
                        <motion.circle
                            cx="260"
                            cy="260"
                            r="260"
                            stroke="#2c2c2c"
                            variants={draw}
                            custom={0}
                        />
                    </motion.svg>
                </motion.div>
                <motion.div className='description'
                // variants={nameVariant} initial='hidden' animate='visible'
                >
                    <motion.div className='name' variants={nameVariant}
                    initial='hidden' animate='visible'>
                        {nameElem}
                        <motion.svg className='name-svg'>
                            <motion.line
                                x1="0"
                                y1="40"
                                x2="100%"
                                y2="40"
                                stroke="#2c2c2c"
                                variants={draw}
                                initial='hidden' animate='visible'
                            />
                        </motion.svg>
                    </motion.div>

                    {/* <div className='subtitle full'>Full stack Developer</div> */}
                    <motion.div className ='sub-description' variants={conVariant} 
                    initial='hidden' animate='visible'>
                        <motion.p className='para' variants={desVariant}>
                            Passionate web developer with a keen eye for design and
                            a knack for problem-solving. Dedicated 
                            to delivering user-friendly, performance-optimized websites
                            that leave a lasting impression.
                        </motion.p>
                        <motion.div className='tech-stack' variants={desVariant}>
                            <div className='subtitle'>Tech stack:</div>
                            <div>
                                <motion.div variants={stackVariant}>MongoDB</motion.div>
                                <motion.div variants={stackVariant}>Express</motion.div>
                                <motion.div variants={stackVariant}>React</motion.div>
                                <motion.div variants={stackVariant}>Node.</motion.div>
                            </div>
                        </motion.div>
                        <motion.div className='languages' variants={desVariant}>
                            <div className='subtitle'>Languages:</div>
                            <div>
                                <motion.div variants={stackVariant}>Javascript</motion.div>
                                <motion.div variants={stackVariant}>C++</motion.div>
                                <motion.div variants={stackVariant}>C</motion.div>
                                <motion.div variants={stackVariant}>Java.</motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div className='node' ref={scrollRef} 
                style={{y: nodeY, opacity: nodeOpacity}}
                animate={{x}} transition={{type: "spring",damping: 3, 
                stiffness: 50,restDelta: 0.001}}>Scroll Down</motion.div>
            </motion.div>
        </motion.div>
    )
}