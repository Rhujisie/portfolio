import {motion} from 'framer-motion'
import './Chitchat.css'
import ChitRight from '../../../images/chit-right.png'
import ChitLeft from '../../../images/chit-left.png'
import Export from '../../../images/export.png'

const imageVariant = {
    hidden:{opacity: 0},
    visible:{opacity: 1, transition:{
        type: 'spring', duration:0, 
        staggerChildren: .5, bounce: .4
    }},
}
const imageChildrenVariant = {
    hidden: {x: -300, opacity: 0},
    visible: {x: 0, opacity: 1,
    transition:{type: 'spring', duration: 2, bounce: .2}}
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
const tech = ['MERN', 'Web Socket',
'User Authnetication','Restfull API']

const con=['Implemented a real-time chat functionality utilizing WebSockets for seamless and instantaneous communication.',
'Implemented a feature for media sharing, enhancing the platform\'s capability for multimedia content dissemination.',
'Implemented a user status tracking feature, allowing for real-time visibility of online and offline user presence.',
'Implemented persistent login functionality that retains user authentication even after page refresh.']

export default function ChitChat() {
    // const imgRef = useRef(null)
    // const {scrollYProgress} = useScroll({target: imgRef, 
    // offset:['start end', 'start start']})
    // const scale = useTransform(scrollYProgress, [0, .4], [.5, 1])
    // const x = useTransform(scrollYProgress, [0, .4], [-200, 0])
    // const opacity = useTransform(scrollYProgress, [0, .4], [0, 1])

    const techElem = tech.map(data=> <motion.div className='tech-name'
    key={data} variants={desChildrenVariant}>{data}</motion.div>)

    const conElem = con.map((data)=> <motion.li className='con'
    variants={desChildrenVariant} key={data}>
        {data}</motion.li>)
  return (
    <motion.div className={`project chitchat`}>
        <motion.div className={`chitchat-image-container`} variants={imageVariant}
        initial='hidden' whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}>
            <motion.img src={ChitLeft} alt='chit chat' className='chitchat-img-1'/> 
            <motion.img src={ChitRight} alt='chit chat' className='chitchat-img-2'
            variants={imageChildrenVariant}/>
        </motion.div>
        <motion.div className='project-desc chitchat-des' variants={desVariant}
            initial='hidden' whileInView='visible' 
            viewport={{ once: true, amount: 0.3}}>
            <motion.div className='project-heading'>
                <motion.h1 className='title'>Chit Chat.</motion.h1>
                <motion.a className={`visit-button`}
                 target="_blank" rel="noreferrer"
                href='https://nestin.onrender.com/' whileHover={{ scale: 1.1 }} whileTap={{scale: .9}}
                transition={{ type: "spring", stiffness: 300, damping: 11 }}>
                    Visit site
                    <img src={Export} alt='export icon' className='export-icon'/>
                </motion.a>
            </motion.div>
            <motion.p className='para' variants={desChildrenVariant}>
                Stay connected with your friends and loved ones through our 
                cutting-edge Node.js chat app, designed to keep you seamlessly 
                linked, no matter the distance.
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
