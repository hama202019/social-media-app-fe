import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../assets/img/logo.png'
import SignupForm from '../../components/signupForm/SignupForm'
import LoginForm from '../../components/loginForm/LoginForm'

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webName">
          <h1>Social Media App</h1>
          <h4>Explore the ideas throughout the world</h4>
        </div>
      </div>
      {isSignUp ? <SignupForm setIsSignUp={() => setIsSignUp(false)}/> : <LoginForm setIsSignUp={() => setIsSignUp(true)}/>}
    </div>
  )
}

export default Auth