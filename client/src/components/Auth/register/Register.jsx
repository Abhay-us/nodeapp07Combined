import './register.css'
import reg1 from '../../../assets/signup1-image.jpg'
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from 'react-hook-form';
// import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import axiosinterceptor from '../../../services/axiosinterceptor';
const Register = () => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            repeatedPassword: "",
            isTermsFlag: false
        }
    });

    const postUser = async (data) => {
        console.log("Form Data = ", data);
        if (data.password !== data.repeatedPassword) {
            alert("Password Does'nt Match");
            return;
        }

        try {
            await axiosinterceptor.post(`http://localhost:5454/activeuser/post`, data);
            toast.success("User Register Successfully.", { position: "bottom-right" })
            reset();
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="container-fluid reg1-container">
                <div className="row p-5 d-flex justify-content-center align-items-center ">
                    <div className="card border-0 rounded-4 w-75">
                        <div className="card-body  ">
                            <div className="row   p-5 ">
                                <div className="col-6">
                                    <div className='reg-1-head'>
                                        <h1 className='fw-bold'>Sign Up</h1>
                                    </div>
                                    <form onSubmit={handleSubmit(postUser)} className='mt-5'>
                                        <div className="input-box-reg1 mb-4">
                                            <FaUser className="icon" />
                                            <input
                                                type="text"    {...register("name")}
                                                className="form-control  ps-5"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="input-box-reg1 mb-4">
                                            <FaEnvelope className="icon" />
                                            <input
                                                type="email"
                                                {...register("email")}
                                                className="form-control ps-5"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                        <div className="input-box-reg1 mb-4">
                                            <FaLock className="icon" />
                                            <input
                                                type="password"   {...register("password")}
                                                className="form-control ps-5"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="input-box-reg1 mb-4">
                                            <FaLock className="icon" />
                                            <input
                                                type="password"
                                                {...register("repeatedPassword")}
                                                className="form-control ps-5"
                                                placeholder="Repeat your password"
                                            />
                                        </div>
                                        <div className="form-check mb-4">
                                            <input
                                                className="form-check-input"   {...register("isTermsFlag")}
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