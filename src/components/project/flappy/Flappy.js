import {motion} from 'framer-motion'
import './Flappy.css'
import Export from '../../../images/export.png'

const imageVariant = {
    hidden:{opacity: 0},
    visible:{opacity: 1, transition:{
        type: 'spring', duration:0, delayChildren: .5, 
        staggerChildren: .5, bounce: .4
    }},
}
const imageChildrenVariant = {
    hidden: {opacity: 0, y: 100},
    visible: {opacity: 1, y: 0, 
    transition:{type: 'spring', duration: 2, bounce: .4}}
}
const desVariant = {
    hidden:{opacity: 0, y: -80},
    visible:{opacity: 1, y: 0, transition:{
        type: 'spring', duration: 2, delayChildren: 1, 
        staggerChildren: .3, bounce: .2
    }},
}
const desChildrenVariant = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, 
    transition:{type: 'spring', duration: 1.4, bounce: .2}}
}
const tech = ['HTML', 'CSS',
'JavaScript', 'window.requestAnimationFrame()']

const con=['Implemented an adaptive game refresh rate mechanism that intelligently adjusts based on the device\'s capabilities for optimal performance.',
'An engaging and iterative game, designed to enhance hand-eye coordination skills while providing an enjoyable experience.']

export default function Flappy() {

    const techElem = tech.map(data=> <motion.div className='tech-name'
    key={data} variants={desChildrenVariant}>{data}</motion.div>)

    const conElem = con.map((data)=> <motion.li className='con'
    variants={desChildrenVariant} key={data}>
        {data}</motion.li>)
  return (
    <motion.div className={`project flappy`}>
        <motion.div className={`flappy-image-container`} variants={imageVariant}
        initial='hidden' whileInView='visible' 
        viewport={{ once: true, amount: 0.2 }}>
            <motion.iframe src="https://rhujisie.github.io/flappybird/" 
            width="100%" height="100%" variants={imageChildrenVariant}></motion.iframe>
            <motion.div className='iframe-text'
             variants={imageChildrenVariant}> Click anywhere in the frame to play.</motion.div>
        </motion.div>
        <motion.div className='project-desc chitchat-des' variants={desVariant}
            initial='hidden' whileInView='visible' 
            viewport={{ once: true, amount: 0.3}}>
            <motion.div className='project-heading'>
                <motion.h1 className='title'>Flappy Bird.</motion.h1>
                <motion.a className={`visit-button`}
                 target="_blank" rel="noreferrer"
                href='https://rhujisie.github.io/flappybird/' whileHover={{ scale: 1.1 }} whileTap={{scale: .9}}
                transition={{ type: "spring", stiffness: 300, damping: 11 }}>
                    Visit site
                    <img src={Export} alt='export icon' className='export-icon'/>
                </motion.a>
            </motion.div>
            <motion.p className='para' variants={desChildrenVariant}>
            Steer your bird through a challenging course 
            filled with obstacles in this engaging app inspired by Flappy Bird.
            </motion.p>
            <motion.h2 className='subtitle' variants={desChildrenVariant}> Technologies used:</motion.h2>
            <motion.div className='tech-container'>
                {techElem}
            </motion.div>
            {/* <motion.div className='conclusion-container'>
                {conElem}
            </motion.div> */}
        </motion.div>
    </motion.div>
  )
}
