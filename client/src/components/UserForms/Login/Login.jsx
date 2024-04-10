import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div>
      <form className="login">
        <input type="text" className="login_username" placeholder="Username" required/>
        <input type="password" className="login_password" placeholder="Password" required/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login