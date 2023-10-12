import Email from '../images/gmail.png'
import FCC from '../images/download.jpg'
import Github from '../images/github.png'
import Linkedin from '../images/linkedin.png'

export default function Footer(){
    return(
        <footer>
            <h1 className="title">Info:</h1>
            <div className='footer-contianer'>
                <div className='media'>
                    <div>
                        <div><img src={Email} alt="email" className='com-icon'/></div>
                        <h2 className='subtitle'>Email:</h2>
                        <a href='mailto: rhujisie.kajiri@gmail.com'>rhujisie.kajiri@gmail.com</a>
                    </div>
                    <div>
                        <div><img src={Linkedin} alt="linkedin" className='com-icon'/></div>
                        <a href='https://www.linkedin.com/in/rhujisie-kajiri-6a9521149/'>LinkedIn</a>
                    </div>
                    <div>
                        <div><img src={Github} alt="github" className='com-icon'/></div>
                        <a href='https://github.com/Rhujisie'>Github</a>
                    </div>
                </div>
                <div className='certificate'>
                    <h2 className='subtitile'>certificates:</h2>
                    <div>
                        <div><img src={FCC} alt="fcc" className='com-icon'/></div>
                        <a href='https://github.com/Rhujisie'>Responsive Web Design</a>
                    </div>
                    <div>
                        <div><img src={FCC} alt="fcc" className='com-icon'/></div>
                        <a href='https://github.com/Rhujisie'>Front end Libraries</a>
                    </div>
                    <div>
                        <div><img src={FCC} alt="fcc" className='com-icon'/></div>
                        <a href='https://github.com/Rhujisie'>Data Structure and Algorithm</a>
                    </div>
                    <div>
                        <div><img src={FCC} alt="fcc" className='com-icon'/></div>
                        <a href='https://github.com/Rhujisie'>Backend and API</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}