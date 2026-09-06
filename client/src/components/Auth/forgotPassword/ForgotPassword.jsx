import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { userValidation } from "../../../validation/userValidation";
import './forgotPassword.css'

import axios from "axios";


const ForgotPassword = () => {
    const navigate = useNavigate();

    const [showPasswordPage, setShowPasswordPage] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [activeUser, setActiveUser] = useState();

    const submitForm = async (data) => {

        console.log(data);

        const response = await axios.post(`http://localhost:5454/activeuser/getuserbyemail`, { email: data.email });

        setActiveUser(response.data);
        console.log(response.data);

        setShowPasswordPage(true);
    }

    const resetPassword = async (data) => {
        if (data.password !== data.confirmPassword) {
            toast.error("Password Doesn't match.")
            return;
        }

        toast.info("Password Updated Succesfully")

        console.log(data);
        reset();
        navigate('/login')
    };
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
            <div className="container-fluid mt-4 forgot-pass-container p-5">
                <div className="container">
                    {!showPasswordPage ? (
                        <div>
                            <h2 className="text-center text-white fw-bold">
                                Forgot Password
                            </h2>
                            <form onSubmit={handleSubmit(submitForm)}>
                                <div className="mb-3 mt-5">
                                    <label className="form-label"> Enter Your Email</label>
                                    <input
                                        type="email" {...register("email", userValidation.email)}
                                        className="form-control"
                                        placeholder="Enter Email"
                                    />
                                </div>
                                {errors.email && <p className="text-danger">{errors.email.message}</p>}
                                <div className="text-center mt-3">
                                    <button className="btn btn-danger">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                    ) : (
                        <div>
                            <h2 className="text-center text-danger fw-bold">
                                Reset Password
                            </h2>

                            <form onSubmit={handleSubmit(resetPassword)}>

                                <div className="mb-3 mt-5">
                                    <label className="form-label">
                                        New Password
                                    </label>

                                    <input
                                        type="password"
                                        {...register("password")}
                                        className="form-control"
                                        placeholder="Enter New Password"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Confirm Password
                                    </label>

                                    <input
                                        type="password"
                                        {...register("confirmPassword")}
                                        className="form-control"
                                        placeholder="Confirm Password"
                                    />
                                </div>

                                <div className="text-center mt-3">
                                    <button type="button" className="btn btn-info text-white" onClick={() => {
                                        setShowPasswordPage(false);
                                    }}>
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-danger ms-4"
                                    >
                                        Reset Password
                                    </button>
                                </div>

                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ForgotPassword