import { useEffect, useState } from "react"
import axiosinterceptor from "../services/axiosinterceptor";

const ActiveUser = () => {
    const [users, setUsers] = useState([]);

    const fetchActiveUser = async () => {
        try {
            const response = await axiosinterceptor.get('/activeuser/get');
            console.log(response.data);
            setUsers(response.data);
        } catch (error) {
            console.log('Error fetching users: ', error);
        }
    }
    useEffect(() => {
        fetchActiveUser();
    }, []);
    return (
        <>
            <div className="card mx-5">
                <div className="card-header d-flex justify-content-between">
                    <h4 className="mb-0">View All Active Users</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover text-center">
                            <thead className="">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Register Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => (
                                        <tr key={user._id}>
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.createdAt}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActiveUser
