import { useEffect, useState } from 'react'
import './spinner.css'
import {motion, AnimatePresence} from 'framer-motion'

export default function Spinner() {
  // const [word, setWord] = useState('Portfolio Website')
  const [number, setNumber] = useState([0, 'Portfolio Website'])

  const change = ()=>{
    const scrollY = window.scrollY;
    if(scrollY > 2800){
      setNumber([4, 'Project    Ext'])
    }else if(scrollY > 2100){
      setNumber([3, 'Project  Flappy'])
    }else if(scrollY > 1300){
      setNumber([2, 'Project ChitChat'])
    }else if(scrollY > 400){
      setNumber([1, 'Project   NestIn'])
    }else{
      setNumber([0, 'Portfolio Website'])
    }
  }
  useEffect(()=>{
    document.addEventListener('scroll', change)
    return ()=>{
      document.removeEventListener('scroll', change)
    }
  }, [])
  // spinner elem
  const wordElem = [] 
  for(let i = 0; i < number[1].length; i++){
    wordElem.push(<span key={i} 
      style={{transform: `rotate(${i * 20}deg)`}}>{number[1][i]}</span>)
  }

  return (
    <>
      <motion.div className='spinner-container' initial={{opacity: 0}}
      animate={{opacity: 1}} transition={{duration: 2, delay: 1.4}}>
      <AnimatePresence mode='wait'>
        <motion.div className='spinner-number'
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {number[0]}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        <motion.div className='text' initial={{opacity: 0}}
           animate={{rotate: 360, opacity: 1}}
          transition={{repeat: Infinity, repeatType: "loop",
          duration: 4, ease: 'linear', y: {duration: .2}, opacity: {duration: .2}}} 
          exit={{opacity: 0 }}>
            {wordElem}
        </motion.div>
      </AnimatePresence>
      </motion.div>
    </>

  )
}
