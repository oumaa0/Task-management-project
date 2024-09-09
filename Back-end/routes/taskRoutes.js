const express=require('express')
const router=express.Router()
const usermiddleware=require('../middleware/userMiddleware')
const {CreateTask,DeleteTask, GetTasks, UpdateTask }=require('../controllers/taskControlles')

router.post("/post",usermiddleware,CreateTask)
router.delete("/delete/:id",usermiddleware,DeleteTask)
router.get("/get",usermiddleware,GetTasks)
router.put("/put/:x",usermiddleware,UpdateTask)



module.exports=router