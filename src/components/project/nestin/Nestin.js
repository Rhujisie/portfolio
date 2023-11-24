import {motion} from 'framer-motion'
import './Nestin.css'

import NestinMac from '../../../images/nestin-mac.gif'
import NestinMobile1 from '../../../images/nestin-mob.gif'
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
const tech = ['MERN','User Authnetication','Restfull API',
'Search and filter functionality', 'Rating and review system',
'Responsive Web design']
const con=['Implemented persistent login functionality that retains user authentication even after page refresh.',
'Implemented separate API calls for retrieving listing based on whether a user is logged in or not.',
'Successfully incorporated both user authentication and authorization features into the system.',
'Designed and deployed a robust password recovery system.']

export default function Nestin() {

    const techElem = tech.map(data=> <motion.div className='tech-name'
    key={data} variants={desChildrenVariant}>{data}</motion.div>)

    const conElem = con.map((data)=> <motion.li className='con'
    variants={desChildrenVariant} key={data}>
        {data}</motion.li>)
  return (
    <motion.div className={`project`} >
        <motion.div className={`nestin-image-container`} variants={imageVariant}
        initial='hidden' whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}>
            <motion.img src={NestinMac} alt='nestin pc'
            variants={imageChildrenVariant} className='nestin-img-pc'/>
            <motion.img src={NestinMobile1} alt='nestin pc'
            variants={imageChildrenVariant} className='nestin-img-mobile' />
        </motion.div>
        <motion.div className='project-desc' variants={desVariant}
            initial='hidden' whileInView='visible' 
            viewport={{ once: true, amount: 0.3}}>
            <motion.div className='project-heading'>
                <motion.h1 className='title'>NestIn.</motion.h1>
                <motion.a className={`visit-button`}
                 target="_blank" rel="noreferrer"
                href='https://nestin.onrender.com/' whileHover={{ scale: 1.1 }} whileTap={{scale: .9}}
                transition={{ type: "spring", stiffness: 300, damping: 11 }}>
                    Visit site
                    <img src={Export} alt='export icon' className='export-icon'/>
                </motion.a>
            </motion.div>
            <motion.p className='para' variants={desChildrenVariant}>
            A dynamic platform where you can effortlessly rent out and share
            your home in some of the most sought-after global destinations.
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
