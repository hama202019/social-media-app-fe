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
        <button className='button loginButton'>Login</button>
    </div>
  )
}

export default LoginForm