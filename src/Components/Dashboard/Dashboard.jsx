import React from 'react'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({token}) => {
  
  let navigate = useNavigate();

  function handleLogout(){
    sessionStorage.removeItem('token')
    localStorage.removeItem(key)
    navigate('/')
  }

  return ( 
    <div>
      <h1>Dashboard</h1>
      <p>Seja bem vindo, {token.user.user_metadata.username}</p>
      <button onClick={handleLogout}> Logout</button>
    </div>
  )
}

export default Dashboard