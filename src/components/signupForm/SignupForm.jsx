import React from 'react'
import { useState } from 'react'
import './SignupForm.css'
import * as authApi from '../../api/authRequests'
import {useDispatch, useSelector} from 'react-redux'
import * as authActions from '../../actions/authActions'

const SignupForm = ({setIsSignUp}) => {
  const [data, setData] = useState({firstName: '', lastName: '', email: '', password: '', confirmPassword: ''})
  const [equal, setEqual] = useState(true)
  const dispatch = useDispatch()
  const reqError = useSelector(state => state.authReducer.error)

  const changeHandler = e => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const submitHandler = async e => {
    e.preventDefault()
    if(data.password !== data.confirmPassword) setEqual(false);
    dispatch(authActions.sendAuthReq())
    try {
      const result = await authApi.signUp(data)
      dispatch(authActions.authSuccess())
      console.log(result)
    } catch (error) {
      dispatch(authActions.authFail())
    }
  }

  return (
    <form className="SignupForm" onSubmit={submitHandler}>
        <h2>Signup</h2>
        {reqError ? <p style={{color: 'red'}}>oops, something went wrong</p> : ''}
        <div className="fullName">
            <input type='text' placeholder='firstName' name='firstName' onChange={changeHandler} value={data.firstName}/>
            <input type='text' placeholder='lastName' name='lastName' onChange={changeHandler} value={data.lastName}/>
        </div>
        <div>
            <input placeholder='email' type='email' name='email' onChange={changeHandler} value={data.email}/>
        </div>
        <div className="password">
            <input type="password" placeholder='password' name='password' onChange={changeHandler} value={data.password}/>
            <input type="password" placeholder='confirm password' name='confirmPassword' onChange={changeHandler} value={data.confirmPassword}/>
        </div>
        <span style={{display: equal ? 'none' : 'block', color: 'red'}}>
          The passwords should match each other!
        </span>
        <h6 onClick={setIsSignUp}>Have an account? <span>Login</span> </h6>
        <button className='button signupButton' >Signup</button>
    </form>
  )
}

export default SignupForm