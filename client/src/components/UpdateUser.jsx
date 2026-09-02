// import axios from "axios";
// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate, useParams, Link } from "react-router-dom";

// const UpdateUSer = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     // const [user, setUser] = useState();

//     const { register, handleSubmit, reset, formState: { errors } } = useForm({
//         defaultValues: {
//             name: "",
//             email: "",
//             phoneNumber: "",
//             gender: "",
//             status: "inactive",
//         }
//     });


//     const fetchUserById = async () => {
//         try {

//             const response = await axios.get(`http://localhost:5454/user/${id}`);

//             const fetchedUser = response.data;
//             // setUser(fetchedUser);

//             reset({
//                 name: fetchedUser?.name || "",
//                 email: fetchedUser?.email,
//                 phoneNumber: fetchedUser.phoneNumber,
//                 gender: fetchedUser.gender === "male" ? "male" : "female",
//                 status: fetchedUser.status === true ? "active" : "inactive",
//             })

//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     }


//     const putUser = async (id, data) => {
//         console.log("Post USer= " + JSON.stringify(data));
//         try {
//             await axios.put(`http://localhost:5454/user/put/${id}`, data);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     }



//     const submitForm = async (data) => {

//         const requestData = {
//             ...data,
//             status: data.status === "active",
//         }

//         await putUser(id, requestData);

//         setTimeout(() => {
//             navigate("/")
//         }, 2000)
//     }


//     useEffect(() => {
//         fetchUserById();
//     }, [id]);
//     return (
//         <>
//             <div className="card mx-5    mb-5">
//                 <div className="card-header">
//                     <h4 className="mb-0">Update User</h4>
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
//                                     id="male" {...register("gender")}
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
//                                     id="female" {...register("gender")}
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
//                                 Submit
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

// export default UpdateUSer
