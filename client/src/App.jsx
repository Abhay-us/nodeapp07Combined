import { Routes, Route } from 'react-router-dom'
import './App.css'
import UserTable from './components/UserTable'
import UserTableById from './components/UserTableById'
import Register from './components/Auth/register/Register'
import Login from './components/Auth/login/Login'
import ForgotPassword from './components/Auth/forgotPassword/ForgotPassword'

// import UpdateUser from './components/UpdateUser'

function App() {
  return (
    <>
      <div className="container pt-5">
        <h1 className="text-center">
          User Management System
        </h1>
      </div>
      <Routes>
        <Route path='/' element={<UserTable />}></Route>
        {/* <Route path="/update-user/:id" element={<UpdateUser />} /> */}
        <Route path="/view-user/:id" element={<UserTableById />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
      </Routes>

    </>
  )
}

export default App
