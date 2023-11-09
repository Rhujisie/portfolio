import Nestin from './project/nestin/Nestin'
import ChitChat from './project/chitchat/ChitChat'
import Flappy from './project/flappy/Flappy'
import Chrome from './project/chrome/Chrome'
import Parallax from './parallax/Parallax'
import {motion} from 'framer-motion'

export default function ProjectContainer(){
    return(
        <motion.div className="project-container" >
            <motion.div className="project-title">
                <Parallax text='Project'/>
            </motion.div>
             {/* project */}
            <Nestin/>
            <ChitChat/>
            <Flappy/>
            <Chrome/>
        </motion.div>
    )
}