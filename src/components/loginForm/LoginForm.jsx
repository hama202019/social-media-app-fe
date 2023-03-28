import React from 'react'
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div className="LoginForm">
        <h2>Login</h2>
        <div>
            <input placeholder='email' type='email' />
        </div>
        <div className="password">
            <input type="password" placeholder='password' />
        </div>
        <h6>Don't have an account? <span>Signup</span> </h6>
        <button className='button loginButton'>Login</button>
    </div>
  )
}

export default LoginForm