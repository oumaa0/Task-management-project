import React, { useRef } from 'react'
import { CreateTaskr } from '../redux/slices/task.Slices'
import {useDispatch} from 'react-redux'


const TaskForm = () => {
    const title=useRef()
    const description=useRef()
    const dispatch=useDispatch()

  return (
    <div>
        <input type='text' placeholder='Type your task title' ref={title}></input>
        <input type='text' placeholder='Type your task description' ref={description}></input>
        <button onClick={()=>{
            dispatch(CreateTaskr({
                title:title.current.value,
                desc:description.current.value,
            }))
        }}>Add New Task</button>
    </div>
  )
}

export default TaskForm
