import React from 'react'
import './SignupForm.css'
const SignupForm = ({setIsSignUp}) => {
  return (
    <div className="SignupForm">
        <h2>Signup</h2>
        <div className="fullName">
            <input type='text' placeholder='firstName' />
            <input type='text' placeholder='lastName' />
        </div>
        <div>
            <input placeholder='email' type='email' />
        </div>
        <div className="password">
            <input type="password" placeholder='password' />
            <input type="password" placeholder='confirm password' />
        </div>
        <h6 onClick={setIsSignUp}>Have an account? <span>Login</span> </h6>
        <button className='button signupButton'>Signup</button>
    </div>
  )
}

export default SignupForm