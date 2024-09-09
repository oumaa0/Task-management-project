import React from 'react'
import { useRef } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { UserLogin } from '../redux/slices/userSlices'

const Login = () => {
    const email=useRef()
    const password=useRef()
    const dispatch=useDispatch()
    const {error,loading}=useSelector(state=>state.user)
  return (
    <div>

        <input type='email' placeholder='type your email' ref={email}></input>
        <input type='password' placeholder='type your password' ref={password}></input>
        <button onClick={()=>{dispatch(UserLogin({
            email:email.current.value, 
            password:password.current.value,
        }))}}>Login</button>
        {loading && <h3>loading....</h3>}
        {error && <h3>{error}</h3>}
    </div>
  )
}

export default Login