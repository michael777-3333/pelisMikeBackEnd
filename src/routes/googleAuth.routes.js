import {Router} from 'express'
const router =Router()
import { redirectGoogle,getgoogle,verifyGoogleToken } from '../controllers/googleAuth.controllers.js'
router.post('/auth/google',redirectGoogle, router.get('/auth/google',getgoogle) )
router.get('/verifyGoogle',verifyGoogleToken)


export default  router;


