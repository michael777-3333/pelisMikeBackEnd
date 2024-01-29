import {Router} from 'express'
import {authRequired} from '../middlewares/validateToken.js'
import { updateUser,getUser } from '../controllers/user.controllers.js'

const router =Router()

router.put('/updateUser/:id',updateUser)
router.get('/getUser/:id',getUser)



export default router;