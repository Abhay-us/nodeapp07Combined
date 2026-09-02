import './login.css'
import { FaLock, FaUser } from "react-icons/fa";

const Login = () => {
    return (
        <>
            <div className="container-fluid login3-container">
                <div className="row justify-content-center align-items-center p-5">
                    <div className="card login3-card border-0">
                        <div className="card-body p-5">
                            <div className="d-flex justify-content-between align-items-center">
                            </div>
                            <h3 className="text-white login3-heading  mt-5">
                                Welcome Back
                            </h3>
                            <div className="input-group login3-input mt-4">
                                <span className="input-group-text login3-icon">
                                    <FaUser />
                                </span>
                                <input
                                    type="text"
                                    className="form-control bg-transparent login3-textbox"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="input-group login3-input mt-3">
                                <span className="input-group-text login3-icon">
                                    <FaLock />
                                </span>
                                <input
                                    type="password"
                                    className="form-control login3-textbox"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="d-flex justify-content-between text-white mt-4 ">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="remember"
                                    />

                                    <label
                                        className="form-check-label"
                                        htmlFor="remember"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                <a href="#" className="login3-link">
                                    Forgot Password?
                                </a>
                            </div>
                            <button className="btn login3-login-btn w-100 mt-5">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;