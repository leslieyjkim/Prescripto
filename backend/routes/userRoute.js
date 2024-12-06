import express from 'express'
import { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

userRouter.get('/get-profile',authUser,getProfile)
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)
userRouter.post("/book-appointment", authUser, bookAppointment)
userRouter.get('/appointments',authUser,listAppointment)
userRouter.post('/cancel-appointment', authUser, cancelAppointment)

//if you want to use razorpay for online payment
//you should add 'paymentRazorpay' into the line2, import{} list. 
//userRouter.post('/payment-razorpay', authUser, paymentRazorpay)

//you should add 'verifyRazorpay' into the line@, import{} list.
//userRouter.post('/verifyRazorpay', authUser, verifyRazorpay)




export default userRouter
