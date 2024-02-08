import {Router} from 'express'
import {login,register,logout,profile,verifyToken, forgetPassword,resetPassword} from '../controllers/auth.controllers.js'
import {authRequired} from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { registerSchema, loginSchema,updatePassword } from '../schemas/auth.schema.js'
const router =Router()

router.post('/register',validateSchema(registerSchema),register)
router.post('/login', validateSchema(loginSchema),login)
router.post('/logout',logout)
router.get('/verify',verifyToken)
router.post('/forget-password',forgetPassword)
router.get('/profile',authRequired,profile)
router.post('/resetPassword/:id/:token',validateSchema(updatePassword), resetPassword)



export default router;