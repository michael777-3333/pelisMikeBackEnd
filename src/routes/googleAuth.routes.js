import {Router} from 'express'
const router =Router()
import { redirectGoogle,getgoogle,verifyGoogleToken,tokenLocal } from '../controllers/googleAuth.controllers.js'
router.post('/auth/google',redirectGoogle)
router.get('/auth/google',getgoogle)
router.get('/verifyGoogle',verifyGoogleToken)

router.get('/get/token',tokenLocal)
export default  router;


