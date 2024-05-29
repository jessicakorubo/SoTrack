import React from 'react'
import './Register.css';
import sotrack_car from '../../assets/about-bg.png';

const Register = () => {
    return (
        <div className='register'>
            <h1>Register With Us</h1>
            <div className="reg">
                <div className="register-form-container">

                    <div className="register-form">

                        <div className='name'>
                            <label htmlFor="">Name</label> <br />
                            <input type="text" name='fullname' />
                        </div>

                        <div className='email'>
                            <label htmlFor="">Email</label> <br />
                            <input type="text" name='fullname' />
                        </div>

                        <div className='number'>
                            <label htmlFor="number">Phone Number</label> <br />
                            <input type="text" name='number' />
                        </div>

                        <div className='plan'>
                            <label htmlFor="plan">Plan</label> <br />
                            <select name="plan" id="plan">
                                <option value="Manual">Manual</option>
                                <option value="Automatic">Automatic</option>
                                <option value="Both">Both</option>
                            </select>
                        </div>

                        <div className='submit-button'>
                            <a href="" onClick=''>Submit</a>
                        </div>

                    </div>
                    <div className="register-pic">
                        <img src={sotrack_car} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register