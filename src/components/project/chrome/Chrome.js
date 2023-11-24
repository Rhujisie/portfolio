import {motion} from 'framer-motion'
import './Chrome.css'
import Export from '../../../images/export.png'
import ChromeIcon from '../../../images/ext.png'

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
    'JavaScript',  'Chrome API']
const con = ['Utilized the Chrome API to extend YouTube\'s functionality with custom features.',
    'Implemented cross-device synchronization of stored bookmarks for users with the same account.',
    'Successfully integrated bookmarking functionality for improved video navigation within YouTube.']

export default function Chrome() {

    const techElem = tech.map(data=> <motion.div className='tech-name'
    key={data} variants={desChildrenVariant}>{data}</motion.div>)

    const conElem = con.map((data)=> <motion.li className='con'
    variants={desChildrenVariant} key={data}>
        {data}</motion.li>)
  return (
    <motion.div className={`project chrome`}>
        <motion.div className={`chrome-image-container`} variants={imageVariant}
        initial='hidden' whileInView='visible' 
        viewport={{ once: true, amount: 0.2 }}>
            <motion.img src={ChromeIcon} alt='chit chat' className='chrome-img-1'
            variants={imageChildrenVariant}/>
        </motion.div>
        <motion.div className='project-desc chrome-des' variants={desVariant}
            initial='hidden' whileInView='visible' 
            viewport={{ once: true, amount: 0.3}}>
            <motion.div className='project-heading'>
                <motion.h1 className='title'>Chrome Extension.</motion.h1>
                <motion.a className={`visit-button`}
                 target="_blank" rel="noreferrer"
                href='https://github.com/Rhujisie/Youtube-bookmark.git' whileHover={{ scale: 1.1 }} whileTap={{scale: .9}}
                transition={{ type: "spring", stiffness: 300, damping: 11 }}>
                    Github
                    <img src={Export} alt='export icon' className='export-icon'/>
                </motion.a>
            </motion.div>
            <motion.p className='para' variants={desChildrenVariant}>
                Enhances the video-watching experience by allowing
                users to bookmark specific points on a video timeline for quick 
                navigation and reference.
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
