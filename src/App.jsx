import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserdata] = useContext(AuthContext) // ✅ use object, not array destructure

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role) // 'admin' or 'employee'
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    // ✅ check admin
    if ( email =='admin@example.com' && password =='123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    // ✅ check employees
    else if (userData) {
      const employee = userData.employees.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert("Invalid Credentials")
      }
    }
  }

const handleLogout = () => {
  localStorage.removeItem('loggedInUser')
  setUser(null)
  setLoggedInUserData(null)
}


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? (
        <AdminDashboard changeUser={setUser} handleLogout={handleLogout} data={loggedInUserData} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} handleLogout={handleLogout} />
      ) : null}
    </>
  )
}

export default App
