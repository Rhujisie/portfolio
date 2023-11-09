import './App.css';
import {Suspense, lazy} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion'

import Loader from './components/Loader';
import Spinner from './components/spinner/Spinner'
// import useTheme from './hook/useTheme';

const Profile = lazy(()=> import('./components/Profile'))
const ProjectContainer = lazy(()=> import('./components/ProjectContainer'))
const Footer = lazy(()=>  import ('./components/footer/Footer'))

export default function App() {
  const {scrollYProgress} = useScroll()
  const {scrollY} = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 1080], ['#eee9e9', '#2c2c2c'])
  // const {theme} = useTheme()
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0 + i * 1;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
  return (
    <div className='App'>
      <Suspense fallback={<Loader/>}>
        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress, backgroundColor}} />
        {/* <motion.div className='pointer-div' drag>pointer</motion.div> */}
        <motion.div className='project-spinner'><Spinner word/></motion.div>
        <motion.svg className='project-svg' initial="hidden" animate="visible">
          <motion.circle
          cx="75"
          cy="75"
          r="75"
          stroke="#2c2c2c"
          variants={draw}
          custom={0}
        />
        <motion.circle
          cx="75"
          cy="75"
          r="45"
          stroke="#2c2c2c"
          variants={draw}
          custom={1}
        />
        </motion.svg>
        <Profile/>
        <ProjectContainer/>
        <Footer/>
      </Suspense>
    </div>
  );
}

