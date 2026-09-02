import './register.css'
import reg1 from '../../assets/signup1-image.jpg'
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
const Register = () => {
    return (
        <>
            <div className="container-fluid reg1-container">
                <div className="row p-5 d-flex justify-content-center align-items-center ">
                    <div className="card border-0 rounded-4 w-75">
                        <div className="card-body  ">
                            <div className="row   p-5 ">
                                <div className="col-6">
                                    <div className='reg-1-head'>
                                        <h1 className='fw-bold'>Sign Up</h1>
                                    </div>
                                    <form className='mt-5'>
                                        <div className="input-box-reg1 mb-4">
                                            <FaUser className="icon" />
                                            <input
                                                type="text"
                                                className="form-control  ps-5"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="input-box-reg1 mb-4">
                                            <FaEnvelope className="icon" />
                                            <input
                                                type="email"
                                                className="form-control ps-5"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                        <div className="input-box-reg1 mb-4">
                                            <FaLock className="icon" />
                                            <input
                                                type="password"
                                                className="form-control ps-5"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="input-box-reg1 mb-4">
                                            <FaLock className="icon" />
                                            <input
                                                type="password"
                                                className="form-control ps-5"
                                                placeholder="Repeat your password"
                                            />
                                        </div>
                                        <div className="form-check mb-4">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="check"
                                            />
                                            <label className="form-check-label" htmlFor="check">
                                                I agree all statements in
                                                <a href="/">Terms of service</a>
                                            </label>
                                        </div>
                                        <button className="btn btn-info text-white px-5 py-2">
                                            Register
                                        </button>
                                    </form>
                                </div>
                                <div className="col-6  d-flex justify-content-end align-items-center">
                                    <img className='reg-1-img' src={reg1} />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Register;