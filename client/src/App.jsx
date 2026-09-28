import { Routes, Route } from 'react-router-dom'
import './App.css'
import UserTable from './components/UserTable'
import UserTableById from './components/UserTableById'
import Register from './components/Auth/register/Register'
import Login from './components/Auth/login/Login'
import ForgotPassword from './components/Auth/forgotPassword/ForgotPassword'
import ProtectedRoute from './components/Auth/ProtectedRoute'
import { useNavigate } from "react-router-dom";
import ActiveUser from './components/ActiveUser'
import Button from 'react-bootstrap/Button';


// import UpdateUser from './components/UpdateUser'

function App() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("activeUser");
    navigate("/login");
  }
  return (
    <>
      <div className="container pt-5">
        <h1 className="text-center">
          User Management System
        </h1>
        {window.location.pathname !== "/login"?
          <Button onClick={logout}>
            Logout
          </Button> : ""
        }
      </div>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />

        <Route element={<ProtectedRoute />} >
          <Route path='/' element={<UserTable />}></Route>
          <Route path='/activeuser' element={<ActiveUser />}></Route>
          {/* <Route path="/update-user/:id" element={<UpdateUser />} /> */}
          <Route path="/view-user/:id" element={<UserTableById />} />

        </Route>

      </Routes>

    </>
  )
}

export default App
