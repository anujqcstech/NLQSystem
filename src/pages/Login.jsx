import React from 'react'
import logo from '../../public/logo.png'
import { IoGlobeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <section className='login'>
            <div className="brand-logo">
                <img src={logo} alt="" />
            </div>

            <div className="col-lg-3 m-auto">
                <div className="card">
                    <div className="card-body">
                        <center>
                            <div className='icon-bg-one'>
                                <IoGlobeOutline className='text-dark fs-4' />
                            </div>
                            <p className='bg-white mt-3 rounded'>spearsq-my.sharepoint.com</p>
                        </center>
                        <div>
                            <h4>Sign In</h4>
                            <p className='text-secondary'>with your Internet Identity</p>
                            <Link to={'/dashboard'} className="btn btn-dark w-100">Continue</Link>
                            <hr />

                            <div className="form-check form-switch mt-3">
                                <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                                <label className="form-check-label" for="switchCheckDefault">Enable multiple account</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
