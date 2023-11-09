import './Footer.css'
import {motion} from 'framer-motion'
import LinkedIn from '../../images/linkedin.png'
import Github from '../../images/github.png'

const certificateVariant ={
    hidden:{
        opacity: 0, x: -100
    },
    visible:{
        opacity: 1, x: 0,
        transition:{
            type: 'spring', bounce: .2, delayChildren: .7, staggerChildren: .3
        }
    }
}
const contactVariant ={
    hidden:{
        opacity: 0, x: 100
    },
    visible:{
        opacity: 1, x: 0,
        transition:{
            type: 'spring', bounce: .2, delayChildren: .7, staggerChildren: .3
        }
    }
}
const childVariant = {
    hidden: {
        y: 30, opacity: 0
    },
    visible: {
        y : 0, opacity: 1,
        transition: {
            type: 'spring', bounce: .2
        }
    }
}

export default function Footer() {
  return (
    <footer>
        <motion.div className="certificate-container" variants={certificateVariant}
            initial='hidden' whileInView='visible' viewport={{once: true, amount: .5}}>
            <motion.div className='footer-heading'>Certificates.</motion.div>
            <motion.div className='certificates'>
                <motion.a className='certificate' variants={childVariant}
                href='https://www.freecodecamp.org/certification/fcc49fe72a0-04bb-465e-9b1a-1e2e4815f8c0/responsive-web-design'
                target="_blank" rel="noreferrer">Responsive Web Design.</motion.a>
                <motion.a className='certificate' variants={childVariant}
                href='https://www.freecodecamp.org/certification/fcc49fe72a0-04bb-465e-9b1a-1e2e4815f8c0/front-end-development-libraries'
                target="_blank" rel="noreferrer">Front End Development.</motion.a>
                <motion.a className='certificate' variants={childVariant}
                href='https://www.freecodecamp.org/certification/fcc49fe72a0-04bb-465e-9b1a-1e2e4815f8c0/back-end-development-and-apis'
                target="_blank" rel="noreferrer">Back End Development.</motion.a>
                <motion.a className='certificate' variants= {childVariant}
                href='https://www.freecodecamp.org/certification/fcc49fe72a0-04bb-465e-9b1a-1e2e4815f8c0/javascript-algorithms-and-data-structures'
                target="_blank" rel="noreferrer">Data Structure and Algorithm.</motion.a>
            </motion.div>
        </motion.div>
        <motion.div className="contact-container" variants={contactVariant}
            initial='hidden' whileInView='visible' viewport={{once: true, amount: .5}}>
            <motion.div className='footer-heading'>Contact.</motion.div>
            <motion.div className='email' variants={childVariant}>rhujisie.kajiri@gmail.com</motion.div>
            <motion.div className='contacts'>
                <motion.a className='link-div' variants={childVariant}
                href='https://github.com/Rhujisie'
                target="_blank" rel="noreferrer">
                    <img src={Github} alt='github' className='contact-icon'/>
                </motion.a>
                <motion.a className='link-div' variants={childVariant}
                href='https://www.linkedin.com/in/rhujisie-kajiri-6a9521149/'
                target="_blank" rel="noreferrer">
                    <img src={LinkedIn} alt='linkedin' className='contact-icon'/>
                </motion.a>
            </motion.div>
        </motion.div>
    </footer>
  )
}
