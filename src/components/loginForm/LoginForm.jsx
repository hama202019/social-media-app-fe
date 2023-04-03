import React, {useState} from 'react'
import './LoginForm.css'
import * as authApi from '../../api/authRequests'
import { useDispatch, useSelector } from 'react-redux'
import * as authActions from '../../actions/authActions'

const LoginForm = ({setIsSignUp}) => {
  const [data, setData] = useState({email: '', password: ''})
  const dispatch = useDispatch()
  const {errMsg, error, loading} = useSelector(state => state.authReducer)
  const changeHandler = e => {
    setData({...data, [e.target.name]: e.target.value})
  }
  const submitHandler = async e => {
    e.preventDefault()
    dispatch(authActions.sendAuthReq())
    try {
      const result = await authApi.logIn(data)
      dispatch(authActions.authSuccess(result.data))
    } catch (e) {
      dispatch(authActions.authFail(e.response.data.error))
    }
  }

  return (
    <form className="LoginForm" onSubmit={submitHandler}>
        <h2>Login</h2>
        {error ? <p style={{color: 'red'}}>{errMsg}</p> : ''}
        <div>
            <input placeholder='email' type='email' name='email' onChange={changeHandler} value={data.email}/>
        </div>
        <div className="password">
            <input type="password" placeholder='password' name='password' onChange={changeHandler} value={data.password}/>
        </div>
        <h6 onClick={setIsSignUp}>Don't have an account? <span>Signup</span> </h6>
        <button className='button loginButton' disabled={loading}>{loading ? "loading" : 'login'}</button>
    </form>
  )
}

export default LoginForm