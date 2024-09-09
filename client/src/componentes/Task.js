import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteTask } from '../redux/slices/task.Slices'


const Task = ({mytask}) => {
  const dispatch=useDispatch()
  return (
    <div>
      <h3>{mytask.title}</h3>
      <h3>{mytask.desc}</h3>
      <button onClick={()=>{
        dispatch(DeleteTask(mytask._id))
      }}>Delet task</button>

    </div>
  )
}

export default Task
