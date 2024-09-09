const express=require('express')
const router=express.Router()
const {GetDone, Register, login, getUserData} =require('../controllers/userControllers')
const userMiddleware = require('../middleware/userMiddleware')

router.get("/",GetDone)
router.post('/register',Register)
router.post('/login',login)
router.get('/userdata',userMiddleware,getUserData)




module.exports=router