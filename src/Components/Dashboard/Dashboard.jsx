import React from 'react'
import './Dashboard.css'

const Dashboard = ({token}) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Seja bem vindo, {token.user.user_metadata.username}</p>
    </div>
  )
}

export default Dashboard