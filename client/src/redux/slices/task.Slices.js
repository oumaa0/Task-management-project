    import {createSlice,createAsyncThunk, configureStore} from "@reduxjs/toolkit"
    import axios from'axios'
    import { createDispatchHook, useDispatch } from "react-redux"




    export const CreateTaskr=createAsyncThunk('/new task',async(data,{rejectWithValue,dispatch})=>{
        try {
            const res=await axios.post("http://localhost:8081/api/task/post",data,{
                headers:{
                    token:localStorage.getItem('token')
                }
            })
    dispatch(GetTasks())
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.msg)
        }
    })


    export const DeleteTask=createAsyncThunk(`/delete/`,async(data,{rejectWithValue,dispatch})=>{
        try {
            const res=await axios.delete(`http://localhost:8081/api/task/delete/${data}`,{
                headers:{
                    token:localStorage.getItem('token')
                }
            })
    dispatch(GetTasks())
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.msg)
        }
    })

    export const GetTasks=createAsyncThunk('/GetAlltasks',async(data,{rejectWithValue})=>{
        try {
            const res=await axios.get("http://localhost:8081/api/task/get",{
                headers:{
                    token:localStorage.getItem('token')
                }
            })
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.msg)
        }
    })




    const taskSlice=createSlice({
        name:"tasks",
        initialState:{
            taskData:[],
            error:null,
            loading:false
        },
        extraReducers:(builder)=>{
            builder.addCase(CreateTaskr.pending,(state)=>{
                state.loading=true
            })
            .addCase(CreateTaskr.fulfilled,(state,action)=>{
                state.loading=false
                state.error=null
                
            })
            .addCase(CreateTaskr.rejected,(state,action)=>{
                state.loading=false
                state.error=action.payload
                
            })

            .addCase(GetTasks.pending,(state)=>{
                state.loading=true
            })
            .addCase(GetTasks.fulfilled,(state,action)=>{
                state.loading=false
                state.error=null
                state.taskData=action.payload.Tasks
                
            })
            .addCase(GetTasks.rejected,(state,action)=>{
                state.loading=false
                state.error=action.payload
                
            })
        }
    })



    export default taskSlice.reducer