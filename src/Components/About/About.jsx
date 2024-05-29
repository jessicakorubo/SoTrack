import React from 'react';
import './About.css'
import about_pic from '../../assets/Sotrack-animated.jpg';
import icons_tick from '../../assets/icons-tick.png'

const About = () => {
    return (
        <div className='about'>

            <h1>About SO-track</h1>

            <div className="about-content">
                <div className="about-text">

                    <p>We are a driving school founded in 2005, and our services range from
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                        asperiores deleniti consequuntur commodi,
                        optio iure ut eos cumque accusantium repudiandae provident alias
                        ab fugit vitae officiis et quam temporibus magni!
                    </p>
                    <div className='about-points'>
                        <div className="about-points1">
                            <div className='about-point'>
                                <img src={icons_tick} alt="" />
                                <p>Expert Instructors</p>
                            </div>
                            <div className='about-point'>
                                <img src={icons_tick} alt="" />
                                <p>Training exams and tests</p>
                            </div>
                        </div>

                        <div className="about-points2">
                            <div className='about-point'>
                                <img src={icons_tick} alt="" />
                                <p>Safety Driving</p>
                            </div>
                            <div className='about-point'>
                                <img src={icons_tick} alt="" />
                                <p>Flexible Schedule</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="about-pic">
                    <img src={about_pic} alt="" />
                    <div className="offers">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About