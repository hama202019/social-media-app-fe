import React, {useState} from 'react'
import './LoginForm.css'

const LoginForm = ({setIsSignUp}) => {
  const [data, setData] = useState({email: '', password: ''})

  const changeHandler = e => {
    setData({...data, [e.target.name]: e.target.value})
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <form className="LoginForm" onSubmit={submitHandler}>
        <h2>Login</h2>
        <div>
            <input placeholder='email' type='email' name='email' onChange={changeHandler} value={data.email}/>
        </div>
        <div className="password">
            <input type="password" placeholder='password' name='password' onChange={changeHandler} value={data.password}/>
        </div>
        <h6 onClick={setIsSignUp}>Don't have an account? <span>Signup</span> </h6>
        <button className='button loginButton'>Login</button>
    </form>
  )
}

export default LoginForm