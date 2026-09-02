// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";


// const PostUser = () => {
//     const navigate = useNavigate();

//     const postUser = async (data) => {
//         console.log("Post user = " + JSON.stringify(data));  //is mainly used for debugging. It prints your data object in a readable format in the browser console.
//         try {
//             await axios.post(`http://localhost:5454/user/post`, data);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     }


//     const { register, handleSubmit, formState: { errors } } = useForm({
//         defaultValues: {
//             name: "",
//             email: "",
//             phoneNumber: "",
//             gender: "",
//             status: "",
//         }
//     });

//     const submitForm = async (data) => {
//         data.status = data.status === "active" ? true : false;

//         postUser(data);
//         navigate('/');
//     }

//     return (
//         <>
//             <div className="card mx-5    mb-5">
//                 <div className="card-header">
//                     <h4 className="mb-0">Post User</h4>
//                 </div>
//                 <div className="card-body">
//                     <form onSubmit={handleSubmit(submitForm)}>
//                         <div className="mb-3">
//                             <label className="form-label">Name</label>
//                             <input
//                                 type="text" {...register("name")}
//                                 className="form-control"
//                                 placeholder="Enter Name"
//                             />
//                             {errors.name && <p className="text-danger">{"Name Is Required"}</p>}
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Email</label>
//                             <input
//                                 type="email" {...register("email")}
//                                 className="form-control"
//                                 placeholder="Enter Email"
//                             />
//                             {errors.email && <p className="text-danger">{"Email is Required"}</p>}
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Phone</label>
//                             <input
//                                 type="text" {...register("phoneNumber")}
//                                 className="form-control"
//                                 placeholder="Enter Phone"
//                             /> {errors.phoneNumber && <p className="text-danger">{"Phone is Required"}</p>}
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label d-block">
//                                 Gender
//                             </label>
//                             <div className="form-check form-check-inline">
//                                 <input
//                                     className="form-check-input"
//                                     type="radio"
//                                     name="gender" value="male"
//                                     id="male"{...register("gender")}
//                                 />
//                                 <label className="form-check-label">
//                                     Male
//                                 </label>
//                             </div>
//                             <div className="form-check form-check-inline">
//                                 <input
//                                     className="form-check-input"
//                                     type="radio"
//                                     name="gender" value="female"
//                                     id="female"{...register("gender")}
//                                 />
//                                 <label className="form-check-label">
//                                     Female
//                                 </label>
//                             </div>
//                             {errors.gender && <p className="text-danger">{"Gender Is required"}</p>}
//                         </div>
//                         <div className="mb-4">
//                             <label className="form-label d-block">
//                                 Status
//                             </label>
//                             <div className="form-check form-check-inline">
//                                 <input
//                                     className="form-check-input"
//                                     type="radio"
//                                     name="status" id="active" value="active"
//                                     {...register("status")}
//                                 />
//                                 <label className="form-check-label">
//                                     Active
//                                 </label>
//                             </div>
//                             <div className="form-check form-check-inline">
//                                 <input
//                                     className="form-check-input"
//                                     type="radio" value="inactive"
//                                     name="status" id="inactive"
//                                     {...register("status")}
//                                 />
//                                 <label className="form-check-label">
//                                     Inactive
//                                 </label>
//                             </div>
//                             {errors.status && <p className="text-danger">{"Status Is Required"}</p>}
//                         </div>
//                         <div className="">
//                             <button type="submit" className="btn btn-primary">
//                                 Add USer
//                             </button>
//                             <Link to="/" className="btn btn-info ms-5">
//                                 Back
//                             </Link>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default PostUser