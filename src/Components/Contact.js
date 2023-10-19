import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSquareTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
function Contact(){
    return(
        <>
            <div className="contact-us pt-5">
                <div className="container pt-5">
                    <h1>Contact US</h1>
                    <div className="row pt-5">
                        <div className="col-lg-6">
                        <div className="content">
                            <h2>Can We Help You?</h2>
                            <p>We Are Happy To Use Our Website.</p>
                            <p>Send Us Your Inquiry And We Will Reply To You As Soon As Possible</p>
                            <div className="links">
                                <p>Contact Us Through E-Mail</p>
                                <span>Mostafa.Nashaat2001@gmail.com</span>
                                <div className="social-links">
                                <p>Or Through Social Networking Sites</p>
                                <ul>
                                    <li>
                                        <i className='facebook'><FontAwesomeIcon icon={faFacebook} /></i>
                                    </li>
                                    <li>
                                        <i className='twitter'><FontAwesomeIcon icon={faSquareTwitter} /></i>
                                    </li>
                                    <li>
                                        <i className='youtube'><FontAwesomeIcon icon={faYoutube} /></i>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form">
                                <form action="">
                                    <input className="input" type="text" placeholder="Your Name" name="name" />
                                    <input className="input" type="email" placeholder="Your Email" name="email" />
                                    <input className="input" type="text" placeholder="Your Phone" name="mobile" />
                                    <textarea className="input" placeholder="Tell Us About Your Needs" name="message"></textarea>
                                    <input type="submit" value="Send" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;