// import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form"; 
import { ToastContainer, toast } from 'react-toastify'
import Table from 'react-bootstrap/Table';
import { userValidation } from "../validation/userValidation";
import axiosinterceptor from "../services/axiosinterceptor";

const UserTable = () => {

    const [user, setUsers] = useState([]);

    // add/post user
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true) };


    // edit
    const [editUser, setEditUser] = useState(null);
    const [editShow, setEditShow] = useState(false);
    const handleEditClose = () => setEditShow(false);

    //dellte
    const [deleteUserData, setDeleteUserData] = useState(null);
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteClose = () => setDeleteShow(false);


    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phoneNumber: "",
            gender: "",
            status: "",
        }
    });

    const submitForm = async (data) => {
        data.status = data.status === "active" ? true : false;
        await postUser(data);
        fetchUsers();
        reset();
        handleClose();
    }


    //get
    const fetchUsers = async () => {
        try {
            const response = await axiosinterceptor.get('/user');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    //delete
    const deleteUser = async (id) => {
        try {
            await axiosinterceptor.delete(`/user/delete/${id}`);
            fetchUsers();
            handleDeleteClose();
            toast.warn("Deleted Successfully", { position: "top-right" })
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    const handleDeleteShow = (user) => {
        setDeleteUserData(user);
        setDeleteShow(true);
    };


    // post user
    const postUser = async (data) => {
        console.log("Post user = " + JSON.stringify(data));  //is mainly used for debugging. It prints your data object in a readable format in the browser console.
        try {
            await axiosinterceptor.post(`/user/post`, data);
            toast.success("User Added Successfully.", { position: "bottom-right" })
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }



    //edit user
    const handleEditShow = (user) => {
        setEditUser(user);
        reset({
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
            status: user.status ? "active" : "inactive"
        });
        setEditShow(true);
    };
    const putUser = async (id, data) => {
        try {
            await axiosinterceptor.put(
                `/user/put/${id}`,
                data
            );
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };
    const submitEditForm = async (data) => {
        data.status = data.status === "active" ? true : false;

        await putUser(editUser._id, data);
        fetchUsers();
        reset();
        handleEditClose();
        toast.dark("User Updated successfully", { position: "top-center" });
    };


    useEffect(() => {
        fetchUsers();
    }, []);
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
            <div className="card mx-5">
                <div className="card-header d-flex justify-content-between">
                    <h4 className="mb-0">View All Users</h4>
                    <Button variant="primary" onClick={handleShow}>
                        Add User
                    </Button>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover text-center">
                            <thead className="">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Gender</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((user, index) => (
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.status ? "True" : "False"}</td>
                                        <td>
                                            <Link to={`/view-user/${user._id}`} className="btn btn-info me-4 text-white">
                                                Info
                                            </Link>
                                            <Button
                                                variant="info"
                                                className="me-4 text-white"
                                                onClick={() => handleEditShow(user)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="danger"
                                                className="text-white"
                                                onClick={() => handleDeleteShow(user)}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add  User</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    <form className="p-4" onSubmit={handleSubmit(submitForm)}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text" {...register("name", userValidation.name)}
                                className="form-control"
                                placeholder="Enter Name"
                            />
                            {errors.name && <p className="text-danger">{errors.name.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email" {...register("email", userValidation.email)}
                                className="form-control"
                                placeholder="Enter Email"
                            />
                            {errors.email && <p className="text-danger">{errors.email.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                type="text" {...register("phoneNumber", userValidation.phoneNumber)}
                                className="form-control"
                                placeholder="Enter Phone"
                            /> {errors.phoneNumber && <p className="text-danger">{errors.phoneNumber.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label d-block">
                                Gender
                            </label>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender" value="male"
                                    id="male"{...register("gender", userValidation.gender)}
                                />
                                <label className="form-check-label">
                                    Male
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender" value="female"
                                    id="female"{...register("gender", userValidation.gender)}
                                />
                                <label className="form-check-label">
                                    Female
                                </label>
                            </div>
                            {errors.gender && <p className="text-danger">{"Gender Is required"}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="form-label d-block">
                                Status
                            </label>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="status" id="active" value="active"
                                    {...register("status", userValidation.status)}
                                />
                                <label className="form-check-label">
                                    Active
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio" value="inactive"
                                    name="status" id="inactive"
                                    {...register("status", userValidation.status)}
                                />
                                <label className="form-check-label">
                                    Inactive
                                </label>
                            </div>
                            {errors.status && <p className="text-danger">{"Status Is Required"}</p>}
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-primary">
                                Add USer
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            {/* //edit modal  */}
            <Modal
                show={editShow}
                onHide={handleEditClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    <form
                        className="p-4"
                        onSubmit={handleSubmit(submitEditForm)}
                    >
                        <div className="mb-3">
                            <label className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                {...register("name", userValidation.name)}
                                className="form-control"
                            />
                            {errors.name && <p className="text-danger">{errors.name.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                {...register("email", userValidation.email)}
                                className="form-control"
                            />
                            {errors.email && <p className="text-danger">{errors.email.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Phone
                            </label>
                            <input
                                type="text"
                                {...register("phoneNumber", userValidation.phoneNumber)}
                                className="form-control"
                            />
                            {errors.phoneNumber && <p className="text-danger">{errors.phoneNumber.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label d-block">
                                Gender
                            </label>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value="male"
                                    {...register("gender", userValidation.gender)}
                                />
                                <label className="form-check-label">
                                    Male
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value="female"
                                    {...register("gender", userValidation.gender)}
                                />
                                <label className="form-check-label">
                                    Female
                                </label>
                            </div>
                            {errors.gender && <p className="text-danger">{"Gender Is required"}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="form-label d-block">
                                Status
                            </label>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value="active"
                                    {...register("status", userValidation.status)}
                                />
                                <label className="form-check-label">
                                    Active
                                </label>

                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value="inactive"
                                    {...register("status", userValidation.status)}
                                />
                                <label className="form-check-label">
                                    Inactive
                                </label>
                            </div>
                            {errors.status && <p className="text-danger">{"Status Is Required"}</p>}
                        </div>
                        <div className="d-flex gap-2">
                            <Button
                                type="submit"
                                variant="primary"
                            >
                                Update User
                            </Button>
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={handleEditClose}
                            >
                                Close
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            {/* delete modal */}
            <Modal
                show={deleteShow}
                onHide={handleDeleteClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {deleteUserData && (
                        <div>
                            <p className="text-danger fw-bolder">
                                Are you sure you want to delete this user?
                            </p>
                            <Table bordered >
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Name:</strong>
                                        </td>
                                        <td className="text-center">
                                            {deleteUserData.name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Email:</strong>

                                        </td>
                                        <td className="text-center">
                                            {deleteUserData.email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Phone:</strong>
                                        </td>
                                        <td className="text-center">
                                            {deleteUserData.phoneNumber}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Gender:</strong>
                                        </td>
                                        <td className="text-center">
                                            {deleteUserData.gender}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Status:</strong>
                                        </td>
                                        <td className="text-center">
                                            {deleteUserData.status
                                                ? "True"
                                                : "False"}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className="d-flex gap-2 justify-content-end">
                                <Button
                                    variant="secondary"
                                    onClick={handleDeleteClose}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="danger"
                                    onClick={() =>
                                        deleteUser(deleteUserData._id)
                                    }
                                >
                                    Confirm Delete
                                </Button>
                            </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal >
        </>
    )
}

export default UserTable