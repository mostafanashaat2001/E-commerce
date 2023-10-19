import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faClock, faPhoneVolume, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import gallary1 from './Images/gallery-01.png'
import gallary2 from './Images/gallery-02.png'
import gallary3 from './Images/gallery-03.jpg'
import gallary4 from './Images/gallery-04.png'
import gallary5 from './Images/gallery-05.jpg'
import gallary6 from './Images/gallery-06.png'
function Footer(){
    return(
        <>
            
            <div className="footer mt-5">
                <div className="container">
                    <div className="box">
                        <h3>Mostafa</h3>
                        <ul className="social">
                            <li>
                                <a href="https://www.facebook.com/mostafapasha.hasen/" className="facebook">
                                    <i>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="twitter">
                                    <i>
                                    <FontAwesomeIcon icon={faTwitter} />
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="youtube">
                                    <i >
                                    <FontAwesomeIcon icon={faYoutube} />
                                    </i>
                                </a>
                            </li>
                        </ul>
                        <p className="text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
                        </p>
                    </div>
                    <div className="box">
                        <ul className="links">
                            <li>
                                <i><FontAwesomeIcon icon={faAnglesRight} /></i>
                                <a href="/#">Important Link 1</a>
                            </li>
                            <li>
                                <i><FontAwesomeIcon icon={faAnglesRight} /></i>
                                <a href="/#">Important Link 2</a>
                            </li>
                            <li>
                                <i><FontAwesomeIcon icon={faAnglesRight} /></i>
                                <a href="/#">Important Link 3</a>
                            </li>
                            <li>
                                <i><FontAwesomeIcon icon={faAnglesRight} /></i>
                                <a href="/#">Important Link 4</a>
                            </li>
                            <li>
                                <i><FontAwesomeIcon icon={faAnglesRight} /></i>
                                <a href="/#">Important Link 5</a>
                            </li>

                        </ul>
                    </div>
                    <div className="box">
                        <div className="line">
                            <i>
                            <FontAwesomeIcon icon={faLocationDot} />
                            </i>
                            <div className="info">Egypt, Cairo, Shobra</div>
                        </div>
                        <div className="line">
                            <i>
                            <FontAwesomeIcon icon={faClock} />
                            </i>
                            <div className="info">Business Hours: From 10:00 To 18:00</div>
                        </div>
                        <div className="line">
                            <i><FontAwesomeIcon icon={faPhoneVolume} /></i>
                            <div className="info">
                            <span>+201149456825</span>
                            </div>
                        </div>
                    </div>
                    <div className="box footer-gallery">
                        <img src={gallary1} alt="" />
                        <img src={gallary2} alt="" />
                        <img src={gallary3} alt="" />
                        <img src={gallary4} alt="" />
                        <img src={gallary5} alt="" />
                        <img src={gallary6} alt="" />
                    </div>
                </div>
                <p className="copyright">Made With &lt; By Mostafa Nashaat</p>
            </div>
        </>
    )
}
export default Footer;