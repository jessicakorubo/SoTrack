import React from 'react';
import './Contact.css';
import email from '../../assets/envelope.png';
import phone from '../../assets/phonecall.png';
import location from '../../assets/location.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Contact = () => {
    return (
        <div className='contact'>
            <h1>Contact us</h1>
            <div className="contact-content">
                <div className="contact-form">
                    <div className='form-info'>
                        <form action="">
                        <div className="form-name">
                            <div className='firstname'>
                                <label htmlFor="firstname">Firstname</label> <br />
                                <input type="text" name='firstname' id='firstname' />
                            </div>
                            <div className='lastname'>
                                <label htmlFor="lastname">Lastname</label> <br />
                                <input type="text" name="lastname" id="lastname" />
                            </div>
                        </div>
                   
                        <div className="email_address">
                            <label htmlFor="email">Email address</label> <br />
                            <input type="email" name="email" id="email_address" />
                        </div>
                        <div className="message">
                            <label htmlFor="message">Message</label> <br />
                            <textarea name="message" id=""></textarea>
                        </div>
                        <div>
                            <input className='submit' type="submit" value="Send message" />
                        </div>
                        </form>
                        
                    </div>
                </div>
                <div className="contact-details">
                    <div className='det-info' >
                        <div className='con-icon'>
                            <img src={email} alt="" />
                        </div>
                            <p data-aos="zoom-out-down">Sotrack@gmail.com</p>
                            
                    </div>
                    <div className="det-info">
                        <div className='con-icon'>
                            <img src={location} alt="" />
                        </div>
                        <p data-aos="zoom-out-down">NO 100, Dr Peter Odili Road, By roundabout, Odiliz Plaza</p>
                    </div>
                    <div className="det-info">
                        <div className='con-icon'>
                            <img src={phone} alt="" />
                        </div>
                            <p data-aos="zoom-out-down">090382479232</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
