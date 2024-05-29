import React from 'react';
import  './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import cert_icon from '../../assets/cert_icon.png'
import lic_icon from '../../assets/lic_icon.png'
import test_icon from '../../assets/test_icon.png'

const Services = () => {
  return (
    <div className='services'>
        <div className="services-head">
            <h1>Our Services</h1>

            <div className="services-content">
                <div className='service' data-aos="zoom-in-up">
                    <img src={cert_icon} alt="" />
                    <div>
                        <h3>Certifications</h3>
                        <p>We offer widely recognized certifications to all and Lorem 
                            ipsum dolor sit amet, consectetur a
                            dipisicing elit. Sunt, omnis?
                        </p>
                    </div>
                </div>

                <div className='service' data-aos="zoom-in-up">
                    <img src={test_icon} alt="" />
                    <div>
                        <h3>Driving tests</h3>
                        <p>We offer certifications and Lorem 
                            ipsum dolor sit amet, consectetur a
                            dipisicing elit. Sunt, omnis?
                        </p>
                    </div>
                </div>

                <div className='service' data-aos="zoom-in-up">
                    <img src={lic_icon} alt="" />
                    <div>
                        <h3>Driving License</h3>
                        <p>We offer certifications and Lorem 
                            ipsum dolor sit amet, consectetur a
                            dipisicing elit. Sunt, omnis?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services