import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { userValidation } from "../validation/userValidation";

const UserTableById = () => {
    const { id } = useParams();
    const [user, setUser] = useState();

    // edit
    const [editUser, setEditUser] = useState(null);
    const [editShow, setEditShow] = useState(false);
    const handleEditClose = () => setEditShow(false);

    const fetchUserById = async () => {
        try {
            
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }


    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phoneNumber: "",
            gender: "",
            status: "",
        }
    });


    // edit user
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
            await axios.put(
                `http://localhost:5454/user/put/${id}`, data
            );
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const submitEditForm = async (data) => {
        const requestData = {
            ...data,
            status: data.status === "active"
        };
        await putUser(editUser._id, requestData);
        fetchUserById();
        reset();
        handleEditClose();
    };

    useEffect(() => {
        fetchUserById();
    }, [id]);

    return (
        <>
            <div className="card mx-5">
                <div className="card-header d-flex justify-content-between">
                    <h4 className="mb-0">
                        {user?.name}
                    </h4>
                    <div>
                        <Button
                            variant="info"
                            className="me-4 text-white"
                            onClick={() => handleEditShow(user)}
                        >
                            Edit
                        </Button>
                        <Link
                            to={`/`}
                            className="btn btn-info text-white"
                        >
                            Back
                        </Link>
                    </div>
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.phoneNumber}</td>
                                    <td>{user?.gender}</td>
                                    <td>
                                        {user?.status ? "True" : "False"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* edit modal */}
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
                            {errors.name && <p className="text-danger">{"Name Is Required"}</p>}
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
                            {errors.email && <p className="text-danger">{"Email is Required"}</p>}
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
                            {errors.phoneNumber && <p className="text-danger">{"Phone is Required"}</p>}
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

        </>
    )
}

export default UserTableById

