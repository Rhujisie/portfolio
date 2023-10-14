import Email from '../images/gmail.png'
import Github from '../images/github.png'
import Linkedin from '../images/linkedin.png'

export default function Footer(){
    return(
        <footer>
            <h1 className="title">Contact</h1>
            <div className='footer-contianer'>
                <div className='media'>
                    <div>
                        <div><img src={Email} alt="email" className='com-icon'/></div>
                        <h2 className='subtitle'>Email:</h2>
                        <a rel="noopener" href='mailto: rhujisie.kajiri@gmail.com' target='_blank'>rhujisie.kajiri@gmail.com</a>
                    </div>
                    <div>
                        <div><img src={Linkedin} alt="linkedin" className='com-icon'/></div>
                        <a rel="noopener" href='https://www.linkedin.com/in/rhujisie-kajiri-6a9521149/' target='_blank'>LinkedIn</a>
                    </div>
                    <div>
                        <div><img src={Github} alt="github" className='com-icon'/></div>
                        <a rel="noopener" href='https://github.com/Rhujisie' target='_blank'>Github</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}