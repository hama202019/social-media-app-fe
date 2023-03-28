import React from 'react'
import './Auth.css'
import Logo from '../../assets/img/logo.png'
import SignupForm from '../../components/signupForm/SignupForm'

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webName">
          <h1>Social Media App</h1>
          <h4>Explore the ideas throughout the world</h4>
        </div>
      </div>
      <SignupForm />
    </div>
  )
}

export default Auth