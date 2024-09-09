import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserRegister } from '../redux/slices/userSlices'

const Register = () => {
    const e=useRef()
    const p=useRef()
    const dispatch=useDispatch()
    const {error,loading}=useSelector(state=>state.user)
  return (
    <div>
        <input type='email' placeholder='Type Your email' ref={e}></input>
        <input type='password' placeholder='Type Your password' ref={p}></input>
        <button onClick={()=>{
           dispatch(UserRegister({
            email:e.current.value,
            password:p.current.value
           }))
        }}>Register</button>
                {loading && <h3>loading...</h3>}
        {error && <h3>{error}</h3>}
    </div>
  )
}

export default Register